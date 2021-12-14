import { Selector } from 'testcafe';

class AddIntentPage {
  constructor() {
    this.pageId = '#add-intent-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(35000).expect(this.pageSelector.exists).ok();
  }

  async addIntent(testController) {
    const name = 'Eugine';
    const phrase = 'Taxes';
    const response = 'Information on taxes can be found in the link here:';
    await this.isDisplayed(testController);
    await testController.typeText('#name', name);
    await testController.typeText('#phrase', phrase);
    await testController.typeText('#response', response);

    await testController.click('#Submit');
    await testController.click(Selector('.swal-button--confirm'));
  }
}

export const addIntentPage = new AddIntentPage();
