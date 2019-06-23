<?php
/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since   1.0.0
 * @package PortfolioBackend\Languages
 */

namespace PortfolioBackend\Languages;

use PortfolioBackend\Core\Service;
use PortfolioBackend\Helpers\General_Helper;
use PortfolioBackend\Helpers\Loader;

/**
 * Class Internationalization
 */
class Internationalization implements Service {

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
    $this->add_action( 'plugins_loaded', $this, 'load_plugin_textdomain' );
  }


  /**
   * Load the plugin text domain for translation.
   *
   * @since 1.0.0
   */
  public function load_plugin_textdomain() {
    load_plugin_textdomain(
      static::PLUGIN_NAME,
      false,
      General_Helper::get_base_url() . 'languages/'
    );
  }
}
