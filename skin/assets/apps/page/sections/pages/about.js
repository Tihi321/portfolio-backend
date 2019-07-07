import React, {useContext} from 'react';
import {AboutStore} from '../../store/about-store';
import SharedItems from '../shared-items';

const About = (props) => {
  const {
    attributes: {
      aboutAnimationFile,
      aboutAccentColor,
      aboutDescription,
    },
    actions: {
      handleAboutAnimationUpdate,
      handleRemoveAboutAnimation,
      setAboutAccentColor,
      setAboutDescription,
    },
  } = useContext(AboutStore);

  return (
    <SharedItems
      animationFile={aboutAnimationFile}
      accentColor={aboutAccentColor}
      description={aboutDescription}
      handleAnimationFileUpdate={handleAboutAnimationUpdate}
      handleRemoveAnimationFile={handleRemoveAboutAnimation}
      setAccentColor={setAboutAccentColor}
      setDescription={setAboutDescription}
    />
  );
};

export default About;
