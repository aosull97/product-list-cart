'use client'

import Image from 'next/image';
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
    quantity === 0 ?
    <div>
      <div className="relative">
        <div className="block md:hidden pt-2">
          <Image
            src={mobileImage}
            alt={name}
            className="rounded-xl w-full"
            width={300}
            height={300}
          />
        </div>

        <div className="hidden md:block pt-2">
          <Image
            src={desktopImage}
            alt={name}
            className="rounded-2xl w-full object-fill"
            width={300}
            height={300}
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
    :
        <div>
      <div className="relative">
        <div className="block md:hidden pt-2">
          <Image
            src={mobileImage}
            alt={name}
            className="rounded-xl w-full border-red border-2"
            width={300}
            height={300}
          />
        </div>

        <div className="hidden md:block pt-2">
          <Image
            src={desktopImage}
            alt={name}
            className="rounded-2xl w-full border-red border-2"
            width={300}
            height={300}
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
