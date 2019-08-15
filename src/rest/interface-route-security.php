<?php
/**
 * File that holds the Securable Route interface.
 *
 * @since   0.2.0
 * @package A1_Careers_Page\Routes
 */

namespace A1_Careers_Page\Routes;

/**
 * Interface Securable.
 *
 * An object that can be registered.
 */
interface Route_Security {
  /**
   * Register the rest route.
   *
   * A register method holds authentification_check funtion to for route.
   *
   * @return void
   *
   * @since 0.8.0 Removing type hinting void for php 7.0.
   * @since 0.2.0
   */
  public function authentification_check();
}
