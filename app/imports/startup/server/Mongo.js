import { Meteor } from 'meteor/meteor';
import { UserStats } from '../../api/userStats/UserStats';

function parseIntent(text) {
  if (text.indexOf('intent_name') > 0) {
    const num1 = text.indexOf('intent_name') + 14;
    const num2 = text.indexOf('\n', num1) - 1;
    return text.substring(num1, num2);
  }
  return 'none';
}

function addUserStats({ textPayload, timestamp }) {
  const intent = parseIntent(textPayload);
  if (intent !== 'none') {
    UserStats.collection.insert({ intent, timestamp });
  }
}

if (Meteor.settings.loadAssetsFile && UserStats.collection.find().count() === 0) {
  const assetsFileName = 'data.json';
  // eslint-disable-next-line no-console
  console.log(`Loading data from private/${assetsFileName}`);
  const jsonData = JSON.parse(Assets.getText(assetsFileName));
  jsonData.map(obj => addUserStats(obj));
}
