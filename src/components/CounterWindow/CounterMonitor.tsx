import React from 'react';
import '../../App.css';

type MonitorPropsType = {
    counter: number
}

export const CounterMinitor = (props: MonitorPropsType) => {

    return <div className="Monitor">{props.counter}
    </div>
}

