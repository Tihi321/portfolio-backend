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
