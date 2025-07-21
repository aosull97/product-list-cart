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

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

const ProductList = ({ products }: { products: ProductData[] }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const handleAddToCart = (productToAdd: ProductData) => {
    setCartItems((currentCartItems) => {

      // Check if item has already been added to the cart
      const existingItem = currentCartItems.find((item) => 
        item.name === productToAdd.name);

      // If the item has already been added to the cart, just increase it's quantity by 1
      if(existingItem) {
        return currentCartItems.map(item => 
          item.name === productToAdd.name ? {...item, quantity: item.quantity + 1} : item
        )

      // Otherwise, add the product to the cart with a quantity of 1  
      } else {
        return [...currentCartItems, {name: productToAdd.name, price: productToAdd.price, quantity: 1}]
      }
    })

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
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      <div className="md:-mt-4">
        <Cart cartItems={cartItems} />
      </div>
    </div>
    </div>
  );
};

export default ProductList;
