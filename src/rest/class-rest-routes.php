<?php
/**
 * Register all Rest_Routes.
 *
 * @since   1.0.0
 * @package PortfolioBackend\Rest_Routes
 */

namespace PortfolioBackend\Rest;

/**
 * Class Register
 */
abstract class Rest_Routes {
   /**
   * Namespace version
   *
   * @since 1.0.0
   */
  const REST_API_VERSION = '/v1';

  /**
   * Rest api base
   *
   * @since 1.0.0
   */
  const REST_API_BASE = 'portfolio-backend';

  /**
   * Rest callback name
   *
   * @since 1.0.0
   */
  const REST_CALLBACK = 'rest_callback';

  /**
   * Rest callback authetification name
   *
   * @since 1.0.0
   */
  const USER_BASIC_AUTHENTIFICATION = 'user_basic_authentication_check';

  /**
   * Rest route for saving options
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_OPTIONS = '/save-portfolio-options';

  /**
   * Rest route for getting options
   *
   * @since 1.0.0
   */
  const PORTFOLIO_GET_OPTIONS = '/portfolio-options';

  /**
   * Save options rest slug
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_OPTIONS_SLUG = self::REST_API_BASE . self::REST_API_VERSION . self::PORTFOLIO_SAVE_OPTIONS;

  /**
   * Get options slug
   *
   * @since 1.0.0
   */
  const PORTFOLIO_GET_OPTIONS_SLUG = self::REST_API_BASE . self::REST_API_VERSION . self::PORTFOLIO_GET_OPTIONS;

}
