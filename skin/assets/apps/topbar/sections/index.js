import {Fragment, useContext} from 'react';
import {__} from '@wordpress/i18n';
import {Spinner} from '@wordpress/components';
import Menu from './Menu';
import GeneralOptions from './general-options';
import ProjectsOptions from './projects-options';
import {ButtonRowElement} from '../components';
import {StoreContext} from '../context/store';

const Topbar = (props) => {

  const {
    attributes: {
      dataLoaded,
      pageActive,
    },
    actions: {
      saveOptions,
    },
  } = useContext(StoreContext);

  const getElement = () => {
    switch (pageActive) {
      case 'options':
        return (
          <GeneralOptions />
        );
      case 'projects':
        return (
          <ProjectsOptions />
        );

      default:
        break;
    }
  };

  return (
    <Fragment>
      <h1 className="dashboard__title">
        {__('Topbar', 'portfolio-backend')}
      </h1>
      <Menu />
      <div className="dashboard__options">
        <div className="dashboard__options-inner">
          {(!dataLoaded) ? <Spinner /> : getElement()}
        </div>
      </div>
      <ButtonRowElement
        onClick={saveOptions}
        title={__('Save', 'portfolio-backend')}
      />
    </Fragment>
  );
};

export default Topbar;
