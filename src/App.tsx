import React, {useEffect, useState} from "react";
import "./App.css";

import {CounterWindow} from "./components/CounterWindow/CounterWindow";
import {SettingsWindow} from "./components/SettingsWindow/SettingsWindow";

function App() {

    const [counterValue, setCounterValue] = useState<number>(0)
    const [settingsValues, setSettings] = useState<Array<number>>([0, 5])
    const [editSettingsMode, setEditSettingsMode] = useState<boolean>(false)

    const minValue = settingsValues[0]
    const maxValue = settingsValues[1]
    const isIncButtonDisabled = editSettingsMode || maxValue <= 0 || minValue >= maxValue || minValue < 0 || counterValue === maxValue
    const isResetButtonDisabled = editSettingsMode || counterValue === minValue
    const isSetButtonDisabled = !editSettingsMode || maxValue <= 0 || minValue >= maxValue || minValue < 0
    const incorrectValueError = editSettingsMode && isSetButtonDisabled


    useEffect(() => {
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
        localStorage.setItem("counter-value", JSON.stringify(counterValue))
    }, [settingsValues])


    const incrementValue = () => {
        setCounterValue(counterValue + 1)
    }
    const resetValue = () => {
        setCounterValue(settingsValues[0])
    }

    const setSettingsValues = () => {
        setCounterValue(settingsValues[0])
        setEditSettingsMode(false)
    }

    const changeInputValues = (minValue: number, maxValue: number) => {
        setSettings([minValue, maxValue])
        setEditSettingsMode(true)
    }


    return (
        <div className="App">
            <CounterWindow
                counterValue={counterValue}
                settingsValues={settingsValues}
                editSettingsMode={editSettingsMode}
                isIncButtonDisabled={isIncButtonDisabled}
                isResetButtonDisabled={isResetButtonDisabled}
                incorrectValueError={incorrectValueError}
                resetValueCallback={resetValue}
                incrementValueCallBack={incrementValue}
            />
            <SettingsWindow
                counterValue={counterValue}
                settingsValues={settingsValues}
                isSetButtonDisabled={isSetButtonDisabled}
                incorrectValueError={incorrectValueError}
                setSettingsValuesCallback={setSettingsValues}
                changeInputValuesCallback={changeInputValues}
            />
        </div>
    );
}

export default App;
