import React, { Component } from 'react';

class Card extends Component{
  
   render(){
      return(
         <div className="card text-center" style={{width: "14rem"}}>
            <img src={this.props.foto} className="card-img-top" />
            <div className="card-body">
               <h5 style={{fontSize: "12px"}} className="card-title">{this.props.nombre}</h5>
               <p style={{color: "#7A4A58"}} className="card-text">{this.props.precio}</p>
               <a href="#" className="btn btn-product-2">AGREGAR AL CARRITO</a>
            </div>
         </div>
      );
   }
}

export default Card;