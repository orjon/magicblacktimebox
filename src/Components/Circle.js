import React, { Component } from 'react';
import '../Styles/Circle.scss';

class Circle extends Component {
  render() {
    let { color, text, position, row } = this.props

    text = '';


    return(
      <div className={`CircleGroup ${position}`}>
        <div  className={`Circle ${color} ${row}`}>
          {text}
        </div>
      </div>

    )
  }
}

export default Circle