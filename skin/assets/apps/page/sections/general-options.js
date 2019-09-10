import {__} from '@wordpress/i18n';
import {Fragment, useContext} from 'react';
import {GeneralStore} from '../store/general-store';
import MenuItemsOptions from './menu/items-options';

import {
  InputRow,
  InputLabel,
} from '../components';
import {
  TextElement,
} from '../../../elements';

const GeneralOptions = (props) => {

  const {
    attributes: {
      github,
      linkedin,
      youtube,
      googlePlay,
      wordPress,
      contactMail,
    },
    actions: {
      setGithub,
      setLinkedin,
      setYoutube,
      setGooglePlay,
      setWordPress,
      setContactMail,
    },
  } = useContext(GeneralStore);

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
    const wordPressElement = (
      <InputRow
        className="options__row"
        >
        <InputLabel
          message={__('WordPress', 'portfolio-backend')}
          helper={__('Social media url')}
        />
        <div className="options__input-wrap">
          <TextElement
              styleReset={true}
              outputType='text'
              className="pb-input-mce-class"
              value={wordPress}
              onChange={setWordPress}
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
      {githubElement}
      {youtubeElement}
      {linkedinElement}
      {googlePlayElement}
      {wordPressElement}
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
