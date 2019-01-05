import React, { Component } from 'react';

class Size extends Component{
   constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(e){
      console.log(e.target);
   }

   render(){
      return(
         <div onClick={this.handleClick} className="sizeNumber">
            <p>{this.props.sizeNumber}</p>
         </div>
      );
   }
}

export default Size;