import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The UserStatsCollection. It encapsulates state and variable values for stuff.
 */
class UserStatsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'UserStatsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      intent: String,
      time: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the UserStatsCollection.
 * @type {UserStatsCollection}
 */
export const UserStats = new UserStatsCollection();
