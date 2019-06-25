/* global portfolioDashboard */
import React, {PureComponent} from 'react';
import generalHelpers from '../../../helpers/general-helper';

import Topbar from '../sections';

class TopbarStore extends PureComponent {
  constructor(props) {
    super(props);

    // Elements for the submit message. Outside of react, out in the light DOM.
    this.messageElement = document.querySelector(props.messageElementSelector);
    this.messageTextElement = document.querySelector(props.messageTextSelector);

    this.state = {
      dataLoaded: false,
      showPicker: {
        action: false,
        id: -1,
      },
      logo: {
        id: -1,
        url: '',
        title: '',
      },
      showMessage: false,
      message: '',
      pageActive: 'options',
      projects: [{
        title: '',
        path: '',
        color: '',
        link: '',
      }],
    };

  }

  // Parse dashboard data.
  getDashboardOptions = (data) => {

    const {
      generalOptions: {
        logo,
        message,
        showMessage,
      },
      projectsOptions: {
        projects,
      },
    } = data;

    const showMessageValue = (showMessage === '1') || false;

    const projectsArr = (projects) ? JSON.parse(projects) : [{
      title: '',
      path: '',
      color: '',
      link: '',
    }];

    return {
      generalOptions: {
        showMessage: showMessageValue,
        message,
        logo: JSON.parse(logo),
      },
      projectsOptions: {
        projects: projectsArr,
      },
    };
  }

  // fetch dashboard data from dashoard endpoint.
  fetchData = () => {

    const {
      root,
      getOptionsApi,
    } = portfolioDashboard;

    fetch(root + getOptionsApi)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        const data = this.getDashboardOptions(myJson);

        const {
          generalOptions: {
            showMessage,
            message,
            logo,
          },
          projectsOptions: {
            projects,
          },
        } = data;

        this.setState(() => {
          return {
            dataLoaded: true,
            showMessage,
            message,
            logo,
            projects,
          };
        });
      });
  }

    saveOptions = () => {
      const {
        root,
        saveOptionsApi,
        portfolioNonce,
        nonce,
      } = portfolioDashboard;

      const {
        showMessage,
        message,
        logo,
        projects,
      } = this.state;

      const bodyData = JSON.stringify({
        showMessage,
        message,
        logo,
        projects,
      });


      fetch(`${root}${saveOptionsApi}`, {
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
    handleShowMessage: (value) => {
      this.setState(() => {
        return {
          showMessage: value,
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
    handleMessgae: (text) => {
      this.setState(() => {
        return {
          message: text,
        };
      });
    },

    handleProjectsOnChange: (pid, newValue, type) => {
      const newProject = this.state.projects.map((value, id) => {
        if (pid !== id) {
          return value;
        }

        switch (type) {
          case 'path':
            return {
              ...value,
              path: newValue,
            };
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
          projects: newProject,
        };
      });
    },
    handleRemoveProject: (pid) => {
      this.setState(() => {
        return {
          projects: this.state.projects.filter((value, id) => pid !== id),
        };
      });
    },
    handleProjectUp: (pid) => {
      const newProjectsArr = generalHelpers.swapObjects(this.state.projects, pid, pid - 1);

      this.setState(() => {
        return {
          projects: newProjectsArr,
        };
      });
    },
    handleProjectDown: (pid) => {
      const newProjectsArr = generalHelpers.swapObjects(this.state.projects, pid, pid + 1);

      this.setState(() => {
        return {
          projects: newProjectsArr,
        };
      });
    },
    handleAddProject: () => {
      const newProjectsArr = [...this.state.projects];

      this.setState(() => {
        return {
          projects: newProjectsArr.concat([{
            title: '',
            path: '',
            color: '',
            link: '',
          }]),
        };
      });
    },
    handleToggleColorPicker: (e) => {
      const {
        id,
      } = e.currentTarget.dataset;

      this.setState(() => {
        return {
          showPicker: {
            action: !this.state.showPicker.action,
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

export default TopbarStore;
