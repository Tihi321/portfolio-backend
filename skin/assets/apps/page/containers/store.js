/* global portfolioDashboard */
import React, {PureComponent} from 'react';
import generalHelpers from '../../../helpers/general-helper';

import Topbar from '../sections';

class Store extends PureComponent {
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
      showMenuItemPicker: {
        action: false,
        id: -1,
      },
      menuItems: [{
        title: '',
        color: '',
        link: '',
      }],
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
        menuItems,
      },
    } = data;

    const menuItemssArr = (menuItems) ? JSON.parse(menuItems) : [{
      title: '',
      path: '',
      color: '',
      link: '',
    }];

    return {
      generalOptions: {
        github,
        linkedin,
        youtube,
        googlePlay,
        contactMail,
        menuItems: menuItemssArr,
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
            menuItems,
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
            menuItems,
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
        menuItems,
      } = this.state;

      const bodyData = JSON.stringify({
        github,
        linkedin,
        youtube,
        googlePlay,
        contactMail,
        logo,
        menuItems,
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
    handleOnSelectPageLogo: (image) => {
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
    handleOnRemovePageLogo: () => {
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
    handleMenuItemsOnChange: (pid, newValue, type) => {
      const newMenuItems = this.state.menuItems.map((value, id) => {
        if (pid !== id) {
          return value;
        }

        switch (type) {
          case 'color':
            return {
              ...value,
              color: newValue,
            };
          case 'link':
            return {
              ...value,
              link: newValue,
            };
          default:
            return {
              ...value,
              title: newValue,
            };
        }
      });

      this.setState(() => {
        return {
          menuItems: newMenuItems,
        };
      });
    },
    handleRemoveMenuItem: (pid) => {
      this.setState(() => {
        return {
          menuItems: this.state.menuItems.filter((value, id) => pid !== id),
        };
      });
    },
    handleMenuItemUp: (pid) => {
      const newMenuItemsArr = generalHelpers.swapObjects(this.state.menuItems, pid, pid - 1);

      this.setState(() => {
        return {
          menuItems: newMenuItemsArr,
        };
      });
    },
    handleMenuItemDown: (pid) => {
      const newMenuItemssArr = generalHelpers.swapObjects(this.state.menuItems, pid, pid + 1);

      this.setState(() => {
        return {
          menuItems: newMenuItemssArr,
        };
      });
    },
    handleAddMenuItem: () => {
      const newMenuItemssArr = [...this.state.menuItems];

      this.setState(() => {
        return {
          menuItems: newMenuItemssArr.concat([{
            title: '',
            color: '',
            link: '',
          }]),
        };
      });
    },
    handleToggleMenuItemPicker: (e) => {
      const {
        id,
      } = e.currentTarget.dataset;

      this.setState(() => {
        return {
          showMenuItemPicker: {
            action: !this.state.showMenuItemPicker.action,
            id: parseInt(id, 10),
          },
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

export default Store;
