import {Button} from "../UniversalButton/UniversalButton";
import React from "react";
import "../../App.css";
import {SettingsMonitor} from "./SettingsMonitor";

type PropsType = {
    counterValue: number,
    changeInputValuesCallback: (minValue: number, maxValue: number) => void
    settingsValues: Array<number>
    setSettingsValuesCallback: () => void
    isSetButtonDisabled: boolean
    correctValueError: boolean

}


export const SettingsWindow = (props: PropsType) => {

    const buttonCallback = () => {
        props.setSettingsValuesCallback()
    }

    return (
        <div className="SettingsWindow">
            <SettingsMonitor
                counterValue={props.counterValue}
                settingsValues={props.settingsValues}
                correctValueError={props.correctValueError}
                changeInputValuesCallback={props.changeInputValuesCallback}
            />

            <Button name={"set"}
                    counterValue={props.counterValue}
                    settingsValues={props.settingsValues}
                    isDisabled={props.isSetButtonDisabled}
                    callBack={buttonCallback}
            />
        </div>
    )
}