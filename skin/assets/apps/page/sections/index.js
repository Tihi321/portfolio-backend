import {Fragment} from 'react';
import {__} from '@wordpress/i18n';
import {Spinner} from '@wordpress/components';
import Menu from './Menu';
import GeneralOptions from './general-options';
import ProjectsOptions from './projects-options';
import {ButtonRowElement} from '../components';

const Topbar = (props) => {
  const {
    attributes: {
      pageActive,
      dataLoaded,
    },
    dataStore: {
      handleOnSave,
    },
    attributes,
    dataStore,
  } = props;

  const getElement = () => {
    switch (pageActive) {
      case 'options':
        return (
          <Fragment>
            <GeneralOptions
              attributes={attributes}
              dataStore={dataStore}
            />
            <ProjectsOptions
              attributes={attributes}
              dataStore={dataStore}
            />
          </Fragment>
        );

      default:
        break;
    }
  };

  return (
    <Fragment>
      <h1 className="dashboard__title">
        {__('Potfolio Page', 'portfolio-backend')}
      </h1>
      <Menu
        attributes={attributes}
        dataStore={dataStore}
      />
      <div className="dashboard__options">
        <div className="dashboard__options-inner">
          {(!dataLoaded) ? <Spinner /> : getElement()}
        </div>
      </div>
      <ButtonRowElement
        onClick={handleOnSave}
        title={__('Save', 'portfolio-backend')}
      />
    </Fragment>
  );
};

export default Topbar;