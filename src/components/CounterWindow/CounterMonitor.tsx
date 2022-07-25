import React from "react";
import "../../App.css";

type MonitorPropsType = {
    counter: number | string
    settingsValues: Array<number>
    maxValueDisplayed: boolean
    editSettingsMode: boolean
    incorrectValues: boolean
}

export const CounterMonitor = (props: MonitorPropsType) => {


    return (
        <div className={!props.maxValueDisplayed ? "CounterMonitor" : "CounterMonitorError"}>
            {props.incorrectValues ? "enter correct values"
                : props.editSettingsMode ? `enter values and press "set"`
                    : props.counter}
        </div>
    )
}

