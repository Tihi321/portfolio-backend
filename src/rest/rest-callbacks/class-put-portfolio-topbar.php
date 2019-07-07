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
 * Class Put_Portfolio_Topbar
 */
class Put_Portfolio_Topbar extends Config implements Rest_Callback {

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

    $show_message       = sanitize_text_field( General_Helper::get_array_value( 'showMessage', $body ) );
    $message            = sanitize_text_field( General_Helper::get_array_value( 'message', $body ) );
    $sanitized_projects = [];
    $sanitized_logo     = [];
    $projects           = General_Helper::get_array_value( 'projects', $body );
    $logo               = General_Helper::sanitize_media( General_Helper::get_array_value( 'logo', $body ) );

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

    $this->save_options( $logo, self::CUSTOM_LOGO );
    $this->save_options( $sanitized_projects_string, self::SELECT_PROJECTS );
    $this->save_options( $show_message, self::SHOW_MESSAGE );
    $this->save_options( $message, self::MESSAGE );

    return \rest_ensure_response( __( 'Options saved with success', 'portfolio-backend' ) );
  }

}
