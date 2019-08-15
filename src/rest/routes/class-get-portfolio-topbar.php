<?php
/**
 * The class file that returns all data for dashboard
 *
 * @since   1.0.0
 * @package PortfolioBackend\Routes\Route
 */

namespace PortfolioBackend\Routes\Route;

use Eightshift_Libs\Routes\Callable_Route;

use PortfolioBackend\Routes\Base_Route;
use PortfolioBackend\Core\Config;

/**
 * Class Get_Portfolio_Topbar
 */
class Get_Portfolio_Topbar extends Base_Route implements Callable_Route {
  const ROUTE_NAME = '/portfolio-topbar';

  /**
   * Options slug
   *
   * @since 1.0.0
   */
  const OPTIONS_SLUG = self::NAMESPACE_NAME . self::VERSION . self::ROUTE_NAME;

  /**
   * Get callback arguments array
   *
   * @return array Either an array of options for the endpoint,
   */
  protected function get_callback_arguments() : array {
    return [
      'methods'             => static::READABLE,
      'callback'            => [ $this, 'route_callback' ],
    ];
  }


  /**
   * Get all dashboard options.
   *
   * This callback is triggered when a front end app
   * goes to the @link https://API-URL/wp-json/portfolio-backend/v1/portfolio-topbar
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

    // get all general options.
    $logo                = get_option( Config::CUSTOM_LOGO );
    $projects            = get_option( Config::SELECT_PROJECTS );
    $message             = get_option( Config::MESSAGE );
    $show_message_option = get_option( Config::SHOW_MESSAGE );
    $show_message        = $show_message_option ?: '0';

    $output =
    [
      'generalOptions' => [
        'logo'           => $logo,
        'message'        => $message,
        'showMessage'    => $show_message,
      ],
      'projectsOptions' => [
        'projects'       => $projects,
      ],
    ];

    return \rest_ensure_response( $output );
  }

}
