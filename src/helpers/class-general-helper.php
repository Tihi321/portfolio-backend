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
abstract class General_Helper extends Config {

  /**
   * Check if array has key and return its value if true.
   * Useful if you want to be sure that key exists and return empty if it doesn't.
   *
   * @param string $key   Array key to check.
   * @param array  $array Array in which the key should be checked.
   * @return string       Value of the key if it exists, empty string if not.
   *
   * @since 1.0.0
   */
  public static function get_array_value( $key, $array ) {
    return ( gettype( $array ) === 'array' && array_key_exists( $key, $array ) ) ? $array[ $key ] : '';
  }

  /**
   * Sanitise all values in array.
   *
   * @param array  $array                 Provided array.
   * @param string $sanitization_function Provided sanitization type to use on keys.
   * @return array
   *
   * @since 1.0.0
   */
  public static function sanitize_array( $array, $sanitization_function ) {
    foreach ( $array as $key => $value ) {
      if ( is_array( $value ) ) {
          $value = sanitize_array( $value );
      }

      $value = $sanitization_function( $value );
    }

    return $array;
  }

  /**
   * Return full path for specific asset from manifest.json
   * This is used for cache busting assets.
   *
   * @param string $key File name key you want to get from manifest.
   * @return string Full path to asset.
   *
   * @since 1.0.0
   */
  public static function get_manifest_assets_data( $key = null ) {
    if ( ! $key ) {
      return;
    }

    $data = json_decode( PB_ASSETS_MANIFEST );

    if ( ! $data ) {
      return;
    }

    $asset = self::get_array_value( $key, (array) $data );

    if ( ! empty( $asset ) ) {
      return $asset;
    }
  }

  /**
   * Gets this plugin file.
   *
   * @since  1.0.0
   *
   * @return string
   */
  public static function get_basename() {
    return plugin_basename( dirname( __FILE__, 2 ) ) . self::PLUGIN_NAME . '.php';
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
