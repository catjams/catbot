// Imports the Google Cloud client library
const { Logging } = require('@google-cloud/logging');

// Creates a client
const logging = new Logging();

/**
 * TODO(developer): Uncomment the following line to run the code.
 */
// const sinkName = 'Name of your sink, e.g. my-sink';

const sink = logging.sink("idk");

async function printSinkMetadata() {
  // See https://googleapis.dev/nodejs/logging/latest/Sink.html#getMetadata
  const [metadata] = await sink.getMetadata();
  console.log(`Name: ${metadata.name}`);
  console.log(`Destination: ${metadata.destination}`);
  console.log(`Filter: ${metadata.filter}`);
}
export { printSinkMetadata };
