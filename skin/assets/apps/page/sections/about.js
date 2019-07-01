import React, {useContext} from 'react';
import {StoreContext} from '../context/store';
import SharedItems from './shared-items';

const About = (props) => {
  const {
    attributes: {
      aboutAnimationFile,
      aboutAccentColor,
      aboutDescription,
    },
    reducers: {
      handleAboutAnimationUpdate,
      handleRemoveAboutAnimation,
      setAboutAccentColor,
      setAboutDescription,
    },
  } = useContext(StoreContext);

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
