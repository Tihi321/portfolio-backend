import {Fragment, useContext} from 'react';
import {__} from '@wordpress/i18n';
import {Spinner} from '@wordpress/components';
import Menu from './Menu';
import GeneralOptions from './general-options';
import About from './pages/about';
import Web from './pages/web';
import Video from './pages/video';
import Android from './pages/android';
import {ButtonRowElement} from '../components';
import {GeneralStore} from '../store/general-store';
import {FetchContext} from '../store/fetch-context';

const Topbar = (props) => {

  const {
    attributes: {
      pageActive,
    },
  } = useContext(GeneralStore);

  const {
    attributes: {
      dataLoaded,
    },
    actions: {
      saveOptions,
    },
  } = useContext(FetchContext);

  const getElement = () => {
    switch (pageActive) {
      case 'options':
        return (
          <GeneralOptions />
        );
      case 'about':
        return (
          <About />
        );
      case 'webDevelopment':
        return (
          <Web />
        );
      case 'videoProduction':
        return (
          <Video />
        );
      case 'androidDevelopment':
        return (
          <Android />
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
