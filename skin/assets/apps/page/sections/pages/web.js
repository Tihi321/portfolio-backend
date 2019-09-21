import React, {Fragment, useContext} from 'react';
import {WebStore} from '../../store/web-store';
import SharedItems from '../shared-items';
import Projects from '../projects/projects';

const Web = (props) => {
  const {
    attributes: {
      webAnimationFile,
      webAccentColor,
      webDescription,
      webProjects,
      webLottie,
    },
    actions: {
      handleWebAnimation,
      handleRemoveWebAnimation,
      setWebAccentColor,
      setWebDescription,
      handleWebProjectOnChange,
      handleRemoveWebProject,
      handleWebProjectUp,
      handleWebProjectDown,
      handleAddWebProject,
      setWebLottie,
    },
  } = useContext(WebStore);

  return (
    <Fragment>
      <SharedItems
        animationFile={webAnimationFile}
        accentColor={webAccentColor}
        description={webDescription}
        handleAnimationFileUpdate={handleWebAnimation}
        handleRemoveAnimationFile={handleRemoveWebAnimation}
        setAccentColor={setWebAccentColor}
        setDescription={setWebDescription}
        loopLottie={webLottie}
        setLoopLottie={setWebLottie}
      />
      <Projects
        projects={webProjects}
        handleProjectOnChange={handleWebProjectOnChange}
        handleRemoveProject={handleRemoveWebProject}
        handleProjectUp={handleWebProjectUp}
        handleProjectDown={handleWebProjectDown}
        handleAddProject={handleAddWebProject}
      />
    </Fragment>
  );
};

export default Web;
