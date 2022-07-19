import React, {ChangeEvent, useState} from "react";
import "../../App.css";

type MonitorPropsType = {
    counter: number
}

export const SettingsMonitor = (props: MonitorPropsType) => {
    let minValue = 0;
    let maxValue = 0;

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        minValue = Number(e.currentTarget.value)
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        maxValue = Number(e.currentTarget.value)
    }


    return (
        <div className="SettingsMonitor">
            <div>
                min value<input type={"number"} onChange={minValueHandler}/>
            </div>
            <div>
                max value<input type={"number"} onChange={maxValueHandler}/>
            </div>
        </div>
    )
}

