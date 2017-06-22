const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

let list = ['cut grass', 'make dinner'];
let complete = [];

app.get('/', function(req, res){
  let counter=0,
  context = {
    list : list,
    complete : complete,
    id: function(){
      return counter++;
    }
  };
  res.render('index', context);
});

app.post('/', function(req, res){
  let job = req.body.todo;
  list.push(job);
  res.redirect('/');
});

app.post('/todo/:id/complete/', function(req, res){
  let id = Number(req.params.id);
  let selection = list[id];
  complete.push(selection);
  list.splice(id, 1);
  res.redirect('/');
});

app.listen(3000, function(){
  console.log('listening');
});
