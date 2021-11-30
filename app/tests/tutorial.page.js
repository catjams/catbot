import { Selector } from 'testcafe';

class TutorialPage {
  constructor() {
    this.pageId = '#tutorial-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(35000).expect(this.pageSelector.exists).ok();
  }
}

export const tutorialPage = new TutorialPage();
