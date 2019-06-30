import {__} from '@wordpress/i18n';
import {Fragment, useContext} from 'react';
import {StoreContext} from '../context/store';

import {
  ToggleSwitch,
  InputRow,
  InputLabel,
} from '../components';
import {
  MediaElement,
  TextElement,
} from '../../../elements';

const GeneralOptions = (props) => {

  const {
    attributes: {
      logo: {
        id,
        title,
        url,
      },
      message,
      showMessage,
    },
    reducers: {
      setMessage,
      setShowMessage,
      handleLogoUpdate,
      handleRemoveLogo,
    },
  } = useContext(StoreContext);

  const showMessageElement = (
    <InputRow
      className="options__row options__row--toggle"
    >
      <ToggleSwitch
        labelClass="options__label"
        idName="remove-admin-bar"
        label={__('Show message', 'portfolio-backend')}
        checked={showMessage}
        onChange={setShowMessage}
        helperMessage={__('Show message on the topbar', 'portfolio-backend')}
      />
    </InputRow>
  );

  const logoElement = (
    <InputRow
      className="options__row"
    >
      <InputLabel
        message={__('Logo', 'portfolio-backend')}
        helper={__('Logo shown on top right of the topbar', 'portfolio-backend')}
      />
      <div
        className="options__logo-wrap"
      >
        <MediaElement
          className="options__logo-element"
          mediaTitle={title}
          toolbarOnTop={false}
          tagName="div"
          mediaId={id}
          mediaUrl={url}
          onSelectMedia={handleLogoUpdate}
          onRemoveMedia={handleRemoveLogo}
        />
      </div>
    </InputRow>
  );

  /* eslint-disable */
    const messageElement = (
      <InputRow
        className="options__row"
        >
        <InputLabel
          message={__('Message', 'portfolio-backend')}
          helper={__('Message shown on the topbar', 'portfolio-backend')}
        />
        <div className="options__input-wrap">
          <TextElement
              styleReset={true}
              outputType='text'
              className="pb-input-mce-class"
              value={message}
              onChange={setMessage}
              maxChars={50}
              maxRows={1}
              warning={false}
              single={true}
              init={{
                quickbars_insert_toolbar:false,
                quickbars_selection_toolbar: false,
              }}
            />
        </div>
      </InputRow>
    );
  /* eslint-enable */

  const optionsElements = (
    <Fragment>
      {logoElement}
      {showMessageElement}
      {messageElement}
    </Fragment>
  );

  return (
    <div
      className="options"
    >
      {optionsElements}
    </div>
  );
};

export default GeneralOptions;
