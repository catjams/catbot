import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { UserStats } from '../../api/userStats/UserStats';
/*
 eslint-disable no-console */
/*
// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
 if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
*/
function addUserStats({ textPayload, timestamp }) {
  UserStats.collection.insert({ textPayload, timestamp });
}

if (Meteor.settings.loadAssetsFile) {
  const assetsFileName = 'data.json';
  console.log(`Loading data from private/${assetsFileName}`);
  const jsonData = JSON.parse(Assets.getText(assetsFileName));
  jsonData.map(obj => addUserStats(obj));
}
