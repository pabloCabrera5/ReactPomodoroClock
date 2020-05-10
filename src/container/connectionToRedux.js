import { connect } from "react-redux";
import { increment, decrement, startTimer, changeTimer, updateTimer, pauseTimer, resetTimer, updateCounter } from "../actions/actions";


import App from "../App";


// to send the state via props
const mapStateToProps = (state) => {
    return {
        counterBreak: state.counterBreak,
        counterWork: state.counterWork,
        counterRemaining: state.counterRemaining,
        typeCounter: state.typeCounter,
  
        isRunning: state.isRunning,
        minutes: state.minutes,
        seconds: state.seconds
    }
}
// to send the dispatch actions as props
const mapDispatchToProps = (dispatch) => {

    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),

        startTimer: () => dispatch(startTimer()),
        changeTimer: (typeCounter, minutes) => dispatch(changeTimer(typeCounter, minutes)),
        updateTimer: (minutes, seconds) => dispatch(updateTimer(minutes, seconds)),

        pauseTimer: (minutes, seconds) => dispatch(pauseTimer(minutes,seconds)),
        updateCounter: (state) => dispatch(updateCounter(state)),

        resetTimer: () => dispatch(resetTimer()),
    }
}

const createConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);



const ComponentConnectedToRedux = createConnect(App)
export default ComponentConnectedToRedux;