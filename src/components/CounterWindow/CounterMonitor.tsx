import React from "react";
import "../../App.css";

type MonitorPropsType = {
    counterValue: number
    editSettingsMode: boolean
    correctValueError: boolean
    settingsValues: Array<number>
}

export const CounterMonitor = (props: MonitorPropsType) => {
    const maxValue = props.settingsValues[1]

    let isMaxValueAchieved = false;
    if (!props.editSettingsMode && maxValue === props.counterValue) {
        isMaxValueAchieved = true
    }


    return (
        <div className={props.correctValueError || isMaxValueAchieved ? "CounterMonitorError" :  "CounterMonitor"}>
            {props.correctValueError ? "enter correct value" : props.editSettingsMode ? "enter your value" : props.counterValue}
        </div>
    )
}

