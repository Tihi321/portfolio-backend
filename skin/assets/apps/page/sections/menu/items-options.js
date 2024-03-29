import React, {useContext} from 'react';
import {__} from '@wordpress/i18n';
import ItemInputs from './item-inputs';
import {ButtonRowElement} from '../../../../components';
import {GeneralStore} from '../../store/general-store';

const MenuItemsOptions = (props) => {

  const {
    attributes: {
      menuItems,
    },
    actions: {
      handleAddMenuItem,
    },
  } = useContext(GeneralStore);

  const menuItemsNum = menuItems.length;

  const itemElements = menuItems.map((menuItem, id) => {
    return (
      <ItemInputs
        key={id}
        id={id}
        menuItem={menuItem}
        length={menuItemsNum}
      />
    );
  });

  return (
    <div
      className="options"
    >
      <ul
        className="projects__items"
      >
        {itemElements}
      </ul>
      <ButtonRowElement
        onClick={handleAddMenuItem}
        title={__('Add new Menu item', 'portfolio-backend')}
      />
    </div>
  );
};

export default MenuItemsOptions;
