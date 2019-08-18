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
  // TOPBAR OPTIONS
  // -------------------------------------------------------

  /**
   * Custom logo.
   *
   * @var string
   *
   * @since 1.0.0
   */
  const CUSTOM_LOGO = self::PLUGIN_PREFIX . 'portfolio_custom_logo';

  /**
   * Projects in select menu.
   *
   * @var string
   *
   * @since 1.0.0
   */
  const SELECT_PROJECTS = self::PLUGIN_PREFIX . 'portfolio_select_projects';

  /**
   * Toggle to check if user wants to show welcome message
   *
   * @var string
   *
   * @since 1.0.0
   */
  const SHOW_MESSAGE = self::PLUGIN_PREFIX . 'portfolio_show_message';

  /**
   * Welcome messsage
   *
   * @var string
   *
   * @since 1.0.0
   */
  const MESSAGE = self::PLUGIN_PREFIX . 'portfolio_message';

  // -------------------------------------------------------
  // PAGE OPTIONS
  // -------------------------------------------------------

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const GITHUB_LINK = self::PLUGIN_PREFIX . 'portfolio_page_github';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const LINKEDIN_LINK = self::PLUGIN_PREFIX . 'portfolio_page_linkedin';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const YOUTUBE_LINK = self::PLUGIN_PREFIX . 'portfolio_page_youtube';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const GOOGLE_PLAY_LINK = self::PLUGIN_PREFIX . 'portfolio_page_google_play';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const CONTACT_MAIL_LINK = self::PLUGIN_PREFIX . 'portfolio_page_contact_mail';

  /**
   * Additional manu items
   *
   * @var string
   *
   * @since 1.0.0
   */
  const ADDITIONAL_MENU_ITEMS = self::PLUGIN_PREFIX . 'portfolio_menu_items';

  // -------------------------------------------------------
  // PAGE ABOUT
  // -------------------------------------------------------


  /**
   * Page logo
   *
   * @var string
   *
   * @since 1.0.0
   */
  const ABOUT_ANIMATION_FILE = self::PLUGIN_PREFIX . 'portfolio_about_animation';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const ABOUT_ACCENT_COLOR = self::PLUGIN_PREFIX . 'portfolio_about_color';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const ABOUT_DESCRIPTION = self::PLUGIN_PREFIX . 'portfolio_about_description';


  // -------------------------------------------------------
  // PAGE WEB
  // -------------------------------------------------------


  /**
   * Page logo
   *
   * @var string
   *
   * @since 1.0.0
   */
  const WEB_ANIMATION_FILE = self::PLUGIN_PREFIX . 'portfolio_web_animation';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const WEB_ACCENT_COLOR = self::PLUGIN_PREFIX . 'portfolio_web_color';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const WEB_DESCRIPTION = self::PLUGIN_PREFIX . 'portfolio_web_description';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const WEB_PROJECTS = self::PLUGIN_PREFIX . 'portfolio_web_projects';

  // -------------------------------------------------------
  // PAGE VIDEO
  // -------------------------------------------------------

  /**
   * Page logo
   *
   * @var string
   *
   * @since 1.0.0
   */
  const VIDEO_ANIMATION_FILE = self::PLUGIN_PREFIX . 'portfolio_video_animation';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const VIDEO_ACCENT_COLOR = self::PLUGIN_PREFIX . 'portfolio_video_color';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const VIDEO_DESCRIPTION = self::PLUGIN_PREFIX . 'portfolio_video_description';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const VIDEO_PROJECTS = self::PLUGIN_PREFIX . 'portfolio_video_projects';

  // -------------------------------------------------------
  // PAGE ANDROID
  // -------------------------------------------------------

  /**
   * Page logo
   *
   * @var string
   *
   * @since 1.0.0
   */
  const ANDROID_ANIMATION_FILE = self::PLUGIN_PREFIX . 'portfolio_android_animation';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const ANDROID_ACCENT_COLOR = self::PLUGIN_PREFIX . 'portfolio_android_color';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const ANDROID_DESCRIPTION = self::PLUGIN_PREFIX . 'portfolio_android_description';

  /**
   * Social link
   *
   * @var string
   *
   * @since 1.0.0
   */
  const ANDROID_PROJECTS = self::PLUGIN_PREFIX . 'portfolio_android_projects';

}
