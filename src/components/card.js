import React from "react";

// Managing the Cards on Home Page
// coffee, barista, price, image
const Cards = ({ item, handleClick }) => {
  const { coffee, barista, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{coffee}</p>
        <p>Barista - {barista}</p>
        <p>Price - Rp.{price}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;


