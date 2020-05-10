(this.webpackJsonppomodoroclock=this.webpackJsonppomodoroclock||[]).push([[0],{16:function(e,t,n){e.exports=n(32)},21:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),u=n.n(a);n(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(8),c="work",i={counterBreak:7,counterWork:25,counterRemaining:"",typeCounter:c,isRunning:!1,minutes:25,seconds:"00"};var p=n(5),l=n(1),m=n(3),d=n(4),k=n(7),f=n(6),E=(n(27),n(28),function(e){return o.a.createElement("div",{className:"field-group is-grouped"},o.a.createElement("button",{className:"button-control is-info ",onClick:function(){e.play()}},"Play"),o.a.createElement("button",{className:"button-control is-info ",onClick:function(){e.pause()}},"Pause"),o.a.createElement("button",{className:"button-control is-info ",onClick:function(){e.reset()}},"Stop & Reset"))}),h=(n(29),function(e){Object(k.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(m.a)(this,n),(r=t.call(this,e))._add=function(){r.props.updateCounter(r.props.id,"+")},r._substract=function(){r.props.updateCounter(r.props.id,"-")},r}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"counter"},o.a.createElement("h3",null,this.props.title),o.a.createElement("div",{className:"counterValues"},o.a.createElement("button",{className:"button-counter is-success is-light",onClick:this._substract},"-"),o.a.createElement("p",null,this.props.counterValue),o.a.createElement("button",{className:"button-counter is-success is-light",onClick:this._add},"+")))}}]),n}(r.Component));h.defaulProps={initialValue:0,maxValue:60,minValue:1};n(30);function T(e){var t=e.children;return o.a.createElement("h1",null,t)}n(31);function v(e){return o.a.createElement("div",{className:"timerDisplay"},o.a.createElement("h3",null,"Time Remaining for ",e.timerType),o.a.createElement("p",null,e.minutes," : ",e.seconds))}var g=function(e){Object(k.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(m.a)(this,n),(r=t.call(this,e))._updateCounter=function(e,t){if(console.log(r.props),!r.props.isRunning&&("+"===t||"-"===t)&&(e===c||"break"===e)){var n={};r.props.typeCounter===c?e===c?(n.seconds="00",n.counterRemaining="","+"===t&&r.props.counterWork<60?n.counterWork=r.props.counterWork+1:"-"===t&&r.props.counterWork>1&&(n.counterWork=r.props.counterWork-1),n.minutes=n.counterWork?n.counterWork:r.props.counterWork):"break"===e&&("+"===t&&r.props.counterBreak<60?n.counterBreak=r.props.counterBreak+1:"-"===t&&r.props.counterBreak>1&&(n.counterBreak=r.props.counterBreak-1)):"break"===r.props.typeCounter&&("break"===e?(n.seconds="00",n.counterRemaining="","+"===t&&r.props.counterBreak<60?n.counterBreak=r.props.counterBreak+1:"-"===t&&r.props.counterBreak>1&&(n.counterBreak=r.props.counterBreak-1),n.minutes=n.counterBreak?n.counterBreak:r.props.counterBreak):e===c&&("+"===t&&r.props.counterWork<60?n.counterWork=r.props.counterWork+1:"-"===t&&r.props.counterWork>1&&(n.counterWork=r.props.counterWork-1))),n.minutes<10&&(n.minutes="0"+n.minutes),r.props.updateCounter(n)}},r._playTimer=function(){if(!r.intervalId){console.log("inside Play"),r.props.startTimer();var e=r.props.counterRemaining?r.props.counterRemaining:r.props.typeCounter===c?60*r.props.counterWork:60*r.props.counterBreak;r.intervalId=setInterval((function(){e-=1;var t=Math.floor(e/60),n=Math.floor(e-60*t);if(t<10&&(t="0"+t),n<10&&(n="0"+n),e<0){clearInterval(r.intervalId),r.intervalId="",r.audioBeep.play();var o=r.props.typeCounter===c?"break":c,a=r.props.typeCounter===c?r.props.counterBreak:r.props.counterWork;a<10&&(a="0"+a),r.props.changeTimer(o,a),r._playTimer()}else r.props.updateTimer(t,n)}),1e3)}},r._pauseTimer=function(){console.log("Pause",r.intervalId),r.props.isRunning&&(r.props.pauseTimer(r.props.minutes,r.props.seconds),clearInterval(r.intervalId),r.intervalId="")},r._resetTimer=function(){console.log(r.props),clearInterval(r.intervalId),r.intervalId="",r.props.resetTimer()},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(T,{title:"Pomodoro Clock"},"Pomodoro Clock"),o.a.createElement("div",{className:"allCounters"},o.a.createElement(h,{updateCounter:this._updateCounter,id:"break",title:"Break time",counterValue:this.props.counterBreak}),o.a.createElement(h,{updateCounter:this._updateCounter,id:c,title:"Working time",counterValue:this.props.counterWork})),o.a.createElement(v,{minutes:this.props.minutes,seconds:this.props.seconds,timerType:this.props.typeCounter}),o.a.createElement(E,{play:this._playTimer,pause:this._pauseTimer,reset:this._resetTimer}),this.props.minutes<1?o.a.createElement("p",{id:"lastminute"},this.props.minutes," : ",this.props.seconds):o.a.createElement("div",null),o.a.createElement("audio",{id:"beep",preload:"auto",ref:function(t){e.audioBeep=t},src:"https://goo.gl/65cBl1"})))}}]),n}(r.Component),C=Object(p.b)((function(e){return{counterBreak:e.counterBreak,counterWork:e.counterWork,counterRemaining:e.counterRemaining,typeCounter:e.typeCounter,isRunning:e.isRunning,minutes:e.minutes,seconds:e.seconds}}),(function(e){return{increment:function(){return e({type:"INCREMENT"})},decrement:function(){return e({type:"DECREMENT"})},startTimer:function(){return e({type:"START"})},changeTimer:function(t,n){return e(function(e,t){return{type:"CHANGETIMER",typeCounter:e,minutes:t}}(t,n))},updateTimer:function(t,n){return e(function(e,t){return{type:"UPDATETIMER",minutes:e,seconds:t}}(t,n))},pauseTimer:function(t,n){return e(function(e,t){return{type:"PAUSE",minutes:e,seconds:t}}(t,n))},updateCounter:function(t){return e({type:"UPDATECOUNTER",payload:t})},resetTimer:function(){return e({type:"RESET"})}}}))(g),b=n(15),y=n.n(b),R=Object(l.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return{counterTimer:e.counterTimer+1};case"DECREMENT":return{counterTimer:e.counterTimer-1};case"UPDATECOUNTER":return Object.assign({},e,t.payload);case"CHANGETIMER":return Object.assign({},e,{typeCounter:t.typeCounter,counterRemaining:"",minutes:t.minutes});case"UPDATETIMER":return Object(s.a)({},e,{minutes:t.minutes,seconds:t.seconds});case"START":return Object(s.a)({},e,{isRunning:!0});case"PAUSE":return Object(s.a)({},e,{isRunning:!1,counterRemaining:60*parseInt(t.minutes)+parseInt(t.seconds)});case"RESET":return i;default:return e}}),Object(l.a)(y.a));u.a.render(o.a.createElement(p.a,{store:R},o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.cd7cb52c.chunk.js.map