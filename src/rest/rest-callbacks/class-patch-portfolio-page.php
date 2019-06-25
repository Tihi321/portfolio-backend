<?php
/**
 * The class file that contains method for saving dashboard data
 *
 * @since   1.0.0
 * @package PortfolioBackend\Rest\Rest_Callbacks
 */

namespace PortfolioBackend\Rest\Rest_Callbacks;

use PortfolioBackend\Core\Config;
use PortfolioBackend\Helpers\Object_Helper;
use PortfolioBackend\Helpers\General_Helper;

/**
 * Class Patch_Portfolio_Page
 */
class Patch_Portfolio_Page extends Config implements Rest_Callback {

  /**
   * Use trait inside class.
   */
  use Object_Helper;

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
  public function rest_callback( \WP_REST_Request $request ) {

    $body = \json_decode( $request->get_body(), true );

    $github         = sanitize_text_field( General_Helper::get_array_value( 'github', $body ) );
    $linkedin       = sanitize_text_field( General_Helper::get_array_value( 'linkedin', $body ) );
    $youtube        = sanitize_text_field( General_Helper::get_array_value( 'youtube', $body ) );
    $google_play    = sanitize_text_field( General_Helper::get_array_value( 'googlePlay', $body ) );
    $conntact_mail  = sanitize_text_field( General_Helper::get_array_value( 'contactMail', $body ) );
    $sanitized_logo = [];
    $logo           = General_Helper::get_array_value( 'logo', $body );

    // sanitize all logo object values.
    foreach ( $logo as $key => $item ) {
      if ( $key !== 'id' && $key !== 'url' && $key !== 'title' ) {
        continue;
      }
      if ( $key === 'url' ) {
        $sanitized_logo[ $key ] = esc_url_raw( $item );
        continue;
      }

      $sanitized_logo[ $key ] = sanitize_text_field( $item );
    }

    $sanitized_logo_string = wp_json_encode( $sanitized_logo );

    $this->save_options( $sanitized_logo_string, self::PAGE_LOGO );
    $this->save_options( $github, self::GITHUB_LINK );
    $this->save_options( $linkedin, self::LINKEDIN_LINK );
    $this->save_options( $youtube, self::YOUTUBE_LINK );
    $this->save_options( $google_play, self::GOOGLE_PLAY_LINK );
    $this->save_options( $conntact_mail, self::CONTACT_MAIL_LINK );

    return \rest_ensure_response( __( 'Options saved with success', 'portfolio-backend' ) );
  }

}
