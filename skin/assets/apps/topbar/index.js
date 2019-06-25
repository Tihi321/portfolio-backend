import {render} from 'react-dom';
import TopbarStore from './containers/topbar-store';

export default class Topbar {
  constructor(
    appElement,
    messageElementSelector = '.js-portfolio-topbar-message',
    messageTextSelector = '.js-portfolio-topbar-message-text',
  ) {
    this.appElement = appElement || document.querySelector('.js-portfolio-topbar');
    this.messageElementSelector = messageElementSelector;
    this.messageTextSelector = messageTextSelector;

  }

  init() {
    render(
      <TopbarStore
        messageElementSelector={this.messageElementSelector}
        messageTextSelector={this.messageTextSelector}
      />,
      this.appElement
    );
  }
}
