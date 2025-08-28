'use client'

import Product from "./Product";
import { useState } from "react";
import Cart from "./Cart";
import { get } from "http";

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

  const getProductQuantity = (productName: string) => {
    return cartItems.find((item) => item.name === productName)?.quantity ?? 0
  }
  
  const handleAddToCart = (productToAdd: ProductData) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.name === productToAdd.name
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === productToAdd.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevItems,
        { name: productToAdd.name, price: productToAdd.price, quantity: 1 },
      ];
    });
  };

  const handleIncrement = (productToIncrement: ProductData) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === productToIncrement.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (productToDecrement: ProductData) => {
    setCartItems((prevItems) => 
      prevItems.map((item) => 
        item.name === productToDecrement.name && item.quantity > 0
          ? {...item, quantity: item.quantity -1}
        : item
      ).filter((item) => item.quantity !== 0)
    );
  }

  const handleRemoveItemFromCart = (itemToRemove: CartItem) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.name !== itemToRemove.name))
  }


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
            quantity={getProductQuantity(product.name)}
            onAddToCart={() => handleAddToCart(product)}
            onIncrement={() => handleIncrement(product)}
            onDecrement={() => handleDecrement(product)}
          />
        ))}
      </div>
      <div className="md:-mt-4">
        <Cart cartItems={cartItems} onRemoveItem={handleRemoveItemFromCart}/>
      </div>
    </div>
    </div>
  );
};

export default ProductList;
