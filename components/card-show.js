import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


class CardShow extends Component{
  
   constructor(props){
      super(props); 
   }
   render(){
      let button;
      if(this.props.carrito){
         button = <Button className="btn-product-2">AGREGAR AL CARRITO</Button>
      }else{
         button = ""
      }
      return (
           <Card className="text-center" style={{borderStyle: "none"}}>
             <CardImg  top style={{ maxWidth: "318px", maxHeight:"180px"}} src={this.props.foto} alt="Card image cap" />
             <CardBody>
               <CardTitle style={{ fontSize: "12px"}}>{this.props.nombre}</CardTitle>
               <CardText style={{color: "#7A4A58"}}>${this.props.precio}</CardText>
               {button}
             </CardBody>
           </Card>
       );
   }
}

export default CardShow;