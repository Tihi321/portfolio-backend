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
   * Sanitizes html from tiny mce field.
   *
   * @param string $html   html string.
   * @return string       Sanitized html string.
   *
   * @since 1.0.0
   */
  public static function sanitize_html_input( $html ) {
    return wp_kses(
      $text,
      array(
        'p' => array(
          'style' => array(),
        ),
        'span' => array(
          'style' => array(),
        ),
        'ol' => array(
          'style' => array(),
        ),
        'ul' => array(
          'style' => array(),
        ),
        'li' => array(
          'style' => array(),
        ),
        'a' => array(
          'href' => array(),
          'title' => array(),
        ),
      )
    );
  }

  /**
   * Sanitizes media array.
   *
   * @param array $media   html string.
   * @return string       Sanitized html string.
   *
   * @since 1.0.0
   */
  public static function sanitize_media( $media ) {
    $sanitized_media = [];

    // sanitize all logo object values.
    foreach ( $media as $key => $item ) {
      if ( $key !== 'id' && $key !== 'url' && $key !== 'title' ) {
        continue;
      }
      if ( $key === 'url' ) {
        $sanitized_media[ $key ] = esc_url_raw( $item );
        continue;
      }

      $sanitized_media[ $key ] = sanitize_text_field( $item );
    }

    return wp_json_encode( $sanitized_media );
  }

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
