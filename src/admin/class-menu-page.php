<?php
/**
 * The class for admind dashboard menu page. Here we register dashboard option page.
 *
 * @since 1.0.0
 * @package PortfolioBackend\Admin
 */

namespace PortfolioBackend\Admin;

use PortfolioBackend\Core\Service;
use PortfolioBackend\Core\Config;
use PortfolioBackend\Helpers\General_Helper;
use PortfolioBackend\Helpers\Loader;

/**
 * Class Menu_Page
 */
class Menu_Page extends Config implements Service {

  /**
   * Use trait inside class.
   */
  use Loader;

  /**
   * Parent menu page slug.
   *
   * @since 1.0.0
   */
  const PARENT_MENU_SLUG = 'portfolio_topbar';

  /**
   * Projects menu page slug.
   *
   * @since 1.0.0
   */
  const PORTFOLIO_PAGE_SLUG = 'portfolio_page';

  /**
   * Default capability.
   *
   * @since 1.0.0
   */
  const USER_CAPABILITY = 'edit_posts';


  /**
   * Register all the hooks
   *
   * @since 1.0.0
   */
  public function register() : void {
    $this->add_action( 'admin_menu', $this, 'register_menu_page' );
    $this->add_action( 'admin_menu', $this, 'register_submenu_pages' );
  }


  /**
   * Registers new menu page.
   *
   * @since 1.4.0
   */
  public function register_menu_page() {

    $page_title  = esc_html__( 'Portfolio', 'portfolio-backend' );
    $menu_string = esc_html__( 'Portfolio', 'portfolio-backend' );
    $callback    = [ $this, 'topbar_callback' ];

    add_menu_page( $page_title, $menu_string, self::USER_CAPABILITY, self::PARENT_MENU_SLUG, $callback, 'dashicons-portfolio', 90 );

  }

  /**
   * Registers new menu page. And add all subpages.
   *
   * @since 1.4.0
   */
  public function register_submenu_pages() {

    $parent_callback = [ $this, 'topbar_callback' ];

    $submenu_pages = array(

        // Topbar.
        array(
            'parent_slug' => self::PARENT_MENU_SLUG,
            'page_title'  => esc_html__( 'Topbar', 'portfolio-backend' ),
            'menu_title'  => esc_html__( 'Topbar', 'portfolio-backend' ),
            'capability'  => self::USER_CAPABILITY,
            'menu_slug'   => self::PARENT_MENU_SLUG,
            'function'    => $parent_callback,
        ),

        // Page.
        array(
            'parent_slug' => self::PARENT_MENU_SLUG,
            'page_title'  => esc_html__( 'Page', 'portfolio-backend' ),
            'menu_title'  => esc_html__( 'Page', 'portfolio-backend' ),
            'capability'  => self::USER_CAPABILITY,
            'menu_slug'   => self::PORTFOLIO_PAGE_SLUG,
            'function'    => $parent_callback,
        ),

    );

    // Add each submenu item to custom admin menu.
    foreach ( $submenu_pages as $submenu ) {

      add_submenu_page(
        $submenu['parent_slug'],
        $submenu['page_title'],
        $submenu['menu_title'],
        $submenu['capability'],
        $submenu['menu_slug'],
        $submenu['function']
      );

    }

  }

  /**
   * Menu page callback.
   *
   * @since 1.4.0
   */
  public function topbar_callback() {

    $dashboard_template = General_Helper::get_base_path() . 'views/dashboard.php';
    if ( ! empty( $dashboard_template ) ) {
      include $dashboard_template;
    }

  }

}
