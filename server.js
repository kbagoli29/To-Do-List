const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/to_do_list', { useNewUrlParser: true }).then(function () {
    console.log("DataBase connected");
});



const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cachecl = null;
app.engine('mustache', mustacheExpressInstance);//telling app that engine is mustache and passing its instance
app.set('view engine', 'mustache');//setting view engine to be mustache
app.set('views', __dirname + '/views');//setting our view directory

app.use('/', routes);

app.listen(3000, function () {
    console.log("Listening to port 3000");
});