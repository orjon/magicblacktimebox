import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import Circle from './Circle';

import '../Styles/MagicBlackTimeBox.scss';


class MagicBlackTimeBox extends Component {
  constructor(props){
    super(props);
    this.state= {
      date: new Date(),
      clockFace: [12,5,9,60],
      clickState: 0,
      clickStates: ['black', 'grey', 'time']
      };

    this.clicked = this.clicked.bind(this)
  }


  callMe(){
    setInterval(() => {
      let newDate = new Date()
      let theHour = <Moment format='HH' date={newDate} />
      let theMins = <Moment format='mm' date={newDate} />
      let theSecs = <Moment format='ss' date={newDate} />

      let clockHour = newDate.getHours()
      let clockDecs = Math.floor((newDate.getMinutes())/10)
      let clockMins = (newDate.getMinutes())%10
      let clockSecs = newDate.getSeconds()

      if (clockHour > 12) {
        clockHour = clockHour-12
      }

      this.setState({
        date: newDate,
        theHour: theHour,
        theMins: theMins,
        theSecs: theSecs,
        clockHour: clockHour,
        clockDecs: clockDecs,
        clockMins: clockMins,
        clockSecs: clockSecs
      })
    },1000);
  }

  componentDidMount(){
    this.callMe()
  }

  checkWindowSize(){
    var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // console.log(windowHeight);
    // console.log(windowWidth);
  //   $('#displaySize').text(windowWidth + 'W x ' +  windowHeight + 'H');

   if (windowWidth < windowHeight){
      return 'portrait';
    } else {
       return 'landscape'
    }
  }

  clicked() {
    let { clickState } = this.state;
    clickState= clickState+ 1;
    if (clickState===3) {
      clickState=0
    }
    this.setState({clickState: clickState});
  }

  


  render(){

    let { clockHour, clockDecs, clockMins, clockFace, clickState, clickStates } = this.state



    let orientation = this.checkWindowSize()
    
    var hourCircles = [];
    for (let i = 0; i < clockHour; i++) {
      hourCircles.push(<Circle text={i+1} key={i} row='rowHour' color='hour' position={`pos${i}`}/>);
    }

    var decsCircles = [];
    for (let i = 0; i < clockDecs; i++) {
      decsCircles.push(<Circle text={i+1} key={i} row='rowDecs' color='decs' position={`pos${i*2}`}/>);
    }

    var minsCircles = [];
    for (let i = 0; i < clockMins; i++) {
      minsCircles.push(<Circle text={i+1} key={i} row='rowMins' color='mins' position={`pos${i}`}/>);
    }

    var hourCirclesEmpty = [];
    for (let i = 0; i < (clockFace[0]); i++) {
      hourCirclesEmpty.push(<Circle text={i+1} key={i} row='rowHour' color='empty' position={`pos${i}`}/>);
    }

    var decsCirclesEmpty = [];
    for (let i = 0; i < (clockFace[1]); i++) {
      decsCirclesEmpty.push(<Circle text={i+1} key={i} row='rowDecs' color='empty' position={`pos${i*2}`}/>);
    }

    var minsCirclesEmpty = [];
    for (let i = 0; i < (clockFace[2]); i++) {
      minsCirclesEmpty.push(<Circle text={i+1} key={i} row='rowMins' color='empty' position={`pos${i}`}/>);
    }




    return(
      <div className={`MagicBlackTimeBox ${orientation} ${clickStates[clickState]}`} onClick={this.clicked}>
        <div className={`Time ${clickStates[clickState]}`}>
          {this.state.theHour}:{this.state.theMins}:{this.state.theSecs}
        </div>
        <div className={`ClockFace ${clickStates[clickState]}`}>
          <div className='CircleHours'>{hourCirclesEmpty}</div>
          <div className='CircleDecs'>{decsCirclesEmpty}</div>
          <div className='CircleMins'>{minsCirclesEmpty}</div>
        </div>

        <div className='ClockFace'>
          <div className='CircleHours'>{hourCircles}</div>
          <div className='CircleDecs'>{decsCircles}</div>
          <div className='CircleMins'>{minsCircles}</div>
        </div>

      </div>
    )
  }
}

export default MagicBlackTimeBox;