const React =  require('react');
const Button = require('./button');

const App = ({ message }) =>
      <div>
      <h1> {message} </h1>
        <Button />
      </div>

module.exports = App;
