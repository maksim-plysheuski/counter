import React, {useEffect, useState} from "react";
import "./App.css";

import {CounterWindow} from "./components/CounterWindow/CounterWindow";
import {SettingsWindow} from "./components/SettingsWindow/SettingsWindow";

function App() {

    const [counterValue, setCounterValue] = useState<number>(0)
    const [settingsValues, setSettings] = useState<Array<number>>([0, 8])
    const [editSettingsMode, setEditSettingsMode] = useState<boolean>(false)



    /*useEffect(() => {
        const minValue = localStorage.getItem("min-value")
        const maxValue = localStorage.getItem("max-value")
        if (minValue && maxValue) {
            let numberMinValue = JSON.parse(minValue)
            let numberMaxValue = JSON.parse(maxValue)

            setSettings([numberMinValue, numberMaxValue])
        }
    }, [])


    useEffect(() => {
        localStorage.setItem("min-value", JSON.stringify(settingsValues[0]))
        localStorage.setItem("max-value", JSON.stringify(settingsValues[1]))
    }, [settingsValues])*/



    const addValue = () => {
        setCounterValue(counterValue + 1)
    }
    const resetValue = () => {
        setCounterValue(0)
    }
    const changeInputValues = (minValue: number, maxValue: number) => {
        setSettings([minValue, maxValue])
        setEditSettingsMode(true)

    }
    const setSettingsCallback = () => {
        setCounterValue(Number(settingsValues[0]))
    }



    return (
        <div className="App">
            <CounterWindow
                counterValue={counterValue}
                resetValueCallback={resetValue}
                addValueCallBack={addValue}
                settingsValues={settingsValues}
                editSettingsMode={editSettingsMode}
            />
            <SettingsWindow
                counterValue={counterValue}
                changeInputValuesCallback={changeInputValues}
                settingsValues={settingsValues}
                setSettings={setSettingsCallback}
            />
        </div>
    );
}

export default App;
