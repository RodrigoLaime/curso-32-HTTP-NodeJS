const Model = require('./model');
function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}
function listUsers() {
  return Model.find();
}
module.exports = {
  add: addUser,
  list: listUsers,
}
/* const Model = require('./model');


function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();//añadimos usuario
}

function listUsers() {
  return Model.find();//optener usuario
}

module.exports = {
  add: addUser,
  list: listUsers
}; */