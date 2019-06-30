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
          title={__('Projects', 'portfolio-backend')}
          onClick={setPageActive.bind(this, 'projects')}
          active={(pageActive === 'projects')}
        />
      </li>
    </ul>
  );
};

export default Menu;
