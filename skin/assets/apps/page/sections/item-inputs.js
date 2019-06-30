import React, {Fragment, useContext, useState} from 'react';
import {SketchPicker} from 'react-color';
import {__} from '@wordpress/i18n';
import {StoreContext} from '../context/store';

import {
  InputRow,
  InputLabel,
  DashboardButton,
} from '../components';
import {
  TextElement,
} from '../../../elements';

const ItemInputs = (props) => {

  const [colorPicker, setColorPicker] = useState(false);

  const {
    id,
    length,
    menuItem: {
      title,
      color,
      link,
    },
  } = props;

  const {
    reducers: {
      handleMenuItemOnChange,
      handleRemoveMenuItem,
      handleMenuItemUp,
      handleMenuItemDown,
    },
  } = useContext(StoreContext);

  /* eslint-disable */
  const titleElement = (
    <InputRow
      className="options__row"
      >
      <InputLabel
        message={__('Title', 'portfolio-backend')}
        helper=""
      />
      <div className="options__input-wrap">
        <TextElement
            styleReset={true}
            outputType='text'
            className="pb-input-mce-class"
            value={title}
            onChange={(newTitle) => handleMenuItemOnChange(id, newTitle, 'title')}
            maxChars={50}
            maxRows={1}
            warning={false}
            single={true}
            init={{
              quickbars_insert_toolbar:false,
              quickbars_selection_toolbar: false,
            }}
          />
      </div>
    </InputRow>
  );
  const linkElement = (
    <InputRow
      className="options__row"
      >
      <InputLabel
        message={__('Link', 'portfolio-backend')}
        helper=""
      />
      <div className="options__input-wrap">
        <TextElement
            styleReset={true}
            outputType='text'
            className="pb-input-mce-class"
            value={link}
            onChange={(newLink) => handleMenuItemOnChange(id, newLink, 'link')}
            maxChars={50}
            maxRows={1}
            warning={false}
            single={true}
            init={{
              quickbars_insert_toolbar:false,
              quickbars_selection_toolbar: false,
            }}
          />
      </div>
    </InputRow>
  );
  /* eslint-enable */

  const colorPickerElement = (
    <InputRow
      className="options__row"
    >
      <InputLabel
        message={__('Color', 'portfolio-backend')}
        helper=""
      />
      <div className="options__input-wrap options__color-wrap">
        <button
          style={{
            backgroundColor: color,
          }}
          className="projects__color-btn"
          onClick={() => {
            setColorPicker(!colorPicker);
          }}
        >
          {(!color) ? __('Pick a color', 'portfolio-backend') : color}
        </button>
        {(colorPicker) && <SketchPicker
          color={color}
          disableAlpha={true}
          onChangeComplete={(newColor) => {
            handleMenuItemOnChange(id, newColor.hex, 'color');
          }}
        />}
      </div>
    </InputRow>
  );

  const optionsElements = (
    <Fragment>
      {titleElement}
      {colorPickerElement}
      {linkElement}
    </Fragment>
  );

  return (
    <li
      className="projects__item"
    >
      <h2
        style={{
          backgroundColor: color,
        }}
        className="projects__title"
      >
        {title}
      </h2>
      <div
        className="projects__elements"
      >
        {optionsElements}
      </div>
      <div
        className="projects__footer"
      >
        <div
          className="projects__buttons"
        >
          {(id !== 0) && <DashboardButton
            className="dashicons-before dashicons-arrow-up projects__footer-btn"
            onClick={() => handleMenuItemUp(id)}
            size="small"
          >
          </DashboardButton>}
          {((length - 1) !== id) && <DashboardButton
            className="dashicons-before dashicons-arrow-down projects__footer-btn"
            onClick={() => handleMenuItemDown(id)}
            size="small"
          >
          </DashboardButton>}
        </div>
        <div
          className="projects__buttons"
        >
          <DashboardButton
            className="projects__footer-btn"
            warning={true}
            onClick={() => handleRemoveMenuItem(id)}
            size="small"
          >
            {__('Remove', 'portfolio-backend')}
          </DashboardButton>
        </div>
      </div>
    </li>
  );

};
export default ItemInputs;
