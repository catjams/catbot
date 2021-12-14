import { Selector } from 'testcafe';

class SendFeedbackPage {
  constructor() {
    this.pageId = '#send-feedback-page';
    this.pageSelector = Selector(this.pageId);
  }

  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async addFeedback(testController) {
    const contactDetails = 'Eugine305@gmail.com';
    const summary = 'Response missing';
    const description = 'When asking the bot about taxes there was no proper response.';
    await this.isDisplayed(testController);
    await testController.typeText('#contactDetails', contactDetails);
    await testController.typeText('#summary', summary);
    await testController.typeText('#description', description);

    await testController.click('#submit');
    await testController.click(Selector('.swal-button--confirm'));
  }
}

export const sendFeedbackPage = new SendFeedbackPage();
