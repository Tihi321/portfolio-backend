/* global portfolioDashboard */
import React, {PureComponent} from 'react';
import generalHelpers from '../../../helpers/general-helper';

import Topbar from '../sections';

class PageStore extends PureComponent {
  constructor(props) {
    super(props);

    // Elements for the submit message. Outside of react, out in the light DOM.
    this.messageElement = document.querySelector(props.messageElementSelector);
    this.messageTextElement = document.querySelector(props.messageTextSelector);

    this.state = {
      dataLoaded: false,
      logo: {
        id: -1,
        url: '',
        title: '',
      },
      pageActive: 'options',
      github: '',
      linkedin: '',
      youtube: '',
      googlePlay: '',
      contactMail: '',
    };

  }

  // Parse dashboard data.
  getDashboardOptions = (data) => {

    const {
      generalOptions: {
        logo,
        github,
        linkedin,
        youtube,
        googlePlay,
        contactMail,
      },
    } = data;

    return {
      generalOptions: {
        github,
        linkedin,
        youtube,
        googlePlay,
        contactMail,
        logo: JSON.parse(logo),
      },
    };
  }

  // fetch dashboard data from dashoard endpoint.
  fetchData = () => {

    const {
      root,
      getPageOptionsApi,
    } = portfolioDashboard;

    fetch(root + getPageOptionsApi)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        const data = this.getDashboardOptions(myJson);

        const {
          generalOptions: {
            github,
            linkedin,
            youtube,
            googlePlay,
            contactMail,
            logo,
          },
        } = data;

        this.setState(() => {
          return {
            dataLoaded: true,
            github,
            linkedin,
            youtube,
            googlePlay,
            contactMail,
            logo,
          };
        });
      });
  }

    saveOptions = () => {
      const {
        root,
        savePageOptionsApi,
        portfolioNonce,
        nonce,
      } = portfolioDashboard;

      const {
        github,
        linkedin,
        youtube,
        googlePlay,
        contactMail,
        logo,
      } = this.state;

      const bodyData = JSON.stringify({
        github,
        linkedin,
        youtube,
        googlePlay,
        contactMail,
        logo,
      });


      fetch(`${root}${savePageOptionsApi}`, {
        method: 'PATCH',
        mode: 'same-origin',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'X-WP-Nonce': nonce,
          'portfolio-nonce': portfolioNonce,
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: bodyData,
      })
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          const {
            messageElement,
            messageTextElement,
          } = this;

          generalHelpers.setMessageCallback(messageElement, messageTextElement, response, generalHelpers.IS_SUCCESS_CLASS);

        })
        .catch((error) => {
          const {
            messageElement,
            messageTextElement,
          } = this;

          generalHelpers.setMessageCallback(messageElement, messageTextElement, error, generalHelpers.IS_ERROR_CLASS);
        });
    };


  // data Store
  dataStore = {
    handleActivePage: (event) => {
      const {
        page,
      } = event.currentTarget.dataset;
      this.setState(() => {
        return {
          pageActive: page,
        };
      });
    },
    handleOnSave: () => {
      this.saveOptions();
    },
    handleOnSelectMedia: (image) => {
      this.setState(() => {
        return {
          logo: {
            id: image.id,
            url: image.url,
            title: image.title,
          },
        };
      });
    },
    handleOnRemoveMedia: () => {
      this.setState(() => {
        return {
          logo: {
            id: -1,
            url: '',
            title: '',
          },
        };
      });
    },
    handleGithubChange: (text) => {
      this.setState(() => {
        return {
          github: text,
        };
      });
    },
    handleLinkedinChange: (text) => {
      this.setState(() => {
        return {
          linkedin: text,
        };
      });
    },
    handleYoutubeChange: (text) => {
      this.setState(() => {
        return {
          youtube: text,
        };
      });
    },
    handleGooglePlayChange: (text) => {
      this.setState(() => {
        return {
          googlePlay: text,
        };
      });
    },
    handleContactMailChange: (text) => {
      this.setState(() => {
        return {
          contactMail: text,
        };
      });
    },

  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Topbar
        attributes={this.state}
        dataStore={this.dataStore}
      />
    );
  }

}

export default PageStore;
