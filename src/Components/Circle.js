import React, { Component } from 'react';
import '../Styles/Circle.scss';

class Circle extends Component {
  render() {
    let { color, text, position, row } = this.props


    return(
      <div className={`CircleGroup ${position}`}>
        <div  className={`Circle1 ${color} ${row}`}>
          {/* {text} */}
        </div>
        {/* <div  className={`Circle2 ${row}`}>
        </div> */}
      </div>

    )
  }
}

export default Circle