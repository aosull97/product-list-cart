import React, { useState } from "react";

import AddToCartButton from "./AddToCartButton";

const Product = ({
  name,
  mobileImage,
  desktopImage,
  category,
  price,
  onAddToCart
}: {
  name: string;
  mobileImage: string;
  desktopImage: string;
  category: string;
  price: number;
  onAddToCart: () => void;
}) => {
  const formattedPrice = price.toFixed(2);

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

        <AddToCartButton onAddToCart={onAddToCart} />
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
