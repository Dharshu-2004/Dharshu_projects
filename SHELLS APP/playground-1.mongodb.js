/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "course_reservation"; // Name of your database
const usersCollection = "users"; // Collection for storing user data
const coursesCollection = "courses"; // Collection for storing course data
const registrationsCollection = "registrations"; // Collection for storing registration data

// Create a new database.
use(database);

// Create collections.
db.createCollection(usersCollection);
db.createCollection(coursesCollection);
db.createCollection(registrationsCollection);

// The prototype form to create a collection (optional configuration parameters).
/* db.createCollection( <name>,
  {
    capped: <boolean>,  // Define if the collection should be capped (limited size).
    autoIndexId: <boolean>,  // Whether the collection automatically creates an _id index.
    size: <number>, // Size of the capped collection (if applicable).
    max: <number>, // Maximum number of documents (if capped).
    storageEngine: <document>, // Storage engine configuration.
    validator: <document>, // Validation rules for data.
    validationLevel: <string>, // Level of validation (off, strict, moderate).
    validationAction: <string>, // Action on invalid data (error, warn).
    indexOptionDefaults: <document>,  // Default options for indexes.
    viewOn: <string>,  // Set the collection as a view on another collection (for aggregation).
    pipeline: <pipeline>,  // Aggregation pipeline for a view.
    collation: <document>, // Collation rules (for sorting).
    writeConcern: <document>,  // Write concern options (safety levels).
    timeseries: { // For time series collections (added in MongoDB 5.0)
      timeField: <string>, // Required for time series collections (timestamp field).
      metaField: <string>, // Optional meta field for categorization.
      granularity: <string>, // Granularity of data (seconds, minutes, etc.).
      bucketMaxSpanSeconds: <number>, // Maximum time span for a bucket.
      bucketRoundingSeconds: <number>, // Rounding seconds for the buckets.
    },
    expireAfterSeconds: <number>,  // Set TTL (Time To Live) for documents.
    clusteredIndex: <document>,  // For clustered indexes (added in MongoDB 5.3).
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
