import {Fragment, useContext} from 'react';
import {__} from '@wordpress/i18n';
import {Spinner} from '@wordpress/components';
import Menu from './Menu';
import GeneralOptions from './general-options';
import About from './about';
import {ButtonRowElement} from '../components';
import {StoreContext} from '../context/store';

const Topbar = (props) => {

  const {
    attributes: {
      dataLoaded,
      pageActive,
    },
    reducers: {
      saveOptions,
    },
  } = useContext(StoreContext);

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
