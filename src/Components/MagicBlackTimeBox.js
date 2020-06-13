import React, { Component } from 'react';
import Circle from './Circle';
import '../Styles/MagicBlackTimeBox.scss';
import Moment from 'react-moment';
import 'moment-timezone';

class MagicBlackTimeBox extends Component {
  constructor(props){
    super(props);
    this.state= {
      date: new Date(),
      theHour: 0,
      theMins: 0,
      theSecs: 0,
      clockFace: [12,5,9],
      clockValues: [0,0,0]
      };
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
      })
    },1000);
  }

  componentDidMount(){
    this.callMe()
  }

  


  render(){

    let { clockHour, clockDecs, clockMins } = this.state

    
    var hourCircles = [];
    for (let i = 0; i < clockHour; i++) {
      hourCircles.push(<Circle text={this.state.clockHour} row='rowHour' color='blue' position={`pos${i}`}/>);
    }

    var decsCircles = [];
    for (let i = 0; i < clockDecs; i++) {
      decsCircles.push(<Circle text={this.state.clockDecs} row='rowDecs' color='red' position={`pos${i}`}/>);
    }

    var minsCircles = [];
    for (let i = 0; i < clockMins; i++) {
      minsCircles.push(<Circle text={this.state.clockMins} row='rowMins' color='green' position={`pos${i}`}/>);
    }




    return(
      <div className='MagicBlackTimeBox'>
        <div className='Time'>
          {this.state.theHour}:{this.state.theMins}:{this.state.theSecs}
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