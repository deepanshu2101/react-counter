import { React, useState } from 'react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [counter, setCounter] = useState(1);
  const increase = () => {
    setCounter(count => count + 1);
  };
  const decrease = () => {
    setCounter(count => count - 1);
  };
  const reset = () => {
    setCounter(count => 0);
  };

  return (
    <div className="App">
      <div className='rounded bg-success p-4 row'>
        <div color='blue'>
          Counter
          <div>
            <Button className="col-2 btn-primary p-4" onClick={increase}>
              +
            </Button> { }
            <Button className="col-2 btn-primary p-4" onClick={decrease}>
              -
            </Button> { }
            <Button className="col-2 btn-primar p-4" onClick={(reset)}>
              Reset
            </Button>
          </div>
        </div>

      </div>
      <div>
        {counter}
      </div>
      <footer className="fixed-bottom text-black-50">
        Made by Deepanshu Bhardwaj
      </footer>
    </div>
  );
}

export default App;