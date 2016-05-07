export class AngularChatPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-chat-app h1')).getText();
  }
}
