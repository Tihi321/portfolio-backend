import React, {useState} from 'react';
import {SketchPicker} from 'react-color';
import {__} from '@wordpress/i18n';

import {
  InputRow,
  InputLabel,
  ToggleSwitch,
} from '../components';
import {
  TextElement,
  FileElement,
} from '../../../elements';

const SharedItems = (props) => {
  const [colorPicker, setColorPicker] = useState(false);

  const {
    animationFile: {
      id,
      title,
      url,
    },
    loopLottie,
    setLoopLottie,
    accentColor,
    description,
    handleAnimationFileUpdate,
    handleRemoveAnimationFile,
    setAccentColor,
    setDescription,
  } = props;

  const animtaionFileElement = (
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
          fileTitle={title}
          fileId={id}
          fileUrl={url}
          onSelectFile={handleAnimationFileUpdate}
          onRemoveFile={handleRemoveAnimationFile}
        />
      </div>
    </InputRow>
  );

  const descriptionElement = (
    <InputRow
      className="options__row"
    >
      <InputLabel
        message={__('Description', 'portfolio-backend')}
        helper="Short descrption paragraph below title"
      />
      <div className="options__input-wrap">
        <TextElement
          styleReset={true}
          outputType="text"
          className="pb-input-mce-class pb-input-mce-description"
          value={description}
          onChange={setDescription}
        />
      </div>
    </InputRow>
  );

  const colorPickerElement = (
    <InputRow
      className="options__row"
    >
      <InputLabel
        message={__('Accent color', 'portfolio-backend')}
        helper=""
      />
      <div className="options__input-wrap options__color-wrap">
        <button
          style={{
            backgroundColor: accentColor,
          }}
          className="projects__color-btn"
          onClick={() => {
            setColorPicker(!colorPicker);
          }}
        >
          {(!accentColor) ? __('Pick a color', 'portfolio-backend') : accentColor}
        </button>
        {(colorPicker) && <SketchPicker
          color={accentColor}
          disableAlpha={true}
          onChangeComplete={(newColor) => {
            setAccentColor(newColor.hex);
          }}
        />}
      </div>
    </InputRow>
  );

  const loopLottieElement = (
    <InputRow
      className="options__row options__row--toggle"
    >
      <ToggleSwitch
        labelClass="options__label"
        idName="remove-admin-bar"
        label={__('Loop lottie', 'portfolio-backend')}
        checked={loopLottie}
        onChange={setLoopLottie}
        helperMessage={__('Loop lottie if lottie loaded', 'portfolio-backend')}
      />
    </InputRow>
  );

  return (
    <div
      className="shared"
    >
      {animtaionFileElement}
      {loopLottieElement}
      {colorPickerElement}
      {descriptionElement}
    </div>
  );
};

export default SharedItems;
