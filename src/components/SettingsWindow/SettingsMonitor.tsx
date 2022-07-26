import React, {ChangeEvent} from "react";
import "../../App.css";

type MonitorPropsType = {
    counterValue: number
    settingsValues: Array<number>
    incorrectValueError: boolean
    changeInputValuesCallback: (minValue: number, maxValue: number) => void
}

export const SettingsMonitor = (props: MonitorPropsType) => {


    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number(e.currentTarget.value)
        props.changeInputValuesCallback(newValue, props.settingsValues[1])
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = Number(e.currentTarget.value)
        props.changeInputValuesCallback(props.settingsValues[0], newValue)
    }


    return (
        <div className="SettingsMonitor">
            <div>
                start value<br/>
                <input className={props.incorrectValueError ? "inpError" : "inp"} value={props.settingsValues[0]} type={"number"} onChange={minValueHandler}/>
            </div>
            <div>
                max value<br/>
                <input className={props.incorrectValueError ? "inpError" : "inp"} value={props.settingsValues[1]} type={"number"} onChange={maxValueHandler}/>
            </div>
        </div>
    )
}

