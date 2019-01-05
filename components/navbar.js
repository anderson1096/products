import React, { Component } from 'react';


class Navbar extends Component{ 

   render(){
      return(
         <div>
            <div className="navbar row" id="navbar">
               <div id="logo-section" className="col-md-7">
                  <img id="logo-img" src="../public/img/logo1.jpg"></img>
                  <img id="logo-brand" src="../public/img/logo2.jpg"></img>     
               </div>
               <div id="form-section" className="col-md-5">
                  <form className="form-inline input-group">
                     <input type="text" className="" placeholder="  BUSCAR" />
                     <span className="input-group-text">
                        <i className="fas fa-angle-right"></i> 
                     </span> 
                  </form>
                  <br />
                  <h5 id="form-msg">ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000</h5> 
               </div>
            </div>
      
            <nav className="navbar navbar-expand-lg navbar-light">

               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                  <ul id="nav-links-left" className="navbar-nav mr-auto">
                     <li className="nav-item">
                        <a className="nav-link" href="#">HOMBRE</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">MUJER</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">BLOG</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">HISTORIA</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">TIENDAS</a>
                     </li>
                  </ul>
                  <ul className="navbar-nav">
                     <li id="cart" className="nav-item">
                        <a className="nav-link"><i className="fas fa-shopping-bag"> </i> CARRITO 0 </a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      );
   }
}

export default Navbar;