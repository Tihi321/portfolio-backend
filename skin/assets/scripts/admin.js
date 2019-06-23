/* global pluginOptions, wp */
import generalHelper from '../helpers/general-helper';
import Dashboard from '../apps/dashboard';

generalHelper.domReady(function() {
  const dashboard = new Dashboard();
  const topbarElement = document.querySelector('.js-topbar-dashboard');

  /**
   * Text Domain: portfolio-backend
   */

  wp.i18n.setLocaleData({'': {}}, 'portfolio-backend');

  // -------------------------------------------------------------
  // dahsboard
  if (topbarElement) {
    dashboard.init();
  }
});
