import React, { Component } from 'react';
import './App.css';

class contohprops extends React.Component {
  render(){
    return(
      <div>
        <small>{this.props.pengirim}:</small>
        <p>{this.props.content}</p>
        <hr/>
      </div>
    );
  }
}

export default contohprops;