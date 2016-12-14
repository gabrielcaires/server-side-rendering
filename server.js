const express = require('express');
const server = express();

server.use(express.static( __dirname + '/dist'));
server.set('view engine', 'ejs');

server.get('/', function(req, res) {
    res.render('index', {
       title: 'Yo soy un titulo',
       content: '<h1>Yo soy una pantalla en blanco </h1>'
     });
});

server.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
