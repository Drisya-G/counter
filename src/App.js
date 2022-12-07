
import { useState } from 'react';
import './App.css';
//useState is hooks

function App() {
  const [counter, setCounter] = useState(0);
  //counter - state - To store values
  function incrementcounter() {
    setCounter(counter + 1);
  }
  function decrementcounter() {
    setCounter(counter - 1);
  }
  function resetcounter() {
    setCounter(0);
  }
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1>Counter Application</h1>
          <h1>{counter}</h1>

          <button
            style={{
              backgroundColor: 'pink',
              color: 'green',
              border: '1px solid red',
              padding: '20px',
              margin: '20px',
            }}
            onClick={incrementcounter}>click me to Increment</button>
          <button
            style={{
              backgroundColor: 'green',
              color: 'pink',
              border: '1px solid violet',
              padding: '20px',
              margin: '20px',

            }}
            onClick={decrementcounter}>click me to Decrement</button>
          <button
            style={{
              backgroundColor: 'black',
              color: 'white',
              border: '1px solid white',
              padding: '20px',
              margin: '20px',

            }}
            onClick={resetcounter}>click me to Reset</button>


        </center>
      </header>
    </div>
  );
}

export default App;
