const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./app');

const startUp = () => 
      ReactDOM.render(
          App({ message:"hola" }),
          document.getElementById('content')
      );

startUp();
