<?php
/**
 * The class file that returns all data for dashboard
 *
 * @since   1.0.0
 * @package PortfolioBackend\Rest\Rest_Callbacks
 */

namespace PortfolioBackend\Rest\Rest_Callbacks;

use PortfolioBackend\Core\Config;

/**
 * Class Get_Portfolio_Page
 */
class Get_Portfolio_Page extends Config implements Rest_Callback {

  /**
   * Get all dashboard options.
   *
   * This callback is triggered when a front end app
   * goes to the @link https://API-URL/wp-json/portfolio-backend/v1/portfolio-topbar
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
  public function rest_callback( \WP_REST_Request $request ) {

    // get all general options.
    $logo          = get_option( self::PAGE_LOGO );
    $menu_items    = get_option( self::ADDITIONAL_MENU_ITEMS );
    $github        = get_option( self::GITHUB_LINK );
    $linkedin      = get_option( self::LINKEDIN_LINK );
    $youtube       = get_option( self::YOUTUBE_LINK );
    $google_play   = get_option( self::GOOGLE_PLAY_LINK );
    $conntact_mail = get_option( self::CONTACT_MAIL_LINK );

    // get about.
    $about_animation_file = get_option( self::ABOUT_ANIMATION_FILE );
    $about_accent_color   = get_option( self::ABOUT_ACCENT_COLOR );
    $about_description    = get_option( self::ABOUT_DESCRIPTION );

    // get web.
    $web_animation_file = get_option( self::WEB_ANIMATION_FILE );
    $web_accent_color   = get_option( self::WEB_ACCENT_COLOR );
    $web_description    = get_option( self::WEB_DESCRIPTION );
    $web_projects       = get_option( self::WEB_PROJECTS );

    // get video.
    $video_animation_file = get_option( self::VIDEO_ANIMATION_FILE );
    $video_accent_color   = get_option( self::VIDEO_ACCENT_COLOR );
    $video_description    = get_option( self::VIDEO_DESCRIPTION );
    $video_projects       = get_option( self::VIDEO_PROJECTS );

    // get android.
    $android_animation_file = get_option( self::ANDROID_ANIMATION_FILE );
    $android_accent_color   = get_option( self::ANDROID_ACCENT_COLOR );
    $android_description    = get_option( self::ANDROID_DESCRIPTION );
    $android_projects       = get_option( self::ANDROID_PROJECTS );

    $output =
    [
      'generalOptions' => [
        'logo'           => $logo,
        'menuItems'      => $menu_items,
        'github'         => $github,
        'linkedin'       => $linkedin,
        'youtube'        => $youtube,
        'googlePlay'     => $google_play,
        'contactMail'    => $conntact_mail,
      ],
      'aboutOptions' => [
        'aboutAnimationFile' => $about_animation_file,
        'aboutAccentColor'   => $about_accent_color,
        'aboutDescription'   => $about_description,
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
