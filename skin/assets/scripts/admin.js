import {domReady} from '../utils/dom';
import Topbar from '../apps/topbar';
import Page from '../apps/page';

domReady(function() {
  const topbarElement = document.querySelector('.js-portfolio-topbar');
  const pageElement = document.querySelector('.js-portfolio-page');

  const topbar = new Topbar(topbarElement);
  const page = new Page(pageElement);

  /**
   * Text Domain: portfolio-backend
   */

  wp.i18n.setLocaleData({'': {}}, 'portfolio-backend');

  // -------------------------------------------------------------
  // topbar
  if (topbarElement) {
    topbar.init();
  }

  // -------------------------------------------------------------
  // page
  if (pageElement) {
    page.init();
  }
});
