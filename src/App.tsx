import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import fetchNPC from "./server";

function App() {
    const [state, setState] = useState('');
    const [name, setName] = useState('');
    useEffect(() => {
        setState('loading');
        fetchNPC().then((res) => {
            setState('success')
            setName(res)
        })
    }, []);

  return (
      <>
        <div className="char-generator-web">
          <header className="char-generator-web-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              My character:
            </p>
            <h1>
              {name}
            </h1>
          </header>
        </div>
      </>
  );
}

export default App;
