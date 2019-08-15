<?php
/**
 * File containing the main theme class
 *
 * @since 1.0.0
 * @package PortfolioBackend\Core
 */

namespace PortfolioBackend\Core;

use Eightshift_Libs\Core\Main as LibMain;

use PortfolioBackend\Admin;
use PortfolioBackend\Assets;
use PortfolioBackend\Languages;
use PortfolioBackend\Rest;

/**
 * The main start class.
 *
 * All classes are instantiated here that represent different functionality for plugin.
 */
class Main extends LibMain {
  /**
   * Get the list of services to register.
   *
   * A list of classes which contain hooks.
   *
   * @return array<string> Array of fully qualified class names.
   *
   * @since 1.0.0
   */
  protected function get_service_classes() : array {
    return [

      // Assets.
      Assets\Manifest::class,

      // Admin.
      Admin\Admin::class => [ Assets\Manifest::class ],
      Admin\Menu_Page::class,
      Admin\Media::class,

        // Languages.
      Languages\Internationalization::class,

        // Rest.
      Rest\Rest_Register::class,

    ];
  }

}
