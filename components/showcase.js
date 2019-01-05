import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider  from 'react-styled-carousel';
import CardShow from './card-show';

import data from '../zapato.json';


class Showcase extends Component {
    render() {
        return (
            <Slider id="carousel" cardsToShow={4} autoSlide={1500} showDots={false} showArrows={false}>
                  {
                     data.map((item) => {
                        return <CardShow carrito={true} key={item.id} foto={`../public/img/${item.foto}`} precio={item.precio} nombre={item.nombre}/>                   
                     })
                  }
            </Slider>
        );
    }
}

export default Showcase;
