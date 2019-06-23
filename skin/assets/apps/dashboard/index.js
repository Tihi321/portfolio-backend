import {render} from 'react-dom';
import DashbordStore from './containers/DashbordStore';

export default class Dashboard {
  constructor(
    appElement = '.js-topbar-dashboard',
    messageElementSelector = '.js-topbar-dashboard-message',
    messageTextSelector = '.js-topbar-dashboard-message-text',
  ) {
    this.appElement = document.querySelector(appElement);
    this.messageElementSelector = messageElementSelector;
    this.messageTextSelector = messageTextSelector;

  }

  init() {
    render(
      <DashbordStore
        messageElementSelector={this.messageElementSelector}
        messageTextSelector={this.messageTextSelector}
      />,
      this.appElement
    );
  }
}
