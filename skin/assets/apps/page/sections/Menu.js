import React from 'react';
import {__} from '@wordpress/i18n';
import {MenuItem} from '../../../components';

const Menu = (props) => {
  const {
    attributes: {
      pageActive,
    },
    dataStore: {
      handleActivePage,
    },
  } = props;

  return (
    <ul className="topbar__menu">
      <li className="topbar__menu-item">
        <MenuItem
          data="options"
          title={__('Options', 'portfolio-backend')}
          onClick={handleActivePage}
          active={(pageActive === 'options')}
        />
      </li>
      <li className="topbar__menu-item">
        <MenuItem
          data="about"
          title={__('About', 'portfolio-backend')}
          onClick={handleActivePage}
          active={(pageActive === 'about')}
        />
      </li>
      <li className="topbar__menu-item">
        <MenuItem
          data="webDevelopment"
          title={__('Web', 'portfolio-backend')}
          onClick={handleActivePage}
          active={(pageActive === 'webDevelopment')}
        />
      </li>
      <li className="topbar__menu-item">
        <MenuItem
          data="videoProduction"
          title={__('Video', 'portfolio-backend')}
          onClick={handleActivePage}
          active={(pageActive === 'videoProduction')}
        />
      </li>
      <li className="topbar__menu-item">
        <MenuItem
          data="android"
          title={__('Android', 'portfolio-backend')}
          onClick={handleActivePage}
          active={(pageActive === 'android')}
        />
      </li>
    </ul>
  );
};

export default Menu;
