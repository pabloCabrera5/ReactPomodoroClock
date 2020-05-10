
import {
    INCREMENT, DECREMENT,
    START, PAUSE, RESET, UPDATETIMER, CHANGETIMER, UPDATECOUNTER
} from "../constants/constants";

const increment = () => (
    {
        type: INCREMENT
    }
)

const decrement = () => (
    {
        type: DECREMENT
    }
)
const startTimer = () => (
    {
        type: START
    }
)

const changeTimer = (typeCounter, minutes) => (
    {
        type: CHANGETIMER,
        typeCounter,
        minutes
    }
)
const updateTimer = (minutes, seconds) => (
    {
        type: UPDATETIMER,
        minutes,
        seconds
    }
)

const pauseTimer = (minutes, seconds) => {
    return {
        type: PAUSE,
        minutes,
        seconds,
    }
}
const resetTimer = () => (
    {
        type: RESET
    }
)
const updateCounter = (payload) => (
    {
        type: UPDATECOUNTER,
        payload
    }
)

export {
    increment,
    decrement,
    startTimer,
    changeTimer,
    updateTimer,
    pauseTimer,
    resetTimer,
    updateCounter
}
