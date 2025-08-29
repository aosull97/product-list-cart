'use client'

import Product from "./Product";
import { useState } from "react";
import Cart from "./Cart";
import OrderConfirmation from "./OrderConfirmation";

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
  image: { mobile: string; desktop: string };
}

const ProductList = ({ products }: { products: ProductData[] }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false)
  
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
        { name: productToAdd.name, price: productToAdd.price, quantity: 1, image: {mobile: productToAdd.image.mobile, desktop: productToAdd.image.desktop} },
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

  const handleOrderConfirmation = () => {
    setOrderConfirmed(true)
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  const handleNewOrderStarted = () => {
    setCartItems([])
    setOrderConfirmed(false)
  }

  return orderConfirmed ? (
    <div className="relative">
      <div className="brightness-50 backdrop-brightness-50 pb-12 lg:p-6">
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
        <div>
          <Cart
            cartItems={cartItems}
            onRemoveItem={handleRemoveItemFromCart}
            onOrderConfirmed={handleOrderConfirmation}
          />
        </div>
      </div>
      </div>
      <div className="absolute w-full top-16 md:top-48 md:w-2/3 md:left-44 lg:w-1/3 lg:left-1/3 bg-white brightness-100 backdrop-brightness-100 rounded-3xl">
        <OrderConfirmation
        cartItems={cartItems}
        onNewOrderStarted={handleNewOrderStarted}
        />
      </div>
    </div>
  ) : (
    <div className="lg:p-6 relative pb-12">
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
          <Cart
            cartItems={cartItems}
            onRemoveItem={handleRemoveItemFromCart}
            onOrderConfirmed={handleOrderConfirmation}
          />
        </div>
      </div>
    </div>
  );

};

export default ProductList;
