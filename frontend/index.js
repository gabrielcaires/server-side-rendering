const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./app');

ReactDOM.render(
    App({ message: 'Ahora si estoy listo!' }),
    document.getElementById('content')
);
