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
 * Class Put_Portfolio_Page_About
 */
class Put_Portfolio_Page_About extends Config implements Rest_Callback {

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

    $about_accent_color   = sanitize_text_field( General_Helper::get_array_value( 'aboutAccentColor', $body ) );
    $about_description    = General_Helper::sanitize_html_input( General_Helper::get_array_value( 'aboutDescription', $body ) );
    $about_animation_file = General_Helper::sanitize_media( General_Helper::get_array_value( 'aboutAnimationFile', $body ) );

    $this->save_options( $about_animation_file, self::ABOUT_ANIMATION_FILE );
    $this->save_options( $about_accent_color, self::ABOUT_ACCENT_COLOR );
    $this->save_options( $about_description, self::ABOUT_DESCRIPTION );

    return \rest_ensure_response( __( 'About page saved', 'portfolio-backend' ) );
  }

}
