const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

const todos = {
  todos: [{task: 'cut grass'}, {task: 'wash car'}, {task: 'make dinner'}]
};

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());

app.get('/', function (req, res) {
  let context = todos
  res.render('index', context);
});

app.post('/todo', function (req, res) {




  res.render('index', {todos: todos});
});








app.listen(3000, function (req, res) {
  console.log('listening');
});
