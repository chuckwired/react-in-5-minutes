import { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('') // initial value can be an empty string

  const change = () => {
    setCount(prevCount => prevCount + 1);
  }

  // useEffect will run every time the component re-renders
  useEffect(() => {
    setColor(randomcolor())
  });

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={change}>
        Change!
      </button>
    </div>
  );
}

export default App;
