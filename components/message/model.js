const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mySchema = new Schema({
  chat: {
    type: Schema.ObjectId,
    ref: 'Chat',
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
  file: String,
});
const model = mongoose.model('Message', mySchema);
module.exports = model;
/* const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//le indicamos a mongoose que tipo de informacion queremnos almacenar.
const mySchema = new Schema({
  chat: {
    type: Schema.ObjectId,
    ref: 'Chat',
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  message: {
    type: String,
    required: true,
  },
  date: Date
});

const model = mongoose.model('message', mySchema);

module.exports = model; */