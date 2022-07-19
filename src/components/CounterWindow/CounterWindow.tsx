import {CounterMinitor} from "./CounterMonitor";
import {Button} from "../UniversalButton/UniversalButton";
import React from "react";
import '../../App.css';

type CounterWindowType = {
    counterValue: number,
    resetValueCallback: () => void
    addValueCallBack: () => void
}


export const CounterWindow = (props: CounterWindowType) => {


    return (
        <div className="MyApp">
            <CounterMinitor counter={props.counterValue}/>
            <div className="Buttons">
          <span className="AddValueButton">
            <Button name={'increment'} counterValue={props.counterValue} callBack={props.addValueCallBack}/>
          </span>
                <span className="ResetButton">
            <Button name={"reset"} counterValue={props.counterValue} callBack={props.resetValueCallback}/>
          </span>

            </div>
        </div>
    )
}