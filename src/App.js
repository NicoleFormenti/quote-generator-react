import './App.css';
import { useState } from 'react';
import Counter from './components/counter';
import Quotes from './components/quote';
export default App;

function App() {
  const [messageShowing, setMessageShowing] = useState(true); 
  function toggleMessage () {
    setMessageShowing(!messageShowing);
  }
  //any logic has to be put above the return function
  return (
    <div className="App">
      <header>
      <h1>Working with state</h1>
      {
        messageShowing ?
        <button className='btn btn--on' onClick={toggleMessage}>
          <div></div>
        </button>
        :
        <button className='btn btn--off' onClick={toggleMessage}>
          <div></div>
        </button>
      } 
      </header>
      {
        messageShowing === true ?
        <div>This message can be hidden</div>
        :
        ''
      }
      <Counter />
      <hr></hr>
      <br></br>
      <footer>
        <Quotes />
      </footer>

      

    </div>
  )
  };