<?php
/**
 * The class file that contains method for saving dashboard data
 *
 * @since   1.0.0
 * @package PortfolioBackend\Routes\Route
 */

namespace PortfolioBackend\Routes\Route;

use Eightshift_Libs\Routes\Callable_Route;

use PortfolioBackend\Routes\Base_Route;
use PortfolioBackend\Routes\Rest_Security;
use PortfolioBackend\Routes\Route_Security;

use PortfolioBackend\Core\Config;

/**
 * Class Put_Portfolio_Topbar
 */
class Put_Portfolio_Topbar extends Base_Route implements Callable_Route, Route_Security {

  const ROUTE_NAME = '/save-portfolio-topbar';

  /**
   * Options slug
   *
   * @since 1.0.0
   */
  const OPTIONS_SLUG = self::NAMESPACE_NAME . self::VERSION . self::ROUTE_NAME;

  /**
   * Instance of security class.
   *
   * @var object
   *
   * @since 1.0.0
   */
  protected $rest_security;

  /**
   * Add class that checks if user logged in
   *
   * @param Rest_Security $rest_security Security callbacs.
   *
   * @since 1.0.0
   */
  public function __construct( Rest_Security $rest_security ) {
    $this->rest_security = $rest_security;
  }

  /**
   * Get callback arguments array
   *
   * @return array Either an array of options for the endpoint,
   */
  protected function get_callback_arguments() : array {
    return [
      'methods'             => static::UPDATEABLE,
      'callback'            => [ $this, 'route_callback' ],
      'permission_callback' => [ $this, 'authentification_check' ],
    ];
  }

  /**
   * Update portfolio general options data, updated through admin dashboard.
   *
   * This callback is triggered when a admin dashboard
   * goes to the @link https://API-URL/wp-json/portfolio-backend/v1/save-portfolio-topbar
   * endpoint.
   *
   * @api
   *
   * @throws \WP_Error Error if the token is missing or wrong or the password
   * is the same.
   * @param \WP_REST_Request $request Data got from enpoint url.
   * @return \WP_REST_Response|\WP_Error          Developer data array.
   *
   * @since 1.0.0
   */
  public function route_callback( \WP_REST_Request $request ) {

    $body = \json_decode( $request->get_body(), true );

    $show_message       = sanitize_text_field( $body['showMessage'] ?? null );
    $message            = sanitize_text_field( $body['message'] ?? null );
    $sanitized_projects = [];
    $sanitized_logo     = [];
    $projects           = $body['projects'] ?? null;
    $logo               = apply_filters( 'pb_sanitize_media', $body['logo'] ?? '' );

    // sanitize all project object values.
    foreach ( $projects as $project ) {

      $sanitized_project = [];

      foreach ( $project as $key => $item ) {
        if ( $key !== 'title' && $key !== 'path' && $key !== 'color' && $key !== 'link' ) {
          continue;
        }
        if ( $key === 'link' ) {
          $sanitized_project[ $key ] = esc_url_raw( $item );
          continue;
        }

        $sanitized_project[ $key ] = sanitize_text_field( $item );
      }
      $sanitized_projects[] = $sanitized_project;
    }

    $sanitized_projects_string = wp_json_encode( $sanitized_projects );

    apply_filters( 'pb_save_options', $logo, Config::CUSTOM_LOGO );
    apply_filters( 'pb_save_options', $sanitized_projects_string, Config::SELECT_PROJECTS );
    apply_filters( 'pb_save_options', $show_message, Config::SHOW_MESSAGE );
    apply_filters( 'pb_save_options', $message, Config::MESSAGE );

    return \rest_ensure_response( __( 'Options saved with success', 'portfolio-backend' ) );
  }

  /**
   * Ensure that user is logged in
   *
   * @api
   *
   * @param \WP_REST_Request $request Full data about the request.
   * @return bool|error               True if user authentication passes, error otherwise.
   *
   * @since 1.0.0
   */
  public function authentification_check( \WP_REST_Request $request ) {
    return $this->rest_security->user_basic_authentication_check( $request );
  }

}
