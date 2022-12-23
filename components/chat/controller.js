const store = require('./store');
function addChat(users) {
  if (!users || !Array.isArray(users)) {
    return Promise.reject('Invalid user list');
  }
  const chat = {
    users: users,
  };
  return store.add(chat);
}
function listChats(userId) {
  return store.list(userId);
}
module.exports = {
  addChat,
  listChats,
}
/* const store = require('./store');

function addChat(users) {
  if (!users || !Array.isArray(users)) {//valida si hay un usuario o si es un array
    return Promise.reject('Invalided User')//si hay error resuelve el error
  };
  const chat = {//se genera el chat
    users: users,
  };
  return store.add(chat);
};

function listChats(userId) {
  return store.list(userId);
};



module.exports = { addChat, listChats } */