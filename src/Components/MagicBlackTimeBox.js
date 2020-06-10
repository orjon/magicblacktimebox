import React, { Component } from 'react';
import '../Styles/MagicBlackTimeBox.scss';
import Moment from 'react-moment';
import 'moment-timezone';

class MagicBlackTimeBox extends Component {
  constructor(props){
    super(props);
    this.state= {
      date: new Date(),
      hour: 0,
      mins: 0,
      secs: 0,
      };
  }


  callMe(){
    setInterval(() => {
      let newDate = new Date()
      let hour = <Moment format='hh' date={newDate} />
      let mins = <Moment format='mm' date={newDate} />
      let secs = <Moment format='ss' date={newDate} />
      this.setState({
        date: newDate,
        hour: hour,
        mins: mins,
        secs: secs
      })
    },1000);
  }

  componentDidMount(){
    this.callMe()
  }







  render(){

    const times = x => f => {
      if (x > 0) {
        f()
        times (x - 1) (f)
      }
    }


    // times (3) (() => <div className='Circle'></div>)

    let circlesHours = times (3) (() => {return (
      <div className='Circle'></div>)
    })

    return(
      <div className='MagicBlackTimeBox'>
        <div className='ClockFace'>
          {this.state.hour}:{this.state.mins}:{this.state.secs}
        </div>
        {circlesHours}
        <div className='Circle'></div>
      </div>
    )
  }
}

export default MagicBlackTimeBox;