import React, { Component } from 'react';
import Size from './size';

const data1 = [
   {id: 1, val: 5},
   {id: 2, val: 5.5},
   {id: 3, val: 6},
   {id: 4, val: 6.5},
   {id: 5, val: 7}
]

const data2 = [
   {id: 10, val: 7.5},
   {id: 6, val: 8},
   {id: 7, val: 8.5},
   {id: 8, val: 9},
   {id: 9, val: 9.5}
]

class Detail extends Component {
   render(){
      return(
         <div className="row" id="detail">
            <div id="detail-img-div" className="col-md-5">
               <img id="detail-img" src="../public/img/7.jpg"></img>
            </div>
            <div id="detail-size" className="col-md-4">
               <h4 style={{marginBottom: "0px", fontFamily: "Nashvill", fontWeight: "bold"}}>ZAPATILLA HOMBRE PELIKAN</h4>
               <p style={{marginBottom: "0px", color: "#7A4A58", fontSize: "22px", fontWeight: "bold"}}>$00.000</p>
               <p style={{color: "gray", paddingTop: "0px", fontSize: "12px", fontWeight: "lighter"}}>Cod. de producto zap-005</p>
               <br />
               <p>COLOR</p>
               <div id="color-img-div">
                  <img id="color-img" src="../public/img/7.jpg"></img>
               </div>
               <br />
               <p>TALLA</p>
               <div className="row sizeContainer">
                  {
                     data1.map((item) => {
                        return <Size className="col" key={item.id} sizeNumber={item.val}/>
                     })
                  }
               </div>
               <div className="row sizeContainer">
                  {
                     data2.map((item) => {
                        return <Size className="col" key={item.id} sizeNumber={item.val}/>
                     })
                  }
               </div>
               <br></br>
               <a style={{color: "black", textDecorationLine: "underline"}}href="#">GUÍA DE TALLAS</a>
            </div>
         </div>
      );
   }
}

export default Detail;