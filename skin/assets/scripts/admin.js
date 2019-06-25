/* global pluginOptions, wp */
import generalHelper from '../helpers/general-helper';
import Topbar from '../apps/topbar';

generalHelper.domReady(function() {
  const topbarElement = document.querySelector('.js-portfolio-topbar');
  const topbar = new Topbar(topbarElement);

  /**
   * Text Domain: portfolio-backend
   */

  wp.i18n.setLocaleData({'': {}}, 'portfolio-backend');

  // -------------------------------------------------------------
  // dahsboard
  if (topbarElement) {
    topbar.init();
  }
});
