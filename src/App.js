import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid='counter'>{count}</h3>
        <button data-testid='minus-button'
          onClick={() => setCount((prev) => prev - 1)}
          disabled={disabled}>-</button>
        <button data-testid='plus-button'
          onClick={() => setCount((prev) => prev + 1)}
          disabled={disabled}
        >+</button>
        <div>
          <button style={{backgroundColor: 'blue'}}
            data-testid='on/off-button'
            onClick={() => setDisabled(prev => !prev)} // false이면 true로, true이면 false로 바꾸기
            >on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
