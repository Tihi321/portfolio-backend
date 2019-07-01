import {__} from '@wordpress/i18n';
import {Fragment, useContext} from 'react';
import {StoreContext} from '../context/store';
import MenuItemsOptions from './menu/items-options';

import {
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
      github,
      linkedin,
      youtube,
      googlePlay,
      contactMail,
    },
    reducers: {
      handleLogoUpdate,
      handleRemoveLogo,
      setGithub,
      setLinkedin,
      setYoutube,
      setGooglePlay,
      setContactMail,
    },
  } = useContext(StoreContext);

  const logoElement = (
    <InputRow
      className="options__row"
    >
      <InputLabel
        message={__('Logo', 'portfolio-backend')}
        helper={__('Logo in the menu', 'portfolio-backend')}
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
    const githubElement = (
      <InputRow
        className="options__row"
        >
        <InputLabel
          message={__('Github', 'portfolio-backend')}
          helper={__('Social media url')}
        />
        <div className="options__input-wrap">
          <TextElement
              styleReset={true}
              outputType='text'
              className="pb-input-mce-class"
              value={github}
              onChange={setGithub}
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
    const youtubeElement = (
      <InputRow
        className="options__row"
        >
        <InputLabel
          message={__('Youtube', 'portfolio-backend')}
          helper={__('Social media url')}
        />
        <div className="options__input-wrap">
          <TextElement
              styleReset={true}
              outputType='text'
              className="pb-input-mce-class"
              value={youtube}
              onChange={setYoutube}
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
    const linkedinElement = (
      <InputRow
        className="options__row"
        >
        <InputLabel
          message={__('Linkedin', 'portfolio-backend')}
          helper={__('Social media url')}
        />
        <div className="options__input-wrap">
          <TextElement
              styleReset={true}
              outputType='text'
              className="pb-input-mce-class"
              value={linkedin}
              onChange={setLinkedin}
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
    const googlePlayElement = (
      <InputRow
        className="options__row"
        >
        <InputLabel
          message={__('Google Play', 'portfolio-backend')}
          helper={__('Social media url')}
        />
        <div className="options__input-wrap">
          <TextElement
              styleReset={true}
              outputType='text'
              className="pb-input-mce-class"
              value={googlePlay}
              onChange={setGooglePlay}
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
    const contactMailElement = (
      <InputRow
        className="options__row"
        >
        <InputLabel
          message={__('Contact', 'portfolio-backend')}
          helper={__('Contact mail')}
        />
        <div className="options__input-wrap">
          <TextElement
              styleReset={true}
              outputType='text'
              className="pb-input-mce-class"
              value={contactMail}
              onChange={setContactMail}
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
      {githubElement}
      {youtubeElement}
      {linkedinElement}
      {googlePlayElement}
      {contactMailElement}
    </Fragment>
  );

  return (
    <div
      className="options"
    >
      {optionsElements}
      <MenuItemsOptions />
    </div>
  );
};

export default GeneralOptions;
