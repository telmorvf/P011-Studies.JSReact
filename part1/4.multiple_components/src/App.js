import logo from './logo.svg';
import './App.css';

const Hello = () => {
  return (
    <div>
      <p>Hello world another component App.js</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings APP.js</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App;

