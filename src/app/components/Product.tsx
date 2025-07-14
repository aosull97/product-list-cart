'use client'

import AddToCartButton from "./AddToCartButton";
import { useState } from "react";

const Product = ({
  name,
  mobileImage,
  desktopImage,
  category,
  price,
  onAddToCart,
  handleIncrement,
  handleDecrement,
  productCount,

}: {
  name: string;
  mobileImage: string;
  desktopImage: string;
  category: string;
  price: number;
  onAddToCart: () => void;
  handleIncrement: () => void;
  handleDecrement: () => void;
  productCount: number;
}) => {

  const formattedPrice = price.toFixed(2);
  const [addToCartButtonClicked, setAddToCartButtonClicked] = useState(false);

  const handleAddToCartButtonClick = () => {
    setAddToCartButtonClicked(true);
    onAddToCart();
  };


  return (
    <div>
      <div className="relative">
        <div className="block md:hidden">
          <img
            src={mobileImage}
            alt={name}
            className="rounded-lg w-full pt-2"
          />
        </div>

        <div className="hidden md:block">
          <img
            src={desktopImage}
            alt={name}
            className="rounded-lg w-full pt-2"
          />
        </div>

        <AddToCartButton 
          onAddToCart={handleAddToCartButtonClick} 
          addToCartButtonClicked={addToCartButtonClicked} 
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          productCount={productCount}
          />
          
      </div>
      <div className="pt-8">
        <p className="text-sm text-rose-500">{category}</p>
        <p className="font-semibold">{name}</p>
        <p className="text-red font-semibold">£{formattedPrice}</p>
      </div>
    </div>
  );
};

export default Product;
