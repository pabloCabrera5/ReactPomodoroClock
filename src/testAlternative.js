// initialize the variable
counterActual: STARTMINUTES
//inside the update counter function 

// The clock is in the work timmer
if (this.state.counterActual === this.state.counterWork) {
    // we receive an event from the work counter
    if (id === WORKCOUNTER) {
        state.seconds = '00';
        state.counterRemaining = '';
        if (operation === '+' && this.state.counterWork < MAX) {
            state.counterWork = this.state.counterWork + 1;
            state.minutes = state.counterWork;
            state.counterActual = state.counterWork;
        } else if (operation === '-' && this.state.counterWork > MIN) {
            state.counterWork = this.state.counterWork - 1;
            state.minutes = state.counterWork;
            state.counterActual = state.counterWork;
        }
    }
    else if (id === BREAKCOUNTER) {
        if (operation === '+' && this.state.counterBreak < MAX) {
            state.counterBreak = this.state.counterBreak + 1;
        } else if (operation === '-' && this.state.counterBreak > MIN) {
            state.counterBreak = this.state.counterBreak - 1;
        }

    }
}
// the clock is in the break counter
else if (this.state.counterActual === this.state.counterBreak) {
    // we receive an event from the break counter
    if (id === BREAKCOUNTER) {
        state.seconds = '00';
        state.counterRemaining = '';
        if (operation === '+' && this.state.counterBreak < MAX) {
            state.counterBreak = this.state.counterBreak + 1;
            state.minutes = state.counterBreak;
            state.counterActual = state.counterBreak;
        } else if (operation === '-' && this.state.counterBreak > MIN) {
            state.counterBreak = this.state.counterBreak - 1;
            state.minutes = state.counterBreak;
            state.counterActual = state.counterBreak;
        }
    }
    else if (id === WORKCOUNTER) {
        if (operation === '+' && this.state.counterWork < MAX) {
            state.counterWork = this.state.counterWork + 1;
        } else if (operation === '-' && this.state.counterWork > MIN) {
            state.counterWork = this.state.counterWork - 1;
        }
    }
}



//inside the _play function 
let distance = this.state.counterRemaining ? this.state.counterRemaining : this.state.counterActual * 60;

//inside the setstate when the interval finish 
counterActual: this.state.counterActual === this.state.counterBreak ? this.state.counterWork : this.state.counterBreak;