import {__} from '@wordpress/i18n';
import ProjectsInput from './project-input';
import {ButtonRowElement} from '../../../components';

const ProjectsOptions = (props) => {
  const {
    attributes: {
      menuItems,
      showMenuItemPicker,
    },
    dataStore: {
      handleAddMenuItem,
    },
    dataStore,
  } = props;

  const menuItemsNum = menuItems.length;

  const menuItemsElements = menuItems.map((menuItem, id) => {
    return (
      <ProjectsInput
        showMenuItemPicker={showMenuItemPicker}
        key={id}
        id={id}
        menuItem={menuItem}
        length={menuItemsNum}
        dataStore={dataStore}
      />
    );
  });

  return (
    <div
      className="options"
    >
      <ul
        className="projects__items"
      >
        {menuItemsElements}
      </ul>
      <ButtonRowElement
        onClick={handleAddMenuItem}
        title={__('Add new project', 'portfolio-backend')}
      />
    </div>
  );
};

export default ProjectsOptions;
