<?php
/**
 * The class file that returns all data for dashboard
 *
 * @since   1.0.0
 * @package PortfolioBackend\Rest\Rest_Callbacks
 */

namespace PortfolioBackend\Rest\Rest_Callbacks;

use PortfolioBackend\Core\Config;

/**
 * Class Get_Dashboard
 */
class Get_Portfolio_Options extends Config implements Rest_Callback {

  /**
   * Get all dashboard options.
   *
   * This callback is triggered when a front end app
   * goes to the @link https://API-URL/wp-json/portfolio-backend/v1/portfolio-options
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
  public function rest_callback( \WP_REST_Request $request ) {

    // get all general options.
    $logo                = get_option( self::CUSTOM_LOGO );
    $projects            = get_option( self::SELECT_PROJECTS );
    $message             = get_option( self::MESSAGE );
    $show_message_option = get_option( self::SHOW_MESSAGE );
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

    \wp_reset_postdata();

    return \rest_ensure_response( $output );
  }

}
