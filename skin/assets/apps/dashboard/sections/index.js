import {Fragment} from 'react';
import {__} from '@wordpress/i18n';
import {Spinner} from '@wordpress/components';
import Menu from './Menu';
import GeneralOptions from './GeneralOptions';
import ProjectsOptions from './ProjectsOptions';
import {ButtonRowElement} from '../components';

const Dashboard = (props) => {
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
          <GeneralOptions
            attributes={attributes}
            dataStore={dataStore}
          />
        );
      case 'projects':
        return (
          <ProjectsOptions
            attributes={attributes}
            dataStore={dataStore}
          />
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

export default Dashboard;
