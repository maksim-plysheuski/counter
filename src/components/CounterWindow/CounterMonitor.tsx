import React from "react";
import "../../App.css";

type MonitorPropsType = {
    counterValue: number
    editSettingsMode: boolean
    incorrectValueError: boolean
    settingsValues: Array<number>
}

export const CounterMonitor = (props: MonitorPropsType) => {
    const maxValue = props.settingsValues[1]

    let isMaxValueAchieved = false
    if (!props.editSettingsMode && maxValue === props.counterValue) {
        isMaxValueAchieved = true
    }


    return (
        <div className={props.incorrectValueError || isMaxValueAchieved ? "CounterMonitorError" :  "CounterMonitor"}>
            {props.incorrectValueError ? "Incorrect value!" : props.editSettingsMode ? `enter values and press «set»` : props.counterValue}
        </div>
    )
}

