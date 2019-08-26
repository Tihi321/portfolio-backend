import React, {useContext, Fragment} from 'react';
import {__} from '@wordpress/i18n';

import {
  InputRow,
  InputLabel,
} from '../../components';
import {
  TextElement,
} from '../../../../elements';

import {AboutStore} from '../../store/about-store';
import SharedItems from '../shared-items';

const About = (props) => {
  const {
    attributes: {
      aboutAnimationFile,
      aboutAccentColor,
      aboutDescription,
      aboutPage,
    },
    actions: {
      handleAboutAnimationUpdate,
      handleRemoveAboutAnimation,
      setAboutAccentColor,
      setAboutDescription,
      setAboutPage,
    },
  } = useContext(AboutStore);

  const aboutPageElement = (
    <InputRow
      className="options__row"
    >
      <InputLabel
        message={__('About Page', 'portfolio-backend')}
        helper="Short descrption paragraph in header"
      />
      <div className="options__input-wrap">
        <TextElement
          styleReset={true}
          outputType="text"
          className="pb-input-mce-class pb-input-mce-description"
          value={aboutPage}
          onChange={setAboutPage}
        />
      </div>
    </InputRow>
  );

  return (
    <Fragment>
      <SharedItems
        animationFile={aboutAnimationFile}
        accentColor={aboutAccentColor}
        description={aboutDescription}
        handleAnimationFileUpdate={handleAboutAnimationUpdate}
        handleRemoveAnimationFile={handleRemoveAboutAnimation}
        setAccentColor={setAboutAccentColor}
        setDescription={setAboutDescription}
      />
      {aboutPageElement}
    </Fragment>
  );
};

export default About;
