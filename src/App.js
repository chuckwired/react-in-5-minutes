import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const change = () => {
    setCount(prevCount => prevCount + 1);
  }

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
