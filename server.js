const express = require('express');
const server = express();
const App = require('./transpiled/app');
const renderToString = require('react-dom/server').renderToString;

server.use(express.static( __dirname + '/dist'));
server.set('view engine', 'ejs');

server.get('/', function(req, res) {
    res.render('index', {
       title: 'Yo soy un titulo',
       content: renderToString(App({message: "Ahora si estoy listo!"}))
     });
});

server.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
