import React, {Fragment} from 'react';
import {__} from '@wordpress/i18n';

import {
  InputRow,
  InputLabel,
  DashboardButton,
} from '../../components';
import {
  TextElement,
} from '../../../../elements';

const ProjectsItem = (props) => {

  const {
    id,
    length,
    project: {
      title,
      description,
      link,
    },
    handleProjectOnChange,
    handleRemoveProject,
    handleProjectUp,
    handleProjectDown,
  } = props;

  /* eslint-disable */
  const titleElement = (
    <InputRow
      className="options__row"
      >
      <InputLabel
        message={__('Name', 'portfolio-backend')}
        helper=""
      />
      <div className="options__input-wrap">
        <TextElement
            styleReset={true}
            outputType='text'
            className="pb-input-mce-class"
            value={title}
            onChange={(newTitle) => handleProjectOnChange(id, newTitle, 'title')}
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
        helper="link to the project"
      />
      <div className="options__input-wrap">
        <TextElement
            styleReset={true}
            outputType='text'
            className="pb-input-mce-class"
            value={link}
            onChange={(newLink) => handleProjectOnChange(id, newLink, 'link')}
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

  const descriptionElement = (
    <InputRow
      className="options__row"
    >
      <InputLabel
        message={__('Description', 'portfolio-backend')}
        helper="short descrption of project, with links to source code and project"
      />
      <div className="options__input-wrap">
        <TextElement
          styleReset={true}
          outputType="text"
          className="pb-input-mce-class pb-input-mce-description"
          value={description}
          onChange={(newDescription) => handleProjectOnChange(id, newDescription, 'description')}
        />
      </div>
    </InputRow>
  );

  const optionsElements = (
    <Fragment>
      {titleElement}
      {linkElement}
      {descriptionElement}
    </Fragment>
  );

  return (
    <li
      className="projects__item"
    >
      <h2
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
export default ProjectsItem;
