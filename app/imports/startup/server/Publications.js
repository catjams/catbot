import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { UserFeedbacks } from '../../api/userFeedback/UserFeedback';
import { Intents } from '../../api/Intents/Intents';
import { UserRatings } from '../../api/userStuffs/userRatings';
import { UserStats } from '../../api/userStuffs/UserStats';
import { UserInputs } from '../../api/userStuffs/UserInputs';

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(UserFeedbacks.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return UserFeedbacks.collection.find();
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(Intents.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Intents.collection.find();
  }
  return this.ready();
});

Meteor.publish(UserStats.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return UserStats.collection.find();
  }
  return this.ready();
});

Meteor.publish(UserInputs.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return UserInputs.collection.find();
  }
  return this.ready();
});

Meteor.publish(UserRatings.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return UserRatings.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
