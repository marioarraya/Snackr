import React, { useState, useEffect, useContext } from "react";
import Navigation from './Navigation.jsx';
import RestaurantHeader from './RestaurantHeader.jsx';

function Header() {
  return (
    <>
      <div className="header">
        <Navigation />
      </div>
      <div className="header-restaurant">
        <RestaurantHeader />
      </div>

    </>
  )
}

export default Header;