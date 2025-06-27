'use client'

import Product from "./Product";
import { useState } from "react";
import Cart from "./Cart";

interface ProductData {
  name: string;
  image: { mobile: string; desktop: string };
  category: string;
  price: number;
}

const ProductList = ({ products }: { products: ProductData[] }) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };

  // Function to pass to the IncrementIcon
  const handleIncrement = () => {
    setCartItemCount(cartItemCount + 1);
  };

  // Function to pass to the DecrementIcon
  const handleDecrement = () => {
    if (cartItemCount > 0) {
      setCartItemCount(cartItemCount - 1);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-4 w-100% px-6 md:grid md:grid-col md:grid-cols-3">
        {products.map((product) => (
          <Product
            key={`${product.name}-${product.category}`}
            name={product.name}
            mobileImage={product.image.mobile}
            desktopImage={product.image.desktop}
            category={product.category}
            price={product.price}
            onAddToCart={handleAddToCart}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ))}
      </div>
      <div>
        <Cart cartCount={cartItemCount} />
      </div>
    </div>
  );
};

export default ProductList;
