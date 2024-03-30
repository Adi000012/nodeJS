const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/mydatabase"; // Replace with your details

MongoClient.connect(uri, (err, client) => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
    return;
  }

  console.log("Connected to MongoDB successfully!");

  // Close connection after establishing it (optional for some use cases)
  client.close();
});
