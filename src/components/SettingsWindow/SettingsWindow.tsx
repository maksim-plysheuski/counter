import {Button} from "../UniversalButton/UniversalButton";
import React from "react";
import "../../App.css";
import {SettingsMonitor} from "./SettingsMonitor";

type PropsType = {
    counterValue: number,
    resetValueCallback: () => void
    addValueCallBack: () => void
}


export const SettingsWindow = (props: PropsType) => {


    return (
        <div className="MyApp">
            <SettingsMonitor counter={props.counterValue}/>

            <Button name={"set"} counterValue={props.counterValue} callBack={props.addValueCallBack}/>

        </div>
    )
}