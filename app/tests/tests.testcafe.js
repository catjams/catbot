import { landingPage } from './landing.page';
import { tutorialPage } from './tutorial.page';
import { sendFeedbackPage } from './sendFeedback.page';
import { viewFeedbackPage } from './viewFeedback.page';
import { analyticsPage } from './analytics.page';
import { addIntentPage } from './addIntent.page';
import { listIntentPage } from './listIntent.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { adminPage } from './admin.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'admin@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that tutorial page shows up', async (testController) => {
  await navBar.gotoTutorialPage(testController);
  await tutorialPage.isDisplayed(testController);
});

test('Test that send feedback shows up', async (testController) => {
  await navBar.gotoSendFeedbackPage(testController);
  await sendFeedbackPage.isDisplayed(testController);
  await sendFeedbackPage.addFeedback(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that the admin page works', async (testController) => {
  await navBar.gotoAdminPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoAdminPage(testController);
  await adminPage.isDisplayed(testController);
});

test('Test that view feedback works', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoViewFeedbackPage(testController);
  await viewFeedbackPage.isDisplayed(testController);
  await viewFeedbackPage.hasTable(testController);
});

test('Test that analytics works', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoAnalyticsPage(testController);
  await analyticsPage.isDisplayed(testController);
});

test('Test that add intent works', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoAddIntentPage(testController);
  await addIntentPage.isDisplayed(testController);
  await addIntentPage.addIntent(testController);
});

test('Test that list intent works', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoListIntentPage(testController);
  await listIntentPage.isDisplayed(testController);
  await listIntentPage.hasTable(testController);
});
