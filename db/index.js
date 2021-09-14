const mongoose = require('mongoose');
//const DB_URI = 'mongodb://localhost:27017/estimates';

class DBConnections {
  constructor() {}

    Connect(uri) {
      mongoose
        .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Successfully connected to mongodb database"))
        .catch(err => console.log('not connected'));
};
}
module.exports = new DBConnections();
// };
