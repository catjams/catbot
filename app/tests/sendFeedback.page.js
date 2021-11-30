import { Selector } from 'testcafe';

class SendFeedbackPage {
  constructor() {
    this.pageId = '#send-feedback-page';
    this.pageSelector = Selector(this.pageId);
  }

  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const sendFeedbackPage = new SendFeedbackPage();
