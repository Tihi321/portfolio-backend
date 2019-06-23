<?php
/**
 * File containing the main theme class
 *
 * @since 1.0.0
 * @package PortfolioBackend\Core
 */

namespace PortfolioBackend\Core;

use PortfolioBackend\Helpers\General_Helper;
use PortfolioBackend\Helpers\Loader;
use PortfolioBackend\Admin;
use PortfolioBackend\Languages;
use PortfolioBackend\Rest;
use PortfolioBackend\Exception;

/**
 * The main start class.
 *
 * All classes are instantiated here that represent different functionality for plugin.
 */
class Main implements Registrable {

  /**
   * Use trait inside class.
   */
  use Loader;

  /**
   * Array of instantiated services.
   *
   * @var Service[]
   */
  private $services = [];

  /**
   * Initialize class
   * Load hooks and define some global variables.
   *
   * @since 1.0.0
   */
  public function __construct() {

    // If global variable is not defined exit.
    if ( ! defined( 'PB_ENV' ) ) {
      return false;
    }

  }

  /**
   * Register the plugin with the WordPress system.
   *
   * The register_service method will call the register() method in every service class,
   * which holds the actions and filters - effectively replacing the need to manually add
   * themn in one place.
   *
   * @throws Exception\Invalid_Service If a service is not valid.
   */
  public function register() : void {

    add_action( 'after_setup_theme', [ $this, 'register_services' ] );

    $this->register_assets_manifest_data();
  }
  /**
   * Register the individual services of this plugin.
   *
   * @throws Exception\Invalid_Service If a service is not valid.
   */
  public function register_services() {
    // Bail early so we don't instantiate services twice.
    if ( ! empty( $this->services ) ) {
      return;
    }
    $classes        = $this->get_service_classes();
    $this->services = array_map(
      [ $this, 'instantiate_service' ],
      $classes
    );
    array_walk(
      $this->services,
      function( Service $service ) {
        $service->register();
      }
    );
  }
  /**
   * Register bundled asset manifest
   *
   * @throws Exception\Missing_Manifest Throws error if manifest is missing.
   * @return void
   */
  public function register_assets_manifest_data() {

    $response = file( PB_ASSETS_PUBLIC_PATH . 'manifest.json', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES );

    if ( ! $response ) {
      $error_message = esc_html__( 'manifest.json is missing. Bundle the theme before using it.', 'portfolio-backend' );
      throw Exception\Missing_Manifest::message( $error_message );
    }

    define( 'PB_ASSETS_MANIFEST', implode( ' ', $response ) );
  }
  /**
   * Instantiate a single service.
   *
   * @param string $class Service class to instantiate.
   *
   * @return Service
   * @throws Exception\Invalid_Service If the service is not valid.
   */
  private function instantiate_service( $class ) {
    if ( ! class_exists( $class ) ) {
      throw Exception\Invalid_Service::from_service( $class );
    }
    $service = new $class();
    if ( ! $service instanceof Service ) {
      throw Exception\Invalid_Service::from_service( $service );
    }
    return $service;
  }
  /**
   * Get the list of services to register.
   *
   * A list of classes which contain hooks.
   *
   * @return array<string> Array of fully qualified class names.
   */
  private function get_service_classes() {
    return [

        // Admin.
        Admin\Admin::class,
        Admin\Menu_Page::class,
        Admin\Media::class,

        // Languages.
        Languages\Internationalization::class,

        // Rest.
        Rest\Rest_Register::class,

    ];
  }

}
