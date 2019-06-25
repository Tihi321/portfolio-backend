import {render} from 'react-dom';
import Store from './containers/store';

export default class Page {
  constructor(
    appElement,
    messageElementSelector = '.js-portfolio-page-message',
    messageTextSelector = '.js-portfolio-page-message-text',
  ) {
    this.appElement = appElement || document.querySelector('.js-portfolio-page');
    this.messageElementSelector = messageElementSelector;
    this.messageTextSelector = messageTextSelector;

  }

  init() {
    render(
      <Store
        messageElementSelector={this.messageElementSelector}
        messageTextSelector={this.messageTextSelector}
      />,
      this.appElement
    );
  }
}
