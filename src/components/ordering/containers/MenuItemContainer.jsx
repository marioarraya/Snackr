import React, { useState, useEffect, useContext } from 'react';
import ItemCard from '../components/ItemCard.jsx';
import { InfoContext } from './OrderingContainer.jsx';

export default function MenuItemContainer() {
  const [menuItems, setMenuItems] = useContext(InfoContext);
  const items = [];
  menuItems.forEach((item, i) => {
    items.push(<ItemCard key={`uu${i}`} name={item.name} price={item.price} description={item.description} img_url={item.img_url} />);
  });
  return (
    <div className="menu-items">
      {items}
    </div>
  )
}