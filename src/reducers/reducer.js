
import {
    INCREMENT, DECREMENT,
    START, UPDATETIMER, CHANGETIMER, PAUSE, RESET,
    STARTCOUNTERBREAK, STARTMINUTES,
    WORK, BREAK, UPDATECOUNTER
} from "../constants/constants";

const INITIAL_STATE = {
    counterBreak: STARTCOUNTERBREAK,
    counterWork: STARTMINUTES,
    counterRemaining: '',
    typeCounter: WORK,

    isRunning: false,
    minutes: STARTMINUTES,
    seconds: '00'
}


// Execute at the launch of the app 
// Executed every time we dispatch action 
export function pomodoroClock(state = INITIAL_STATE, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                counterTimer: state.counterTimer + 1
            }
        case DECREMENT:
            return {
                counterTimer: state.counterTimer - 1
            }
            
        case UPDATECOUNTER:
            return Object.assign({}, state, action.payload)
        case CHANGETIMER:
            return Object.assign({}, state, { typeCounter: action.typeCounter, counterRemaining: '', minutes: action.minutes })
        case UPDATETIMER:
            return {...state, minutes: action.minutes, seconds: action.seconds }
        case START:
            return {...state, isRunning: true }
        case PAUSE:
            return {...state, isRunning: false, counterRemaining: parseInt(action.minutes) * 60 + parseInt(action.seconds)}
        case RESET:
            return INITIAL_STATE
        default:
            return state
    }
}