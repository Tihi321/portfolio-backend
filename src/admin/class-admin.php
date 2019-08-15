<?php
/**
 * The Admin specific functionality.
 *
 * @since   1.0.0
 * @package PortfolioBackend\Admin
 */

namespace PortfolioBackend\Admin;

use Eightshift_Libs\Core\Service;
use Eightshift_Libs\Assets\Manifest_Data;

use PortfolioBackend\Core\Config;
use PortfolioBackend\Routes\Route;
use PortfolioBackend\Helpers\General_Helper;

/**
 * Class Admin
 */
class Admin implements Service {

  /**
   * Instance variable of manifest data.
   *
   * @var object
   *
   * @since 1.0.0
   */
  protected $manifest;

  /**
   * Create a new admin instance that injects manifest data for use in assets registration.
   *
   * @param Manifest_Data $manifest Inject manifest which holds data about assets from manifest.json.
   *
   * @since 1.0.0
   */
  public function __construct( Manifest_Data $manifest ) {
    $this->manifest = $manifest;
  }


  /**
   * Register all the hooks
   *
   * @since 1.0.0
   */
  public function register() : void {
    add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_admin_styles' ], 50 );
    add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_admin_scripts' ] );
  }

  /**
   * Register the Stylesheets for the admin area.
   *
   * @since 1.0.0
   */
  public function enqueue_admin_styles() {

    $main_admin_style = $this->manifest->get_assets_manifest_item( 'adminPortfolio.css' );
    wp_register_style( Config::PLUGIN_NAME . '-admin-style', $main_admin_style, '', Config::PLUGIN_VERSION, false );
    wp_enqueue_style( Config::PLUGIN_NAME . '-admin-style' );

  }


  /**
   * Register the JavaScript for the admin area.
   *
   * @param string $hook page top slug.
   * @since 1.0.0
   */
  public function enqueue_admin_scripts( string $hook ) : void {

    // load scripts only on plugin dashboard pages.
    if ( $hook === 'toplevel_page_portfolio_topbar' || $hook === 'portfolio_page_portfolio_page' ) {
      $this->enqueue_react_developemnt();
      wp_enqueue_media();

      $main_admin_script = $this->manifest->get_assets_manifest_item( 'adminPortfolio.js' );
      wp_register_script(
        Config::PLUGIN_NAME . '-admin-scripts',
        $main_admin_script,
        array(
          'wp-plugins',
          'wp-edit-post',
          'wp-element',
          'wp-components',
          'wp-editor',
        ),
        Config::PLUGIN_VERSION,
        true
      );

      wp_enqueue_script( Config::PLUGIN_NAME . '-admin-scripts' );

      // add localization to javascript.
      if ( function_exists( 'gutenberg_get_jed_locale_data' ) ) {
        $locale  = gutenberg_get_jed_locale_data( 'portfolio-backend' );
        $content = 'wp.i18n.setLocaleData( ' . wp_json_encode( $locale ) . ', "portfolio-backend" );';
        wp_script_add_data( Config::PLUGIN_NAME . '-admin-scripts', 'data', $content );
      }

      wp_localize_script(
        Config::PLUGIN_NAME . '-admin-scripts',
        'portfolioDashboard',
        array(
          'root' => esc_url_raw( rest_url() ),
          'getTopbarOptionsApi' => Route\Get_Portfolio_Topbar::OPTIONS_SLUG,
          'saveTopbarOptionsApi' => Route\Put_Portfolio_Topbar::OPTIONS_SLUG,
          'getPageOptionsApi' => Route\Get_Portfolio_Page::OPTIONS_SLUG,
          'savePageOptionsApi' => Route\Put_Portfolio_Page_Options::OPTIONS_SLUG,
          'savePageAboutApi' => Route\Put_Portfolio_Page_About::OPTIONS_SLUG,
          'savePageWebApi' => Route\Put_Portfolio_Page_Web::OPTIONS_SLUG,
          'savePageVideoApi' => Route\Put_Portfolio_Page_Video::OPTIONS_SLUG,
          'savePageAndroidApi' => Route\Put_Portfolio_Page_Android::OPTIONS_SLUG,
          'portfolioNonce' => wp_create_nonce( 'portfolio_save_options_nonce' ),
          'nonce' => wp_create_nonce( 'wp_rest' ),
        )
      );

    }

  }

  /**
   * Register react for development if debug mode enabled.
   *
   * @since 1.0.0
   */
  public function enqueue_react_developemnt() {

    // If script debug is not enabled import react development.
    if ( defined( 'SCRIPT_DEBUG' ) && ! SCRIPT_DEBUG ) {

        // If in development add development not minified react libraries.
      if ( PB_ENV === 'develop' ) {
        wp_deregister_script( 'react' );
        wp_deregister_script( 'react-dom' );

        wp_register_script( 'react', General_Helper::get_base_url() . 'skin/public/scripts/vendors/react.development.js', array(), '16.8.6', false );

        wp_register_script( 'react-dom', General_Helper::get_base_url() . 'skin/public/scripts/vendors/react-dom.development.js', array(), '16.8.6', false );

      }
    }

    wp_enqueue_script( 'react' );
    wp_enqueue_script( 'react-dom' );

  }

}
