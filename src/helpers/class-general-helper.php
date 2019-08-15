<?php
/**
 * The general helper specific functionality.
 *
 * @since   1.0.0
 * @package PortfolioBackend\Helpers
 */

namespace PortfolioBackend\Helpers;

use PortfolioBackend\Core\Config;

/**
 * Class General Helper
 */
abstract class General_Helper {

  /**
   * Gets this plugin file.
   *
   * @since  1.0.0
   *
   * @return string
   */
  public static function get_basename() {
    return plugin_basename( dirname( __FILE__, 2 ) ) . Config::PLUGIN_NAME . '.php';
  }

  /**
   * Gets this plugin base path.
   *
   * @since  1.0.0
   *
   * @return string
   */
  public static function get_base_path() {
    return plugin_dir_path( dirname( __FILE__, 2 ) );
  }

  /**
   * Gets this plugin base url.
   *
   * @since  1.0.0
   *
   * @return string
   */
  public static function get_base_url() {
    return plugin_dir_url( dirname( __FILE__, 2 ) );
  }

}
