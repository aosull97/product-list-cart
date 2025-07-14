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
  const [productCount, setProductCount] = useState(0);

  const handleAddToCart = () => {
    setCartItemCount(cartItemCount + 1);
    setProductCount(1)
  };

  // Function to pass to the IncrementIcon
  const handleIncrement = () => {
    setCartItemCount(cartItemCount + 1);
    setProductCount(productCount + 1)
  };

  // Function to pass to the DecrementIcon
  const handleDecrement = () => {
    if (cartItemCount > 0) {
      setCartItemCount(cartItemCount - 1);
      setProductCount(productCount - 1)
    }
  };

  return (
    <div className="lg:p-6">
      <h1 className="pl-6 p-4 font-bold text-3xl">Desserts</h1>
    <div className="lg:flex">
      <div className="flex flex-col items-center gap-4 w-100% px-6 md:grid md:grid-col md:grid-cols-3 lg:w-4/5">
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
            productCount={productCount}
          />
        ))}
      </div>
      <div className="md:-mt-4">
        <Cart cartCount={cartItemCount} />
      </div>
    </div>
    </div>
  );
};

export default ProductList;
