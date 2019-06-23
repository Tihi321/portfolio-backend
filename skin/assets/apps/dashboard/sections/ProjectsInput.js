import React, {Fragment} from 'react';
import {SketchPicker} from 'react-color';
import {__} from '@wordpress/i18n';

import {
  InputRow,
  InputLabel,
  DashboardButton,
} from '../components';
import {
  TextElement,
} from '../../../elements';

const ProjectInput = (props) => {
  const {
    id,
    length,
    showPicker,
    project: {
      title,
      path,
      color,
      link,
    },
    dataStore: {
      handleProjectsOnChange,
      handleToggleColorPicker,
      handleRemoveProject,
      handleProjectUp,
      handleProjectDown,
    },
  } = props;

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
            onChange={(newTitle) => handleProjectsOnChange(id, newTitle, 'title')}
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
  const pathElement = (
    <InputRow
      className="options__row"
      >
      <InputLabel
        message={__('Path', 'portfolio-backend')}
        helper=""
      />
      <div className="options__input-wrap">
        <TextElement
            styleReset={true}
            outputType='text'
            className="pb-input-mce-class"
            value={path}
            onChange={(newPath) => handleProjectsOnChange(id, newPath, 'path')}
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
            onChange={(newLink) => handleProjectsOnChange(id, newLink, 'link')}
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
          data-id={id}
          className="projects__color-btn"
          onClick={handleToggleColorPicker}
        >
          {color}
        </button>
        {(showPicker.action && showPicker.id === id) && <SketchPicker
          color={color}
          disableAlpha={true}
          onChangeComplete={(newColor) => {
            handleProjectsOnChange(id, newColor.hex, 'color');
          }}
        />}
      </div>
    </InputRow>
  );

  const optionsElements = (
    <Fragment>
      {titleElement}
      {pathElement}
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
            onClick={() => handleProjectUp(id)}
            size="small"
          >
          </DashboardButton>}
          {((length - 1) !== id) && <DashboardButton
            className="dashicons-before dashicons-arrow-down projects__footer-btn"
            onClick={() => handleProjectDown(id)}
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
            onClick={() => handleRemoveProject(id)}
            size="small"
          >
            {__('Remove', 'portfolio-backend')}
          </DashboardButton>
        </div>
      </div>
    </li>
  );

};
export default ProjectInput;
