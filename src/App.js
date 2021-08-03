import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const change = () => {
    setCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
    /* any update can happen here */
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={change}>
        Change!
      </button>
    </div>
  );
}

export default App;
