import React from 'react';
import './../App.css';

type ResetButtonPropsType = {
    resetValue: () => void
    counter: number
}

export const ResetButton = (props: ResetButtonPropsType) => {
    const buttonClass = props.counter === 0 ? "reset" : ''
    return(
        <button className={buttonClass} onClick={props.resetValue} disabled={props.counter === 0}>reset</button>
    )
}