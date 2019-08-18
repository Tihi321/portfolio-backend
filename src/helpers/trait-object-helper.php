<?php
/**
 * The object helper specific functionality inside classes.
 * Used in admin or theme side but only inside a class.
 *
 * @since   1.0.0
 * @package PortfolioBackend\Helpers
 */

namespace PortfolioBackend\Helpers;

/**
 * Class Object Helper
 */
trait Object_Helper {
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
      $html,
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
   * Saves value to the options table
   *
   * @param string $new_value to be saved to options table.
   * @param string $option_name options table name.
   */
  public static function save_options( string $new_value, string $option_name ) : void {

    $old_value = get_option( $option_name );

    if ( empty( $old_value ) ) {

      delete_option( $option_name );
      add_option( $option_name, $new_value );

    }
    if ( $new_value !== $old_value ) {
      update_option( $option_name, $new_value );
    }

  }

}
