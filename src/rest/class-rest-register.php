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
    $this->get_portfolio_topbar   = new Rest_Callbacks\Get_Portfolio_Topbar();
    $this->patch_portfolio_topbar = new Rest_Callbacks\Patch_Portfolio_Topbar();
    $this->get_portfolio_page   = new Rest_Callbacks\Get_Portfolio_Page();
    $this->patch_portfolio_page = new Rest_Callbacks\Patch_Portfolio_Page();

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

    // Register topbar routes, register get route.
    register_rest_route(
      static::REST_API_BASE . static::REST_API_VERSION,
      static::PORTFOLIO_GET_TOPBAR,
      array(
          array(
              'methods'  => 'GET',
              'callback' => [ $this->get_portfolio_topbar, static::REST_CALLBACK ],
          ),
      )
    );

    // Register topbar routes, register patch route.
    register_rest_route(
      static::REST_API_BASE . static::REST_API_VERSION,
      static::PORTFOLIO_SAVE_TOPBAR,
      array(
          'methods'  => 'PATCH',
          'callback' => [ $this->patch_portfolio_topbar, static::REST_CALLBACK ],
          'permission_callback' => [ $this->rest_security, self::USER_BASIC_AUTHENTIFICATION ],
      )
    );

    // Register page routes, register get route.
    register_rest_route(
      static::REST_API_BASE . static::REST_API_VERSION,
      static::PORTFOLIO_GET_PAGE,
      array(
          array(
              'methods'  => 'GET',
              'callback' => [ $this->get_portfolio_page, static::REST_CALLBACK ],
          ),
      )
    );

    // Register page routes, register patch route.
    register_rest_route(
      static::REST_API_BASE . static::REST_API_VERSION,
      static::PORTFOLIO_SAVE_PAGE,
      array(
          'methods'  => 'PATCH',
          'callback' => [ $this->patch_portfolio_page, static::REST_CALLBACK ],
          'permission_callback' => [ $this->rest_security, self::USER_BASIC_AUTHENTIFICATION ],
      )
    );

  }

}
