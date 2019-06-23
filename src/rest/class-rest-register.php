<?php
/**
 * Register all Rest_Routes.
 *
 * @since   1.0.0
 * @package PortfolioBackend\Rest_Register
 */

namespace PortfolioBackend\Rest;

use PortfolioBackend\Core\Service;
use PortfolioBackend\Helpers\Loader;
use PortfolioBackend\Rest\Rest_Callbacks;
use PortfolioBackend\Helpers\General_Helper;

/**
 * Class Register
 */
class Rest_Register extends Rest_Routes implements Service {

  /**
   * Use trait inside class.
   */
  use Loader;

  /**
   * Initialize the class
   *
   * @since 1.0.0
   */
  public function __construct() {

    // Callbacks.
    $this->get_options   = new Rest_Callbacks\Get_Portfolio_Options();
    $this->patch_options = new Rest_Callbacks\Patch_Portfolio_Options();

    // Security.
    $this->rest_security = new Rest_Security();
  }

  /**
   * Register all the hooks
   *
   * @since 1.0.0
   */
  public function register() : void {

    // Register Rest routes.
    $this->add_action( 'rest_api_init', $this, 'register_routes' );
  }

  /**
   * A callback function that handles REST routes
   *
   * @api
   *
   * @since 1.0.0
   */
  public function register_routes() : void {

    register_rest_route(
      static::REST_API_BASE . static::REST_API_VERSION,
      static::PORTFOLIO_GET_OPTIONS,
      array(
          array(
              'methods'  => 'GET',
              'callback' => [ $this->get_options, static::REST_CALLBACK ],
          ),
      )
    );

    register_rest_route(
      static::REST_API_BASE . static::REST_API_VERSION,
      static::PORTFOLIO_SAVE_OPTIONS,
      array(
          'methods'  => 'PATCH',
          'callback' => [ $this->patch_options, static::REST_CALLBACK ],
          'permission_callback' => [ $this->rest_security, self::USER_BASIC_AUTHENTIFICATION ],
      )
    );

  }

}
