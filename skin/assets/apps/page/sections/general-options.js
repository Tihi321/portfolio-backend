import {__} from '@wordpress/i18n';
import {Fragment} from 'react';

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
    dataStore: {
      handleOnSelectPageLogo,
      handleOnRemovePageLogo,
      handleGithubChange,
      handleLinkedinChange,
      handleYoutubeChange,
      handleGooglePlayChange,
      handleContactMailChange,
    },
  } = props;

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
          onSelectMedia={handleOnSelectPageLogo}
          onRemoveMedia={handleOnRemovePageLogo}
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
              onChange={handleGithubChange}
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
              onChange={handleYoutubeChange}
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
              onChange={handleLinkedinChange}
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
              onChange={handleGooglePlayChange}
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
              onChange={handleContactMailChange}
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
    </div>
  );
};

export default GeneralOptions;
