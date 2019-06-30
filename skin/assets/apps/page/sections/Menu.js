import React, {useContext} from 'react';
import {__} from '@wordpress/i18n';
import {MenuItem} from '../../../components';
import {StoreContext} from '../context/store';

const Menu = (props) => {

  const {
    attributes: {
      pageActive,
    },
    reducers: {
      setPageActive,
    },
  } = useContext(StoreContext);

  return (
    <ul className="topbar__menu">
      <li className="topbar__menu-item">
        <MenuItem
          title={__('Options', 'portfolio-backend')}
          onClick={setPageActive.bind(this, 'options')}
          active={(pageActive === 'options')}
        />
      </li>
      <li className="topbar__menu-item">
        <MenuItem
          title={__('About', 'portfolio-backend')}
          onClick={setPageActive.bind(this, 'about')}
          active={(pageActive === 'about')}
        />
      </li>
      <li className="topbar__menu-item">
        <MenuItem
          title={__('Web', 'portfolio-backend')}
          onClick={setPageActive.bind(this, 'webDevelopment')}
          active={(pageActive === 'webDevelopment')}
        />
      </li>
      <li className="topbar__menu-item">
        <MenuItem
          title={__('Video', 'portfolio-backend')}
          onClick={setPageActive.bind(this, 'videoProduction')}
          active={(pageActive === 'videoProduction')}
        />
      </li>
      <li className="topbar__menu-item">
        <MenuItem
          title={__('Android', 'portfolio-backend')}
          onClick={setPageActive.bind(this, 'android')}
          active={(pageActive === 'android')}
        />
      </li>
    </ul>
  );
};

export default Menu;
