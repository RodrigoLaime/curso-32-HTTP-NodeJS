const db = require('mongoose');

db.Promise = global.Promise;//seteamos las promesas

//generamos la connecion
async function connect(url) {
  /* ZVkUPo6bHImkwY0t*/
  /* mongodb://db_user_platziRodri:ZVkUPo6bHImkwY0t@ac-b76vc4t-shard-00-00.kpp1aja.mongodb.net:27017,ac-b76vc4t-shard-00-01.kpp1aja.mongodb.net:27017,ac-b76vc4t-shard-00-02.kpp1aja.mongodb.net:27017/?ssl=true&replicaSet=atlas-11oq1m-shard-0&authSource=admin&retryWrites=true&w=majority */
  await db.connect(url, {
    useNewUrlParser: true,//para que no alla problema de conpatibilidad si el servidos es nuevo o viejo
  });
  console.log('[db] connectada con exito')

}

module.exports = connect;