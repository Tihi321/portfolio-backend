<?php
/**
 * The class file that returns all data for dashboard
 *
 * @since   1.0.0
 * @package PortfolioBackend\Routes\Route
 */

namespace PortfolioBackend\Routes\Route;

use Eightshift_Libs\Routes\Callable_Route;

use PortfolioBackend\Routes\Base_Route;
use PortfolioBackend\Core\Config;

/**
 * Class Get_Portfolio_Page
 */
class Get_Portfolio_Page extends Base_Route implements Callable_Route {
  const ROUTE_NAME = '/portfolio-page';

  /**
   * Options slug
   *
   * @since 1.0.0
   */
  const OPTIONS_SLUG = self::NAMESPACE_NAME . self::VERSION . self::ROUTE_NAME;

  /**
   * Get callback arguments array
   *
   * @return array Either an array of options for the endpoint,
   */
  protected function get_callback_arguments() : array {
    return [
      'methods'             => static::READABLE,
      'callback'            => [ $this, 'route_callback' ],
    ];
  }

  /**
   * Get all dashboard options.
   *
   * This callback is triggered when a front end app
   * goes to the @link https://API-URL/wp-json/portfolio-backend/v1/portfolio-page
   * endpoint.
   *
   * @api
   *
   * @throws \WP_Error Error if the token is missing or wrong or the password
   * is the same.
   * @param \WP_REST_Request $request Data got from enpoint url.
   * @return \WP_REST_Response|\WP_Error          Developer data array.
   *
   * @since 1.0.0
   */
  public function route_callback( \WP_REST_Request $request ) {

    // get logo and favicon if available from theme.
    $logo    = get_field( 'blog_logo', 'option' );
    $favicon = get_field( 'blog_favicon', 'option' );

    $logo_url    = $logo['url'] ?? '';
    $favicon_url = $favicon['url'] ?? '';

    // get all general options.
    $menu_items    = get_option( Config::ADDITIONAL_MENU_ITEMS );
    $github        = get_option( Config::GITHUB_LINK );
    $linkedin      = get_option( Config::LINKEDIN_LINK );
    $youtube       = get_option( Config::YOUTUBE_LINK );
    $google_play   = get_option( Config::GOOGLE_PLAY_LINK );
    $wordpress     = get_option( Config::WORDPRESS_LINK );
    $conntact_mail = get_option( Config::CONTACT_MAIL_LINK );

    // get about.
    $about_animation_file = get_option( Config::ABOUT_ANIMATION_FILE );
    $about_accent_color   = get_option( Config::ABOUT_ACCENT_COLOR );
    $about_description    = get_option( Config::ABOUT_DESCRIPTION );
    $about_page           = get_option( Config::ABOUT_PAGE );

    // get web.
    $web_animation_file = get_option( Config::WEB_ANIMATION_FILE );
    $web_accent_color   = get_option( Config::WEB_ACCENT_COLOR );
    $web_description    = get_option( Config::WEB_DESCRIPTION );
    $web_projects       = get_option( Config::WEB_PROJECTS );

    // get video.
    $video_animation_file = get_option( Config::VIDEO_ANIMATION_FILE );
    $video_accent_color   = get_option( Config::VIDEO_ACCENT_COLOR );
    $video_description    = get_option( Config::VIDEO_DESCRIPTION );
    $video_projects       = get_option( Config::VIDEO_PROJECTS );

    // get android.
    $android_animation_file = get_option( Config::ANDROID_ANIMATION_FILE );
    $android_accent_color   = get_option( Config::ANDROID_ACCENT_COLOR );
    $android_description    = get_option( Config::ANDROID_DESCRIPTION );
    $android_projects       = get_option( Config::ANDROID_PROJECTS );

    $output =
    [
      'generalOptions' => [
        'logo'           => esc_url( $logo_url ),
        'favicon'        => esc_url( $favicon_url ),
        'menuItems'      => $menu_items,
        'github'         => $github,
        'linkedin'       => $linkedin,
        'youtube'        => $youtube,
        'googlePlay'     => $google_play,
        'wordPress'      => $wordpress,
        'contactMail'    => $conntact_mail,
      ],
      'aboutOptions' => [
        'aboutAnimationFile' => $about_animation_file,
        'aboutAccentColor'   => $about_accent_color,
        'aboutDescription'   => $about_description,
        'aboutPage'          => $about_page,
      ],
      'webOptions' => [
        'webAnimationFile' => $web_animation_file,
        'webAccentColor'   => $web_accent_color,
        'webDescription'   => $web_description,
        'webProjects'      => $web_projects,
      ],
      'videoOptions' => [
        'videoAnimationFile' => $video_animation_file,
        'videoAccentColor'   => $video_accent_color,
        'videoDescription'   => $video_description,
        'videoProjects'      => $video_projects,
      ],
      'androidOptions' => [
        'androidAnimationFile' => $android_animation_file,
        'androidAccentColor'   => $android_accent_color,
        'androidDescription'   => $android_description,
        'androidProjects'      => $android_projects,
      ],
    ];

    return \rest_ensure_response( $output );
  }

}
