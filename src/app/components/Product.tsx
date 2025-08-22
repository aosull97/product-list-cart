'use client'

import AddToCartButton from "./AddToCartButton";

const Product = ({
  name,
  mobileImage,
  desktopImage,
  category,
  price,
  quantity,
  onAddToCart,
  onIncrement,
  onDecrement,

}: {
  name: string;
  mobileImage: string;
  desktopImage: string;
  category: string;
  price: number;
  quantity: number;
  onAddToCart: () => void;
  onIncrement: () => void;
  onDecrement: () => void;

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

        <AddToCartButton 
          quantity={quantity}
          onAddToCart={onAddToCart}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          />
          
      </div>
      <div className="pt-8">
        <p className="text-xs text-rose-500">{category}</p>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-red font-semibold">£{formattedPrice}</p>
      </div>
    </div>
  );
};

export default Product;
