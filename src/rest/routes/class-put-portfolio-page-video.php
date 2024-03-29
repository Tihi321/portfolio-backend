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
use PortfolioBackend\Routes\Routes_Security;
use PortfolioBackend\Routes\Route_Security;

use PortfolioBackend\Core\Config;

/**
 * Class Put_Portfolio_Page_Video
 */
class Put_Portfolio_Page_Video extends Base_Route implements Callable_Route, Route_Security {

  const ROUTE_NAME = '/save-portfolio-video-page';

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
  protected $routes_security;

  /**
   * Add class that checks if user logged in
   *
   * @param Routes_Security $routes_security Security callbacs.
   *
   * @since 1.0.0
   */
  public function __construct( Routes_Security $routes_security ) {
    $this->routes_security = $routes_security;
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

    $video_lottie_loop    = sanitize_text_field( $body['videoLootieLoop'] ?? '' );
    $video_accent_color   = sanitize_text_field( $body['videoAccentColor'] ?? '' );
    $video_description    = apply_filters( 'pb_sanitize_html_input', $body['videoDescription'] ?? '' );
    $video_animation_file = apply_filters( 'pb_sanitize_media', $body['videoAnimationFile'] ?? '' );

    $sanitized_projects = [];
    $projects           = $body['videoProjects'] ?? [];

    // sanitize all menu items object values.
    foreach ( $projects as $project ) {

      $sanitized_project = [];

      foreach ( $project as $key => $item ) {
        if ( $key !== 'title' && $key !== 'image' && $key !== 'link' ) {
          continue;
        }
        if ( $key === 'link' ) {
          $sanitized_project[ $key ] = esc_url_raw( $item );
          continue;
        }
        if ( $key === 'image' ) {
          $sanitized_project[ $key ] = apply_filters( 'pb_sanitize_media', $item );
          continue;
        }

        $sanitized_project[ $key ] = sanitize_text_field( $item );
      }
      $sanitized_projects[] = $sanitized_project;
    }

    $sanitized_projects_string = wp_json_encode( $sanitized_projects );

    apply_filters( 'pb_save_options', $video_animation_file, Config::VIDEO_ANIMATION_FILE );
    apply_filters( 'pb_save_options', $video_lottie_loop, Config::VIDEO_LOTTIE_LOOP );
    apply_filters( 'pb_save_options', $video_accent_color, Config::VIDEO_ACCENT_COLOR );
    apply_filters( 'pb_save_options', $video_description, Config::VIDEO_DESCRIPTION );
    apply_filters( 'pb_save_options', $sanitized_projects_string, Config::VIDEO_PROJECTS );

    return \rest_ensure_response( __( 'Video page saved', 'portfolio-backend' ) );
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
    return $this->routes_security->user_basic_authentication_check( $request );
  }

}
