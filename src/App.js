import './App.css';
import { useState } from 'react';

function App() {
  const value = useState(0);
  console.log(value); // [0, ƒ()]

  return (
    <div>
      <h1>{value[0]}</h1>
      <button>Change!</button>
    </div>
  );
}

export default App;
