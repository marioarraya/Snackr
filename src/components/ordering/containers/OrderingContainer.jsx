import React, { useState, useEffect, createContext } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import MenuCategories from "../components/MenuCategories.jsx";
import MenuItemContainer from "./MenuItemContainer.jsx";
import {
  Grid,
  Modal,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

export const InfoContext = createContext();

const initialState = [
  {
    name: "Rustic Ciabatta",
    price: "$6",
    description: "Warm, brushed with EVOO & sprinkled with thyme; stone-baked.",
    img_url: "https://i.ibb.co/12JRSTr/rustic-olive-rolls.jpg"
  },
  {
    name: "Nonna's Pie",
    price: "$24",
    description: "Baked at 500 degrees, the way grandma used to make; fresh marinara & aged parmesan.",
    img_url: "https://i.ibb.co/pX5yvvm/Grandma-Pie.jpg"
  },
  {
    name: "Kind Donuts",
    price: "$12",
    description: "A true baker's dozen; decadently assorted, sweet but not cloying; perfect with coffee.",
    img_url: "https://i.ibb.co/GcT9C5g/daylight-assorted.jpg"
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