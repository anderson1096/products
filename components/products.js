import React, { Component } from 'react';
import CardShow from './card-show';

import data from '../zapato.json';
const finalData = data.slice(0, 4);

class Showcase extends Component {
    render() {
        return (
            <div className="row" id="product-section">
                  {
                     finalData.map((item) => {
                        return <CardShow carrito={false} key={item.id} foto={`../public/img/${item.foto}`} precio={item.precio} nombre={item.nombre}/>                   
                     })
                  }
            </div>
        );
    }
}

export default Showcase;