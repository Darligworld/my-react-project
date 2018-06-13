import React from 'react';
import Nav from './Header/Nav'
import DemoCarousel from './Header/Slide'

class Header extends React.Component {
  render() {
    return(
      <div>
       <Nav />
       <div className="container">
       <div className=" row">
        <div class="col-sm-12 col-md-6">
       <DemoCarousel />
       </div>
       <div class="col-sm-12 col-md-6">
        <div id='chinedu'>
        <h1>Welcome to DARLINGTON agro online store</h1>
        <p>we provide in adition to our services advices on any agricultural sectors, be sure to get first hand informations on the recent innovations in agricultural world, once again you are welcome and go ahead to chose from our numerious options...</p>
        </div>
       </div>
       </div>
       </div>
      </div>
    );
  }
}

export default Header;
