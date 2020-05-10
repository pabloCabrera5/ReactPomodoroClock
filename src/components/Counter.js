import React, { Component } from 'react';
import "../styles/counter.css";



// Convert do stateless/presentational component
export class Counter extends Component {

    constructor(props) {
        super(props);

    }
    _add = () => {
        this.props.updateCounter(this.props.id, '+')
    }

    _substract = () => {
        this.props.updateCounter(this.props.id, '-')
    }

    render() {
        return (
            <div className='counter'>
                <h3>{this.props.title}</h3>
                <div className='counterValues'>
                    <button className='button-counter is-success is-light' onClick={this._substract}>-</button>
                    <p>{this.props.counterValue}</p>
                    <button className='button-counter is-success is-light' onClick={this._add}>+</button>
                </div>
            </div>
        )
    }
}

Counter.defaulProps = {
    initialValue: 0,
    maxValue: 60,
    minValue: 1
}