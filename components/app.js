import React, { Component } from 'react';

import Header from './header';
import Nav from './nav';
import Navbar from './navbar';
import Path from './path';
import Detail from './detail';
import DetailFooter from './detail-footer';
import DetailProduct from './detail-product';
import Description from './description';
import LookBanner from './look-banner';
import Showcase from './showcase';

import '../public/css/main.css';
import MontserratFont from '../public/font/Montserrat-Regular.ttf';


class App extends Component{

   render(){
      return(
         <div style={{fontFamily: MontserratFont}}>
            <Header/>
            <Nav />
            <Navbar />
            <Path />
            <Detail />
            <DetailFooter />
            <DetailProduct title="DETALLES DE PRODUCTO"/>
            <Description />
            <DetailProduct title="TECNOLOGÍAS"/>
            <Description />
            <br></br>
            <LookBanner />
            <Showcase />
         </div>
      );
   }
}

export default App;