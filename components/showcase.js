import React, { Component } from 'react';
import Card from './card';

import api  from '../zapato.json';

console.log(api);

class Showcase extends Component{


   render(){
      return(
         <div className="navbar row">
               {
                  api.map((item) => {
                     return <Card key={item.id} foto={`../public/img/${item.foto}`} nombre={item.nombre} precio={item.precio}/>
                  })
               }         
         </div>
      );
   }
}

export default Showcase;