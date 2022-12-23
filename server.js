const express = require('express');
const bodyParser = require('body-parser');//permite trabajar con el body de la peticion 
const db = require('./db');
db('mongodb://db_user_platziRodri:ZVkUPo6bHImkwY0t@ac-b76vc4t-shard-00-00.kpp1aja.mongodb.net:27017,ac-b76vc4t-shard-00-01.kpp1aja.mongodb.net:27017,ac-b76vc4t-shard-00-02.kpp1aja.mongodb.net:27017/?ssl=true&replicaSet=atlas-11oq1m-shard-0&authSource=admin&retryWrites=true&w=majority');

const router = require('./network/routes');//traemos la ruta de homework

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use('/app', express.static('public'));//conecta con html

app.listen(3000);
console.log('mi app en port 3000');