import {Button} from "../UniversalButton/UniversalButton";
import React from "react";
import "../../App.css";
import {SettingsMonitor} from "./SettingsMonitor";

type PropsType = {
    counterValue: number,
    changeInputValuesCallback: (minValue: number, maxValue: number) => void
    settingsValues: Array<number>
    setSettings: () => void

}


export const SettingsWindow = (props: PropsType) => {

    const buttonCallback = () => {
        props.setSettings()
    }




    return (
        <div className="SettingsWindow">
            <SettingsMonitor
                counter={props.counterValue}
                settingsValues={props.settingsValues}
                changeValuesCallback={props.changeInputValuesCallback}
            />

            <Button name={"set"} counterValue={props.counterValue} callBack={buttonCallback} settingsValues={props.settingsValues} isDisabled={true}/>

        </div>
    )
}