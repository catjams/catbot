import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The AdminActivities Collection. It stores intents for the chatbot.
 */
class AdminActivitiesCollection {
  constructor() {
    // The name of this collection.
    this.name = 'AdminActivitiesCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      accountName: String,
      action: String,
      type: String,
      catergoy: String,
      createdAt: Date,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the AdminActivitiesCollection.
 * @type {AdminActivitiesCollection}
 */
export const AdminActivities = new AdminActivitiesCollection();
