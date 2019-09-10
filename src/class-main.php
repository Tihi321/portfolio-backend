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
use PortfolioBackend\Utils;
use PortfolioBackend\Routes;
use PortfolioBackend\Routes\Route;

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

      // Utils.
      Utils\Error_Logger::class,
      Utils\Sanitization_Utils::class,
      Utils\Url_Utils::class,

      // Assets.
      Assets\Manifest::class,

      // Admin.
      Admin\Admin::class => [ Assets\Manifest::class ],
      Admin\Menu_Page::class,
      Admin\Media::class,

      // Languages.
      Languages\Internationalization::class,

      // Routes Security.
      Routes\Rest_Security::class,

      // Routes.
      Route\Get_Portfolio_Page::class,
      Route\Get_Portfolio_Topbar::class,
      Route\Put_Portfolio_Page_About::class => [ Routes\Rest_Security::class ],
      Route\Put_Portfolio_Page_Android::class => [ Routes\Rest_Security::class ],
      Route\Put_Portfolio_Page_Options::class => [ Routes\Rest_Security::class ],
      Route\Put_Portfolio_Page_Video::class => [ Routes\Rest_Security::class ],
      Route\Put_Portfolio_Page_Web::class => [ Routes\Rest_Security::class ],
      Route\Put_Portfolio_Topbar::class => [ Routes\Rest_Security::class ],

    ];
  }

}
