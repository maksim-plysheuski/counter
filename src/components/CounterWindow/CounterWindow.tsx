import {CounterMonitor} from "./CounterMonitor";
import {Button} from "../UniversalButton/UniversalButton";
import React from "react";
import "../../App.css";

type CounterWindowType = {
    counterValue: number
    settingsValues: Array<number>
    editSettingsMode: boolean
    isIncButtonDisabled: boolean
    isResetButtonDisabled: boolean
    correctValueError: boolean
    resetValueCallback: () => void
    incrementValueCallBack: () => void
}


export const CounterWindow = (props: CounterWindowType) => {


    return (
        <div className="CounterWindow">
            <CounterMonitor
                counterValue={props.counterValue}
                editSettingsMode={props.editSettingsMode}
                correctValueError={props.correctValueError}
                settingsValues={props.settingsValues}
            />
            <div className="Buttons">
                <Button name={"increment"}
                        counterValue={props.counterValue}
                        callBack={props.incrementValueCallBack}
                        isDisabled={props.isIncButtonDisabled}/>
                <Button name={"reset"}
                        counterValue={props.counterValue}
                        callBack={props.resetValueCallback}
                        isDisabled={props.isResetButtonDisabled}/>
            </div>
        </div>
    )
}