import React, {useState} from "react";
import './App.css';
import {Monitor} from "./Monitor/Monitor";
import {IncButton} from "./IncButton/IncButton";
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
          <IncButton addValue={addValue} counter={counter}/>
          <ResetButton resetValue={resetValue} counter={counter} />
        </div>
      </div>

    </div>
  );
}

export default App;
