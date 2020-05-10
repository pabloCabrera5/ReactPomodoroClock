import React, { Component } from 'react';

import './App.css';
import { Controls } from './components/Controls';
import { Counter } from './components/Counter';
import { Toolbar } from './components/Toolbar';
import { Timer } from './components/Timer';
// import { Time } from './components/timertest';

import { MAX, MIN, WORK, BREAK } from './constants/constants'


class App extends Component {
  constructor(props) {
    super(props);
    // We dont need the state anymore as we use redux, so all the state is available in the props
    /*this.state = {
      counterBreak: STARTCOUNTERBREAK,
      counterWork: STARTMINUTES,
      counterRemaining: '',
      typeCounter: WORK,

      isRunning: false,
      minutes: STARTMINUTES,
      seconds: '00'
    }*/
  }

  _updateCounter = (id, operation) => {
    console.log(this.props)
    if (this.props.isRunning) return;
    if (operation !== '+' && operation !== '-') return;
    if (id !== WORK && id !== BREAK) return;
    let state = {};

    // the clock is in the work counter
    if (this.props.typeCounter === WORK) {
      // we receive an event from the work counter
      if (id === WORK) {
        // it means that we have to restart the counter, and reset the counterRemaining
        state.seconds = '00';
        state.counterRemaining = '';
        if (operation === '+' && this.props.counterWork < MAX) {
          state.counterWork = this.props.counterWork + 1;
        } else if (operation === '-' && this.props.counterWork > MIN) {
          state.counterWork = this.props.counterWork - 1;
        }
        // in case the counter is 1 and press -, to restart the timer to 01:00 if we dont add o subs the counter ( we dont have a value in state.counterWork)
        state.minutes = state.counterWork ? state.counterWork : this.props.counterWork;
      }
      else if (id === BREAK) {
        if (operation === '+' && this.props.counterBreak < MAX) {
          state.counterBreak = this.props.counterBreak + 1;
        } else if (operation === '-' && this.props.counterBreak > MIN) {
          state.counterBreak = this.props.counterBreak - 1;
        }
      }
    }
    // the clock is in the break counter
    else if (this.props.typeCounter === BREAK) {
      // we receive an event from the break counter
      if (id === BREAK) {
        // it means that we have to restart the counter, and reset the counterRemaining
        state.seconds = '00';
        state.counterRemaining = '';
        if (operation === '+' && this.props.counterBreak < MAX) {
          state.counterBreak = this.props.counterBreak + 1;
        } else if (operation === '-' && this.props.counterBreak > MIN) {
          state.counterBreak = this.props.counterBreak - 1;
        }
        state.minutes = state.counterBreak ? state.counterBreak : this.props.counterBreak;
      }
      else if (id === WORK) {
        if (operation === '+' && this.props.counterWork < MAX) {
          state.counterWork = this.props.counterWork + 1;
        } else if (operation === '-' && this.props.counterWork > MIN) {
          state.counterWork = this.props.counterWork - 1;
        }
      }
    }

    if (state.minutes < 10) state.minutes = '0' + state.minutes;
    this.props.updateCounter(state);
    //this.setState(state)
  }

  _playTimer = () => {
    if (this.intervalId) return; // already running
    console.log('inside Play')
    this.props.startTimer();
    /*
    this.setState({
      isRunning: true
    })*/
    let distance = this.props.counterRemaining ? this.props.counterRemaining : this.props.typeCounter === WORK ? this.props.counterWork * 60 : this.props.counterBreak * 60;

    this.intervalId = setInterval(() => {

      // Time distance is in seconds, so every second we substract 1
      distance = distance - 1;

      // Time calculations for minutes and seconds
      let minutes = Math.floor(distance / 60);
      let seconds = Math.floor((distance - (minutes * 60)));
      if (minutes < 10) minutes = '0' + minutes;
      if (seconds < 10) seconds = '0' + seconds;
      
      
      if (distance < 0) { //to show the 00 but not the -01
        clearInterval(this.intervalId);
        this.intervalId = '';
        this.audioBeep.play();
        
        let typeCounter = this.props.typeCounter === WORK ? BREAK : WORK;
        let minutes = this.props.typeCounter === WORK ? this.props.counterBreak : this.props.counterWork;
        if (minutes < 10) minutes = '0' + minutes; // for desing/visualize purpose only, i want to show the initial minute of the next timer
        this.props.changeTimer(typeCounter, minutes);
        /*this.setState({
          typeCounter: this.props.typeCounter === WORK ? BREAK : WORK,
          counterRemaining: ''
        }, () => {*/
          this._playTimer();
        //})
      } else {
        // put it an else so we can show when the timer reach 00:00 and control the timer update since the condition is < 0 to avodi troubles with the -1
        // if we put it outside the condition would have some troubles
        this.props.updateTimer(minutes, seconds);
      }
      
      
      /*this.setState({
        minutes: minutes,
        seconds: seconds,
      })*/
    }, 1000);

  }

  _pauseTimer = () => {
    console.log('Pause', this.intervalId)
    // If its not running nothing to do
    if (!this.props.isRunning) return;
    this.props.pauseTimer(this.props.minutes, this.props.seconds)

    //Now we use Redux
    // we save the time left of the clock and set the state running to false
    /*this.setState({
      isRunning: false,
      counterRemaining: this.props.minutes * 60 + this.props.seconds
    })*/

    // We clear the interval so stop to count and we can relaunch it the next time we press play
    clearInterval(this.intervalId)
    this.intervalId = '';
  }

  _resetTimer = () => {
    console.log(this.props)
    clearInterval(this.intervalId)
    this.intervalId = '';
    this.props.resetTimer();
    /*this.setState({
      counterBreak: STARTCOUNTERBREAK,
      counterWork: STARTMINUTES,
      counterRemaining: '',
      typeCounter: WORK,

      isRunning: false,
      minutes: STARTMINUTES,
      seconds: '00'
    })*/
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Toolbar title='Pomodoro Clock'>
            Pomodoro Clock
          </Toolbar>
          <div className='allCounters'>
            <Counter updateCounter={this._updateCounter} id={BREAK} title='Break time' counterValue={this.props.counterBreak} />
            <Counter updateCounter={this._updateCounter} id={WORK} title='Working time' counterValue={this.props.counterWork} />
          </div>

          <Timer minutes={this.props.minutes} seconds={this.props.seconds} timerType={this.props.typeCounter} />
          <Controls play={this._playTimer} pause={this._pauseTimer} reset={this._resetTimer} />

          {this.props.minutes < 1 ?
            <p id='lastminute'>
              {this.props.minutes} : {this.props.seconds}
            </p> : <div></div>
          }

          {/*The ref attribute makes possible to store a reference to a particular React element or component, and then we can call it*/}
          <audio
            id='beep'
            preload='auto'
            ref={audio => {
              this.audioBeep = audio;
            }}
            src='https://goo.gl/65cBl1'
          />

          {/*<Time minutes={this.state.minutes} seconds={this.state.seconds} key={this.state.seconds} />*/}

        </header>
      </div>
    );
  }

}

export default App;

// Another approach should be have one central timer in seconds (*60) where we update this value of the state in the interval
// then the minute and second varible can be locally and calculated each time the component is (re)render ( when the state change, the timer)
// the timer should be initialized at the work minutes * 60, and then when we click pause we dont have to calculate the remaining time
// we already have it in the variable timer all is based/centralized in this variable