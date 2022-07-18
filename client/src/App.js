import React, {useEffect, useState} from "react"
import logo from './logo.svg';
import axios from './axios.js';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('/testAPI')
    .then(res => {
      setData(res.data)
    } )
  }, [])

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
      </header>
      <p>{data}</p>
    </div>
  );
}

export default App;
