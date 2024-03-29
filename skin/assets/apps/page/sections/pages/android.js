import React, {Fragment, useContext} from 'react';
import {AndroidStore} from '../../store/android-store';
import SharedItems from '../shared-items';
import Projects from '../projects/projects';

const Android = (props) => {
  const {
    attributes: {
      androidAnimationFile,
      androidAccentColor,
      androidDescription,
      androidProjects,
      androidLottie,
    },
    actions: {
      handleAndroidAnimationUpdate,
      handleRemoveAndroidAnimation,
      setAndroidAccentColor,
      setAndroidDescription,
      handleAndroidProjectOnChange,
      handleRemoveAndroidProject,
      handleAndroidProjectUp,
      handleAndroidProjectDown,
      handleAddAndroidProject,
      setAndroidLottie,
    },
  } = useContext(AndroidStore);

  return (
    <Fragment>
      <SharedItems
        animationFile={androidAnimationFile}
        accentColor={androidAccentColor}
        description={androidDescription}
        handleAnimationFileUpdate={handleAndroidAnimationUpdate}
        handleRemoveAnimationFile={handleRemoveAndroidAnimation}
        setAccentColor={setAndroidAccentColor}
        setDescription={setAndroidDescription}
        loopLottie={androidLottie}
        setLoopLottie={setAndroidLottie}
      />
      <Projects
        projects={androidProjects}
        handleProjectOnChange={handleAndroidProjectOnChange}
        handleRemoveProject={handleRemoveAndroidProject}
        handleProjectUp={handleAndroidProjectUp}
        handleProjectDown={handleAndroidProjectDown}
        handleAddProject={handleAddAndroidProject}
      />
    </Fragment>
  );
};

export default Android;
