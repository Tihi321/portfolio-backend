<?php
/**
 * Fired when the plugin is uninstalled.
 *
 * @since   1.0.0
 * @package PortfolioBackend
 */

// If uninstall not called from WordPress, then exit.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
    exit;
}

// Clear any cached data that has been removed.
wp_cache_flush();
