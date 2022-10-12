import React, { useState, useEffect, useContext } from 'react';

export default function ItemCard({ name, price, description, img_url }) {
  return (
    <>
      <div className="item-card">
        <div className="item-image" style={{ backgroundImage: `url(${img_url})` }}></div>
        <div className="item-name">{name}</div>
        <div className="item-price">{price}</div>
        <div className="item-description">{description}</div>
      </div>
    </>
  )
}