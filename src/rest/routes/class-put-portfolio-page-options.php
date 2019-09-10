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
 * Class Put_Portfolio_Page_Options
 */
class Put_Portfolio_Page_Options extends Base_Route implements Callable_Route, Route_Security {

  const ROUTE_NAME = '/save-portfolio-options-page';

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

    $github        = esc_url_raw( $body['github'] ?? null );
    $linkedin      = esc_url_raw( $body['linkedin'] ?? null );
    $youtube       = esc_url_raw( $body['youtube'] ?? null );
    $google_play   = esc_url_raw( $body['googlePlay'] ?? null );
    $wordpress     = esc_url_raw( $body['wordPress'] ?? null );
    $conntact_mail = sanitize_text_field( $body['contactMail'] ?? null );

    $sanitized_menu_items = [];
    $menu_items           = $body['menuItems'] ?? null;

    // sanitize all menu items object values.
    foreach ( $menu_items as $menu_item ) {

      $sanitized_menu_item = [];

      foreach ( $menu_item as $key => $item ) {
        if ( $key !== 'title' && $key !== 'color' && $key !== 'link' ) {
          continue;
        }
        if ( $key === 'link' ) {
          $sanitized_menu_item[ $key ] = esc_url_raw( $item );
          continue;
        }

        $sanitized_menu_item[ $key ] = sanitize_text_field( $item );
      }
      $sanitized_menu_items[] = $sanitized_menu_item;
    }

    $sanitized_menu_items_string = wp_json_encode( $sanitized_menu_items );

    apply_filters( 'pb_save_options', $sanitized_menu_items_string, Config::ADDITIONAL_MENU_ITEMS );
    apply_filters( 'pb_save_options', $github, Config::GITHUB_LINK );
    apply_filters( 'pb_save_options', $linkedin, Config::LINKEDIN_LINK );
    apply_filters( 'pb_save_options', $youtube, Config::YOUTUBE_LINK );
    apply_filters( 'pb_save_options', $google_play, Config::GOOGLE_PLAY_LINK );
    apply_filters( 'pb_save_options', $wordpress, Config::WORDPRESS_LINK );
    apply_filters( 'pb_save_options', $conntact_mail, Config::CONTACT_MAIL_LINK );

    return \rest_ensure_response( __( 'Options page saved', 'portfolio-backend' ) );
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
