import React from 'react';
import './../App.css';

type MonitorPropsType = {
    counter: number
}

export const Monitor = (props: MonitorPropsType) => {
    const monitorClass = props.counter >= 5 ? "redValue Monitor" : 'Monitor';
    return <div className={monitorClass}>{props.counter}
    <div>{props.counter === 5 ? "Хватить сюда жать" : ""}</div>
    </div>

}

