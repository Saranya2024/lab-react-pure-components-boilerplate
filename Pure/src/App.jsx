import React from 'react';
import SimpleCounterComponent from './components/SimpleCounterComponent';
import PureCounterComponent from './components/PureCounterComponent';
import './App.css';

function App() {
  return (
    <div>
      <SimpleCounterComponent />
      <PureCounterComponent />
    </div>
  );
}

export default App;
