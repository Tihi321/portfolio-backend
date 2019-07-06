<?php
/**
 * The Admin specific functionality.
 *
 * @since   1.0.0
 * @package PortfolioBackend\Admin
 */

namespace PortfolioBackend\Admin;

use PortfolioBackend\Core\Service;
use PortfolioBackend\Core\Config;
use PortfolioBackend\Rest\Rest_Routes;
use PortfolioBackend\Helpers\General_Helper;
use PortfolioBackend\Helpers\Loader;

/**
 * Class Admin
 */
class Admin extends Config implements Service {

  /**
   * Use trait inside class.
   */
  use Loader;


  /**
   * Register all the hooks
   *
   * @since 1.0.0
   */
  public function register() : void {
    $this->add_action( 'admin_enqueue_scripts', $this, 'enqueue_admin_styles', 50 );
    $this->add_action( 'admin_enqueue_scripts', $this, 'enqueue_admin_scripts' );
  }

  /**
   * Register the Stylesheets for the admin area.
   *
   * @since 1.0.0
   */
  public function enqueue_admin_styles() {

    $main_admin_style = General_Helper::get_manifest_assets_data( 'adminPortfolio.css' );
    wp_register_style( static::PLUGIN_NAME . '-admin-style', $main_admin_style, '', static::PLUGIN_VERSION, false );
    wp_enqueue_style( static::PLUGIN_NAME . '-admin-style' );

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

      $main_admin_script = General_Helper::get_manifest_assets_data( 'adminPortfolio.js' );
      wp_register_script(
        static::PLUGIN_NAME . '-admin-scripts',
        $main_admin_script,
        array(
            'wp-plugins',
            'wp-edit-post',
            'wp-element',
            'wp-components',
            'wp-editor',
        ),
        static::PLUGIN_VERSION,
        true
      );

      wp_enqueue_script( static::PLUGIN_NAME . '-admin-scripts' );

      // add localization to javascript.
      if ( function_exists( 'gutenberg_get_jed_locale_data' ) ) {
        $locale  = gutenberg_get_jed_locale_data( 'portfolio-backend' );
        $content = 'wp.i18n.setLocaleData( ' . wp_json_encode( $locale ) . ', "portfolio-backend" );';
        wp_script_add_data( static::PLUGIN_NAME . '-admin-scripts', 'data', $content );
      }

      wp_localize_script(
        static::PLUGIN_NAME . '-admin-scripts',
        'portfolioDashboard',
        array(
            'root' => esc_url_raw( rest_url() ),
            'getTopbarOptionsApi' => Rest_Routes::PORTFOLIO_GET_TOPBAR_SLUG,
            'saveTopbarOptionsApi' => Rest_Routes::PORTFOLIO_SAVE_TOPBAR_SLUG,
            'getPageOptionsApi' => Rest_Routes::PORTFOLIO_GET_PAGE_SLUG,
            'savePageOptionsApi' => Rest_Routes::PORTFOLIO_SAVE_PAGE_OPTIONS_SLUG,
            'savePageAboutApi' => Rest_Routes::PORTFOLIO_SAVE_PAGE_ABOUT_SLUG,
            'savePageWebApi' => Rest_Routes::PORTFOLIO_SAVE_PAGE_WEB_SLUG,
            'savePageVideoApi' => Rest_Routes::PORTFOLIO_SAVE_PAGE_VIDEO_SLUG,
            'savePageAndroidApi' => Rest_Routes::PORTFOLIO_SAVE_PAGE_ANDROID_SLUG,
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

        wp_register_script( 'react', General_Helper::get_base_url() . 'skin/public/scripts/vendors/react.development.js', array(), '16.6.3', false );

        wp_register_script( 'react-dom', General_Helper::get_base_url() . 'skin/public/scripts/vendors/react-dom.development.js', array(), '16.6.3', false );

      }
    }

    wp_enqueue_script( 'react' );
    wp_enqueue_script( 'react-dom' );

  }

}
