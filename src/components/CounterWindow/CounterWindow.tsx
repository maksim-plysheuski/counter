import {CounterMonitor} from "./CounterMonitor";
import {Button} from "../UniversalButton/UniversalButton";
import React from "react";
import "../../App.css";

type CounterWindowType = {
    counterValue: number | string,
    resetValueCallback: () => void
    addValueCallBack: () => void
    settingsValues: Array<number>
    editSettingsMode: boolean
}


export const CounterWindow = (props: CounterWindowType) => {

    const min = props.settingsValues[0]
    const max = props.settingsValues[1]

    const isDisabledIncButton = max <= 0 || min >= max || min < 0 || props.counterValue === max
    console.log(isDisabledIncButton)



    return (
        <div className="CounterWindow">
            <CounterMonitor
                counter={props.counterValue}
                settingsValues={props.settingsValues}
                maxValueDisplayed={isDisabledIncButton}
                editSettingsMode={props.editSettingsMode}
                incorrectValues={isDisabledIncButton}
            />
            <div className="Buttons">
                <Button name={"increment"}
                        counterValue={props.counterValue}
                        callBack={props.addValueCallBack}
                        settingsValues={props.settingsValues}
                        isDisabled={isDisabledIncButton}/>
                <Button name={"reset"}
                        counterValue={props.counterValue}
                        callBack={props.resetValueCallback}
                        settingsValues={props.settingsValues}
                        isDisabled={isDisabledIncButton}/>

            </div>
        </div>
    )
}