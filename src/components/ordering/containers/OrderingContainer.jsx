import React, { useState, useEffect, createContext } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import MenuCategories from "../components/MenuCategories.jsx";
import MenuItemContainer from "./MenuItemContainer.jsx";

export const InfoContext = createContext();

const initialState = [
  {
    name: "Rustic Ciabatta",
    price: "$6",
    description: "Warm, brushed with EVOO & sprinkled with thyme; stone-baked."
  },
  {
    name: "Nonna's Pie",
    price: "$24",
    description: "Baked at 500 degrees, the way grandma used to make; fresh marinara & aged parmesan."
  },
  {
    name: "Kind Donuts",
    price: "$12",
    description: "A true baker's dozen; decadently assorted, sweet but not cloying; perfect with coffee."
  }
]



function OrderingContainer() {
  const [menuItems, setMenuItems] = useState(initialState);
  return (
    <InfoContext.Provider value={[menuItems, setMenuItems]}>
      <>
        <div className="grid-container">
          <Header />
          <div className="menu-container">
            <MenuCategories />
            <MenuItemContainer />
          </div>
          <Footer />
        </div>
      </>
    </InfoContext.Provider>
  )
}

export default OrderingContainer;