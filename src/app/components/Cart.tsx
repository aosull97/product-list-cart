import { useEffect } from "react";
import { CiCircleRemove } from "react-icons/ci";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

const Cart = ({ cartItems }: { cartItems: CartItem[] }) => {

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
  const totalItemPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)

  const onRemoveItemClick = (cartItem: CartItem) => {
    cartItems.map((item) => {
      if (item.name === cartItem.name) {
           cartItems.splice(cartItems.indexOf(item), 1)
      }
    })
    console.log(cartItems)
    return cartItems
  }


  
  return (
    <div className="mx-6 mt-6 p-4 bg-white rounded-lg w-80% md:w-80 md:-mt-8">
      <h1 className="font-bold text-xl text-red pb-4">
        Your Cart ({totalCartCount})
      </h1>
      {totalCartCount === 0 ? (
        <div className="flex flex-col gap-4 w-100% px-6 items-center">
          <img
            src="/images/illustration-empty-cart.svg"
            alt="empty cart"
            width={75}
            height={75}
          />
          <p className="font-semibold text-rose-500">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className="flex items-left flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item.name}>
              <div>
                <div>
                  <p className="font-semibold pb-1">{item.name}</p>
                </div>
                <div className="flex justify-between pb-1 gap-8">
                  <p className="text-red font-semibold">{item.quantity}x</p>
                  <p className="text-rose-500 italic">
                    @£{item.price.toFixed(2)}
                  </p>
                  <p className="font-semibold text-rose-500">
                    £{totalItemPrice.toFixed(2)}
                  </p>
                  <div className="pl-8">
                    <button 
                    onClick={() => onRemoveItemClick(item)}
                    className="text-rose-500 hover:text-black">
                      <CiCircleRemove className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Cart;
