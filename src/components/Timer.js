import React from 'react';
import "../styles/timer.css";

export function Timer(props) {
    return (
        <div className='timerDisplay'>
            <h3>Time Remaining for {props.timerType}</h3>
            <p>{props.minutes} : {props.seconds}</p>
        </div>
    )
}