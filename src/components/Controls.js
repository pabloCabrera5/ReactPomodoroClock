import React from "react";
import '../styles/controls.css';

export const Controls = (props) => {

    const _play = () => {
        props.play()
    }
    const _pause = () => {
        props.pause()
    }
    const _reset = () => {
        props.reset()
    }

    return (
        <div className="field-group is-grouped">
            <button className='button-control is-info ' onClick={_play}>Play</button>
            <button className='button-control is-info ' onClick={_pause}>Pause</button>
            <button className='button-control is-info ' onClick={_reset}>Stop & Reset</button>
        </div>
    )
}