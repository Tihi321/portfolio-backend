import {render} from 'react-dom';
import PageStore from './containers/page-store';

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
      <PageStore
        messageElementSelector={this.messageElementSelector}
        messageTextSelector={this.messageTextSelector}
      />,
      this.appElement
    );
  }
}
