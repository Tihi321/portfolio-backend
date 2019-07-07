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
   * Rest route for saving topbar options
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_TOPBAR = '/save-portfolio-topbar';

  /**
   * Rest route for getting topbar options
   *
   * @since 1.0.0
   */
  const PORTFOLIO_GET_TOPBAR = '/portfolio-topbar';

  /**
   * Rest route for saving page options
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_OPTIONS_PAGE = '/save-portfolio-options-page';

  /**
   * Rest route for saving page options
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_ABOUT_PAGE = '/save-portfolio-about-page';

  /**
   * Rest route for saving page options
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_WEB_PAGE = '/save-portfolio-web-page';

  /**
   * Rest route for saving page options
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_VIDEO_PAGE = '/save-portfolio-video-page';

  /**
   * Rest route for saving page options
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_ANDROID_PAGE = '/save-portfolio-android-page';

  /**
   * Rest route for getting page options
   *
   * @since 1.0.0
   */
  const PORTFOLIO_GET_PAGE = '/portfolio-page';

  /**
   * Save topbar rest slug
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_TOPBAR_SLUG = self::REST_API_BASE . self::REST_API_VERSION . self::PORTFOLIO_SAVE_TOPBAR;

  /**
   * Get topbar slug
   *
   * @since 1.0.0
   */
  const PORTFOLIO_GET_TOPBAR_SLUG = self::REST_API_BASE . self::REST_API_VERSION . self::PORTFOLIO_GET_TOPBAR;

  /**
   * Save page options rest slug
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_PAGE_OPTIONS_SLUG = self::REST_API_BASE . self::REST_API_VERSION . self::PORTFOLIO_SAVE_OPTIONS_PAGE;

  /**
   * Save page options rest slug
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_PAGE_ABOUT_SLUG = self::REST_API_BASE . self::REST_API_VERSION . self::PORTFOLIO_SAVE_ABOUT_PAGE;

  /**
   * Save page options rest slug
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_PAGE_WEB_SLUG = self::REST_API_BASE . self::REST_API_VERSION . self::PORTFOLIO_SAVE_WEB_PAGE;

  /**
   * Save page options rest slug
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_PAGE_VIDEO_SLUG = self::REST_API_BASE . self::REST_API_VERSION . self::PORTFOLIO_SAVE_VIDEO_PAGE;

  /**
   * Save page options rest slug
   *
   * @since 1.0.0
   */
  const PORTFOLIO_SAVE_PAGE_ANDROID_SLUG = self::REST_API_BASE . self::REST_API_VERSION . self::PORTFOLIO_SAVE_ANDROID_PAGE;

  /**
   * Get page options slug
   *
   * @since 1.0.0
   */
  const PORTFOLIO_GET_PAGE_SLUG = self::REST_API_BASE . self::REST_API_VERSION . self::PORTFOLIO_GET_PAGE;

}
