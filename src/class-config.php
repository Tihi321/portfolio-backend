<?php
/**
 * The abstract class that will be used to extend for all config files.
 *
 * @since   1.0.0
 * @package PortfolioBackend\Core
 */

namespace PortfolioBackend\Core;

/**
 * Abstract Class Config
 *
 * Abstract class that exposes constants that are used across multiple files.
 */
abstract class Config {

  /**
   * Plugin Full Name
   *
   * @var string
   *
   * @since 1.0.0
   */
  const PLUGIN_NAME = 'portfolio-backend';

  /**
   * Plugin Version
   *
   * @var string
   *
   * @since 1.0.0
   */
  const PLUGIN_VERSION = '1.0.0';

  /**
   * Plugin Prefix
   *
   * @var string
   *
   * @since 1.0.0
   */
  const PLUGIN_PREFIX = 'pb_';

  // -------------------------------------------------------
  // OPTIONS
  // -------------------------------------------------------

  /**
   * Custom logo.
   *
   * @var string
   *
   * @since 1.0.0
   */
  const CUSTOM_LOGO = 'portfolio_custom_logo';

  /**
   * Projects in select menu.
   *
   * @var string
   *
   * @since 1.0.0
   */
  const SELECT_PROJECTS = 'portfolio_select_projects';

  /**
   * Toggle to check if user wants to show welcome message
   *
   * @var string
   *
   * @since 1.0.0
   */
  const SHOW_MESSAGE = 'portfolio_show_message';

  /**
   * Welcome messsage
   *
   * @var string
   *
   * @since 1.0.0
   */
  const MESSAGE = 'portfolio_message';

}
