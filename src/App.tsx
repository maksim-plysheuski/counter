import React, {useState} from "react";
import './App.css';
import {Monitor} from "./Monitor/Monitor";
import {IncrementButton} from "./IncButton/IncrementButton";
import {ResetButton} from "./ResetButton/ResetButton";

function App() {

  const [counter, setCounter] = useState<number>(0)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const resetValue = () => {
    setCounter(0)
  }

  return (
    <div className="App">
      <div className="MyApp">
          <Monitor counter={counter}/>
        <div className="Buttons">
          <span className="AddValueButton">
            <IncrementButton addValue={addValue} counter={counter}/>
          </span>
          <span className="ResetButton">
            <ResetButton resetValue={resetValue} counter={counter} />
          </span>

        </div>
      </div>

    </div>
  );
}

export default App;
