import { Selector } from 'testcafe';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout(testController) {
    const loggedInUser = await Selector('#navbar-current-user').exists;
    if (loggedInUser) {
      await testController.click('#navbar-current-user');
      await testController.click('#navbar-sign-out');
    }
  }

  async gotoTutorialPage(testController) {
    await testController.click('#navbar-tutorial-page');
  }

  async gotoSendFeedbackPage(testController) {
    await testController.click('#navbar-send-feedback-page');
  }

  async gotoSigninPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-in');
  }

  /** Check that the specified user is currently logged in. */
  async isLoggedIn(testController, username) {
    const loggedInUser = Selector('#navbar-current-user').innerText;
    await testController.expect(loggedInUser).eql(username);
  }

  /** Check that someone is logged in, then click items to logout. */
  async logout(testController) {
    await testController.expect(Selector('#navbar-current-user').exists).ok();
    await testController.click('#navbar-current-user');
    await testController.click('#navbar-sign-out');
  }

  /** Pull down login menu, go to sign up page. */
  async gotoSignupPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-up');
  }

  async gotoAdminPage(testController) {
    await testController.click('#navbar-admin-page');
  }

  async gotoViewFeedbackPage(testController) {
    await testController.click('#navbar-view-feedback-page');
  }

  async gotoAnalyticsPage(testController) {
    await testController.click('#navbar-analytics-page');
  }

  async gotoAddIntentPage(testController) {
    await testController.click('#navbar-add-intent-page');
  }

  async gotoListIntentPage(testController) {
    await testController.click('#navbar-list-intent-page');
  }
}

export const navBar = new NavBar();
