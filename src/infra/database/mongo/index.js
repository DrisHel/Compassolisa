const mongoose = require('mongoose');


class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect('mongodb+srv://doris:1234@cluster0.kkipq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
  }
}

module.exports = new Database().connect();