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
 * Class Get_Portfolio_Page
 */
class Get_Portfolio_Page extends Config implements Rest_Callback {

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
  public function rest_callback( \WP_REST_Request $request ) {

    // get all general options.
    $logo          = get_option( self::PAGE_LOGO );
    $menu_items    = get_option( self::ADDITIONAL_MENU_ITEMS );
    $github        = get_option( self::GITHUB_LINK );
    $linkedin      = get_option( self::LINKEDIN_LINK );
    $youtube       = get_option( self::YOUTUBE_LINK );
    $google_play   = get_option( self::GOOGLE_PLAY_LINK );
    $conntact_mail = get_option( self::CONTACT_MAIL_LINK );

    $output =
    [
        'generalOptions' => [
            'logo'           => $logo,
            'menuItems'      => $menu_items,
            'github'         => $github,
            'linkedin'       => $linkedin,
            'youtube'        => $youtube,
            'googlePlay'     => $google_play,
            'contactMail'    => $conntact_mail,
        ],
    ];

    \wp_reset_postdata();

    return \rest_ensure_response( $output );
  }

}
