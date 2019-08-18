import React, {Fragment, useContext} from 'react';
import {__} from '@wordpress/i18n';
import {VideoStore} from '../../store/video-store';

import {
  InputRow,
  InputLabel,
  DashboardButton,
} from '../../components';
import {
  TextElement,
  FileElement,
} from '../../../../elements';

const VideoProjectsItem = (props) => {

  const {
    id,
    length,
    project: {
      title,
      link,
      image: {
        id: imageId,
        url: imageUrl,
        title: imageTitle,
      },
    },
  } = props;

  const {
    actions: {
      handleVideoProjectOnChange,
      handleRemoveVideoProject,
      handleVideoProjectUp,
      handleVideoProjectDown,
    },
  } = useContext(VideoStore);

  const imageFileElement = (
    <InputRow
      className="options__row"
    >
      <InputLabel
        message={__('Animation file', 'portfolio-backend')}
        helper="Short descrption paragraph below title"
      />
      <div className="options__file-wrap">
        <FileElement
          className="options__file-element"
          iconButton={false}
          toolbarOnTop={false}
          fileTitle={imageTitle}
          fileId={imageId}
          fileUrl={imageUrl}
          onSelectFile={(newMedia) => handleVideoProjectOnChange(id, newMedia, 'image')}
          onRemoveFile={() => handleVideoProjectOnChange(id, '', 'removeImage')}
        />
      </div>
    </InputRow>
  );

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
            onChange={(newTitle) => handleVideoProjectOnChange(id, newTitle, 'title')}
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
            onChange={(newLink) => handleVideoProjectOnChange(id, newLink, 'link')}
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

  const optionsElements = (
    <Fragment>
      {imageFileElement}
      {titleElement}
      {linkElement}
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
            onClick={() => handleVideoProjectUp(id)}
            size="small"
          >
          </DashboardButton>}
          {((length - 1) !== id) && <DashboardButton
            className="dashicons-before dashicons-arrow-down projects__footer-btn"
            onClick={() => handleVideoProjectDown(id)}
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
            onClick={() => handleRemoveVideoProject(id)}
            size="small"
          >
            {__('Remove', 'portfolio-backend')}
          </DashboardButton>
        </div>
      </div>
    </li>
  );

};
export default VideoProjectsItem;
