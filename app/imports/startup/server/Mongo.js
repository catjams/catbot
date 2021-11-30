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

function parseTime(str) {
  return str.substring(0, str.length - 5);
}

function addUserStats({ textPayload, timestamp, trace }) {
  const intent = parseIntent(textPayload);
  const time = parseTime(timestamp);
  const session = trace;
  if (intent !== 'none') {
    UserStats.collection.insert({ intent, time, session });
  }
}

function addUserInputs({ textPayload, timestamp, trace }) {
  const input = parseInput(textPayload);
  const time = parseTime(timestamp);
  const session = trace;
  if (input !== 'none') {
    UserInputs.collection.insert({ input, time, session });
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
