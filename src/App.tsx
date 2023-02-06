import React from 'react';
import './App.css';
import RandomTest from './RandomTest'
import Menu from './Menu'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <RandomTest/>
      </header>
    </div>
  );
}

export default App;
