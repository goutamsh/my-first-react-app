import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNewComponent from './MyNewComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World !!!
        </p>
        <MyNewComponent/>
      </header>
    </div>
  );
}

export default App;
