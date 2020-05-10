import React, { Component } from 'react'

export class Time extends Component {
    constructor (props) {
        console.log('secondtimer');
        super(props);
        this.state = {
            minutes: props.minutes,
            seconds: props.seconds
        }
    }
    componentWillUpdate() {
        console.log('will update')
    }
    componentDidUpdate(props) {
        console.log('did update')
        console.log(props)
    }
    
    render () {
        //console.log(this.state)
        return (
        <h2>
            {this.state.minutes} :::: {this.state.seconds}
        </h2>
    )
    }
    
}