import React, { Component } from 'react';
import Show from './show';

const data2 = [
   {id: 10, img: "../public/img/14.jpg"},
   {id: 6, img: "../public/img/16.jpg"},
   {id: 7, img: "../public/img/16.jpg"},
   {id: 8, img: "../public/img/16.jpg"},
   {id: 9, img:"../public/img/16.jpg"}
]
class DetailFooter extends Component{
   
   render(){
      return(
         <div id="row">
           <div className="col-md-12">
               <div style={{paddingLeft: "25px"}} className="row" id="detailFooter">
                  {
                     data2.map((item) => {
                        return <Show img={item.img} key={item.id}/>
                     })
                  }
                   <div style={{paddingLeft: "510px"}}className="col">
                        <button className="btn btn-product">AÑADIR AL CARRITO</button>
                        <i style={{marginBottom: "25px", paddingLeft: "50px", color: '#C8C6CB', fontSize: "25px"}} className="fas fa-heart"></i>
                  </div>
               </div>
           </div>
         </div>
         
      );
   }
}

export default DetailFooter;