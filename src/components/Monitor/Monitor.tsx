import React from 'react';
import '../../App.css';

type MonitorPropsType = {
    counter: number
}

export const Monitor = (props: MonitorPropsType) => {

    return <div className="Monitor">{props.counter}
    </div>
}

