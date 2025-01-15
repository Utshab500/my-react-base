/**
 * @description - This is an example of alert functionality in a react app.
 *  Also to add little touch of styling using bootstrap css framework.
 * 
 * @author - Utshab
 */
import logo from './logo.svg';
import './App.css';

// Importing CSS framework Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="btn btn-primary" onClick={()=>{alert('Hi I am learning react!');}}>Click me</button>
      </header>
    </div>
  );
}

export default App;
