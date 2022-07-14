import React from 'react';
import './../App.css';

type IncButtonPropsType = {
    addValue: () => void
    counter: number
}

export const IncButton = (props: IncButtonPropsType) => {
    const buttonClass = props.counter === 5 ? "red" : ''

    return(
        <button className={buttonClass}  disabled={props.counter >= 5} onClick={props.addValue}>inc</button>
    )
}