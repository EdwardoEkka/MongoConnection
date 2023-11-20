const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect('mongodb://127.0.0.1:27017/dummy')
      .then((client) => {
        dbConnection = client.db();
        return cb(null); // Pass null when there's no error
      })
      .catch((err) => {
        console.error(err); // Log the error
        return cb(err); // Pass the error to the callback
      });
  },
  getDb: () => dbConnection,
};
