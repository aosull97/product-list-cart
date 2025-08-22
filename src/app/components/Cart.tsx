import { CiCircleRemove } from "react-icons/ci";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onRemoveItem: (item: CartItem) => void;
}

const Cart = ({ cartItems, onRemoveItem }: CartProps) => {
  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
  
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
                <div className="flex justify-between gap-4 items-center pb-1">
                  <p className="text-red font-semibold">{item.quantity}x</p>
                  <p className="text-rose-500 italic px-2">
                    @£{item.price.toFixed(2)}
                  </p>
                  <p className="font-semibold text-rose-500 mr-auto">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div>
                    <button 
                    onClick={() => onRemoveItem(item)}
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
