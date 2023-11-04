var admin = require("firebase-admin");

// Load the service account key JSON file for authentication
var serviceAccount = require("../zetatonback-firebase-adminsdk-i5vsz-32a2c1af05.json");

// Initialize the Firebase Admin SDK with the service account credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Access the Firestore database using the initialized admin object
const db = admin.firestore();

module.exports = { admin, db };
