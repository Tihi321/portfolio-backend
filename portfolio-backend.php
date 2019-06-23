<?php
/**
 * Plugin main file starting point
 *
 * @since             1.0.2
 * @package           PortfolioBackend
 *
 * @wordpress-plugin
 * Plugin Name:       Portfolio Backend
 * Plugin URI:
 * Description:       Provides backend for front add and nexjs page.
 * Version:           1.0.2
 * Author:            Tihomir Selak <tknox.dr@gmail.com>
 * Author URI:        https://tihomir-selak.from.hr/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       portfolio-backend
 */

namespace PortfolioBackend;

use PortfolioBackend\Includes as Includes;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
  die;
}

/**
 * Global assets public path
 *
 * @since 1.0.0
 */
define( 'PB_ASSETS_PUBLIC_PATH', __DIR__ . '/skin/public/' );

/**
 * Include the autoloader so we can dynamically include the rest of the classes.
 *
 * @since 1.0.0
 */
require __DIR__ . '/vendor/autoload.php';

/**
 * Define enviroment production or develop.
 *
 * @since 1.0.0
 */
define( 'PB_ENV', 'production' );

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since 1.0.0
 */
function init_plugin() {
  ( new Core\Main() )->register();
}

init_plugin();
