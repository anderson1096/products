import React, { Component } from 'react';

class Show extends Component{
  
   render(){
      return(
         <img id="show-img" src={this.props.img}></img>
      );
   }
}

export default Show;