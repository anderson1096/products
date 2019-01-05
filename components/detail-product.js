import React, { Component } from 'react';

class DetailProduct extends Component{

   render(){
      return(
         <div className="navbar row" id="product-detail" >
            <div className="col-md-12" id="">
               <h5>{this.props.title}</h5>
            </div>
         </div>
      );
   }
}

export default DetailProduct;