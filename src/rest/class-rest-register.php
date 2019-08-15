<?php
/**
 * Register all Rest_Routes.
 *
 * @since   1.0.0
 * @package PortfolioBackend\Rest_Register
 */

namespace PortfolioBackend\Rest;

use Eightshift_Libs\Core\Service;
use PortfolioBackend\Rest\Rest_Callbacks;
use PortfolioBackend\Helpers\General_Helper;

/**
 * Class Register
 */
class Rest_Register extends Rest_Routes implements Service {

  /**
   * Initialize the class
   *
   * @since 1.0.0
   */
  public function __construct() {

    // Callbacks.
    $this->get_portfolio_topbar       = new Rest_Callbacks\Get_Portfolio_Topbar();
    $this->put_portfolio_topbar       = new Rest_Callbacks\Put_Portfolio_Topbar();
    $this->get_portfolio_page         = new Rest_Callbacks\Get_Portfolio_Page();
    $this->put_portfolio_page_options = new Rest_Callbacks\Put_Portfolio_Page_Options();
    $this->put_portfolio_page_about   = new Rest_Callbacks\Put_Portfolio_Page_About();
    $this->put_portfolio_page_web     = new Rest_Callbacks\Put_Portfolio_Page_Web();
    $this->put_portfolio_page_video   = new Rest_Callbacks\Put_Portfolio_Page_Video();
    $this->put_portfolio_page_android = new Rest_Callbacks\Put_Portfolio_Page_Android();

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
    add_action( 'rest_api_init', [ $this, 'register_routes' ] );
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
        'methods'  => 'PUT',
        'callback' => [ $this->put_portfolio_topbar, static::REST_CALLBACK ],
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

    // Register page routes, register put options route.
    register_rest_route(
      static::REST_API_BASE . static::REST_API_VERSION,
      static::PORTFOLIO_SAVE_OPTIONS_PAGE,
      array(
        'methods'  => 'PUT',
        'callback' => [ $this->put_portfolio_page_options, static::REST_CALLBACK ],
        'permission_callback' => [ $this->rest_security, self::USER_BASIC_AUTHENTIFICATION ],
      )
    );

    // Register page routes, register put about route.
    register_rest_route(
      static::REST_API_BASE . static::REST_API_VERSION,
      static::PORTFOLIO_SAVE_ABOUT_PAGE,
      array(
        'methods'  => 'PUT',
        'callback' => [ $this->put_portfolio_page_about, static::REST_CALLBACK ],
        'permission_callback' => [ $this->rest_security, self::USER_BASIC_AUTHENTIFICATION ],
      )
    );

    // Register page routes, register put web route.
    register_rest_route(
      static::REST_API_BASE . static::REST_API_VERSION,
      static::PORTFOLIO_SAVE_WEB_PAGE,
      array(
        'methods'  => 'PUT',
        'callback' => [ $this->put_portfolio_page_web, static::REST_CALLBACK ],
        'permission_callback' => [ $this->rest_security, self::USER_BASIC_AUTHENTIFICATION ],
      )
    );

    // Register page routes, register put video route.
    register_rest_route(
      static::REST_API_BASE . static::REST_API_VERSION,
      static::PORTFOLIO_SAVE_VIDEO_PAGE,
      array(
        'methods'  => 'PUT',
        'callback' => [ $this->put_portfolio_page_video, static::REST_CALLBACK ],
        'permission_callback' => [ $this->rest_security, self::USER_BASIC_AUTHENTIFICATION ],
      )
    );

    // Register page routes, register put android route.
    register_rest_route(
      static::REST_API_BASE . static::REST_API_VERSION,
      static::PORTFOLIO_SAVE_ANDROID_PAGE,
      array(
        'methods'  => 'PUT',
        'callback' => [ $this->put_portfolio_page_android, static::REST_CALLBACK ],
        'permission_callback' => [ $this->rest_security, self::USER_BASIC_AUTHENTIFICATION ],
      )
    );

  }

}
