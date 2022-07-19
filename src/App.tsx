import React, {useState} from "react";
import './App.css';

import {CounterWindow} from "./components/CounterWindow/CounterWindow";

function App() {

  const [counterValue, setCounterValue] = useState<number>(0)

  const minValue = 0;
  const maxValue = 0;


  const addValue = () => {
    setCounterValue(counterValue + 1)
  }

  const resetValue = () => {
    setCounterValue(0)
  }

  return (
    <div className="App">
      <CounterWindow
          counterValue={counterValue}
          resetValueCallback={resetValue}
          addValueCallBack={addValue} />

    </div>
  );
}

export default App;
