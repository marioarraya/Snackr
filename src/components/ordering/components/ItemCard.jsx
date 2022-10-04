import React, { useState, useEffect, useContext } from 'react';

export default function ItemCard(props) {
  const { name, price, description } = props;
  return (
    <>
      <div className="item-card">
        <div className="item-name">{name}</div>
        <div className="item-price">{price}</div>
        <div className="item-description">{description}</div>
      </div>
    </>
  )
}