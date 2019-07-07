import {render} from 'react-dom';
import App from './containers';

export default class Page {
  constructor(
    appElement,
    messageElementSelector = '.js-portfolio-page-message',
    messageTextSelector = '.js-portfolio-page-message-text',
  ) {
    this.appElement = appElement || document.querySelector('.js-portfolio-page');
    this.messageElement = document.querySelector(messageElementSelector);
    this.messageTextElement = document.querySelector(messageTextSelector);

  }

  init() {
    render(
      <App
        messageElement={this.messageElement}
        messageTextElement={this.messageTextElement}
      />,
      this.appElement
    );
  }
}
