import './App.css';
import { useState } from 'react';

function App() {
  // remember, there's a second item from the array that's missing here, but we'll come right back to use it soon
  const [count] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button>Change!</button>
    </div>
  );
}

export default App;
