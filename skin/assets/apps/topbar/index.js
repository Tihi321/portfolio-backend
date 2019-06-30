import {render} from 'react-dom';
import App from './containers/app';

export default class Topbar {
  constructor(
    appElement,
    messageElementSelector = '.js-portfolio-topbar-message',
    messageTextSelector = '.js-portfolio-topbar-message-text',
  ) {
    this.appElement = appElement || document.querySelector('.js-portfolio-topbar');
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
