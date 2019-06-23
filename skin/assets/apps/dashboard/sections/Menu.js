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
          data="projects"
          title={__('Projects', 'portfolio-backend')}
          onClick={handleActivePage}
          active={(pageActive === 'projects')}
        />
      </li>
    </ul>
  );
};

export default Menu;
