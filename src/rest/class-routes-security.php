<?php
/**
 * Class that handles REST security checks
 *
 * @since   1.0.0
 * @package PortfolioBackend\Routes
 */

namespace PortfolioBackend\Routes;

/**
 * Class containing registered rest routes
 */
final class Routes_Security {

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
  public function user_basic_authentication_check( \WP_REST_Request $request ) {

    $headers = $request->get_headers();

    if ( empty( $headers ) ) {
      return apply_filters( 'pb_rest_error_handler', 'empty_header' );
    }

    if ( ! is_user_logged_in() ) {
      return apply_filters( 'pb_rest_error_handler', 'user_not_authenticated' );
    }

    if ( ! isset( $headers['portfolio_nonce'] ) && ! wp_verify_nonce( sanitize_key( $headers['portfolio_nonce'] ), 'portfolio_save_options_nonce' ) ) {
      return apply_filters( 'pb_rest_error_handler', 'user_not_authenticated' );
    }

    if ( empty( $request->get_body() ) ) {
      return apply_filters( 'pb_rest_error_handler', 'empty_body' );
    }

    return true;
  }

}
