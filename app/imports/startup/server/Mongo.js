import { Meteor } from 'meteor/meteor';
import { UserStats } from '../../api/userStuffs/UserStats';
import { UserInputs } from '../../api/userStuffs/UserInputs';

function parseIntent(str) {
  if (str.indexOf('intent_name') > 0) {
    const num1 = str.indexOf('intent_name') + 14;
    const num2 = str.indexOf('\n', num1) - 1;
    return str.substring(num1, num2);
  }
  return 'none';
}

function parseInput(str) {
  if (str.indexOf('Dialogflow Request') > -1 && str.indexOf('GOOGLE_ASSISTANT_WELCOME') === -1) {
    const num1 = str.lastIndexOf('text') + 10;
    const num2 = str.indexOf('\\n', num1) - 2;
    return str.substring(num1, num2);
  }
  return 'none';
}

function addUserStats({ textPayload, timestamp }) {
  const intent = parseIntent(textPayload);
  if (intent !== 'none') {
    UserStats.collection.insert({ intent, timestamp });
  }
}

function addUserInputs({ textPayload, timestamp }) {
  const input = parseInput(textPayload);
  if (input !== 'none') {
    UserInputs.collection.insert({ input, timestamp });
  }
}

if (Meteor.settings.loadAssetsFile && UserStats.collection.find().count() === 0) {
  const assetsFileName = 'data.json';
  // eslint-disable-next-line no-console
  console.log(`Loading data from private/${assetsFileName}`);
  const jsonData = JSON.parse(Assets.getText(assetsFileName));
  jsonData.map(obj => addUserStats(obj));
  jsonData.map(obj => addUserInputs(obj));
}
