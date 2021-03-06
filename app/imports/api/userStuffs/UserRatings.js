import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The UserRatingsCollection. It encapsulates state and variable values for stuff.
 */
class UserRatingsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'UserRatingsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      comment: { type: String, optional: true },
      experience: {
        type: String,
        allowedValues: ['Helpful', 'Not helpful'],
      },
      createdAt: Date,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the UserRatingsCollection.
 * @type {UserRatingsCollection}
 */
export const UserRatings = new UserRatingsCollection();
