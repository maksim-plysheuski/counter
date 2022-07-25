import React, {ChangeEvent} from "react";
import "../../App.css";

type MonitorPropsType = {
    counter: number | string
    settingsValues: Array<number>
    changeValuesCallback: (minValue: number, maxValue: number) => void
}

export const SettingsMonitor = (props: MonitorPropsType) => {


    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        let newValue = Number(e.currentTarget.value)
        props.changeValuesCallback(newValue, props.settingsValues[1])
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        let newValue = Number(e.currentTarget.value)
        props.changeValuesCallback(props.settingsValues[0], newValue)
    }


    return (
        <div className="SettingsMonitor">
            <div>
                start value<input value={props.settingsValues[0]} type={"number"} onChange={minValueHandler}/>
            </div>
            <div>
                max value<input value={props.settingsValues[1]} type={"number"} onChange={maxValueHandler}/>
            </div>
        </div>
    )
}

