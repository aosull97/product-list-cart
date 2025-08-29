interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: { mobile: string; desktop: string };
}

interface CartProps {
  cartItems: CartItem[];
  onRemoveItem: (item: CartItem) => void;
  onOrderConfirmed: () => void;
}

const Cart = ({ cartItems, onRemoveItem, onOrderConfirmed }: CartProps) => {
  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
  const totalCartAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)
  
  return (
    <div className="mx-6 mt-12 border-2 p-6 bg-white rounded-lg w-80% md:w-80% lg:-mt-12">
      <h1 className="font-bold text-xl text-red pb-6">
        Your Cart ({totalCartCount})
      </h1>
      {totalCartCount === 0 ? (
        <div className="flex flex-col gap-4 items-center text-center py-8">
          <img
            src="/images/illustration-empty-cart.svg"
            alt="empty cart"
            width={75}
            height={75}
          />
          <p className="font-semibold text-rose-500 text-sm">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className="flex items-left flex-col gap-4 text-sm">
          {cartItems.map((item) => (
            <div className="border-b pb-2" key={item.name}>
              <div>
                <div>
                  <p className="font-semibold pb-1">{item.name}</p>
                </div>
                <div className="flex justify-between gap-2 items-center pb-1">
                  <p className="text-red font-semibold">{item.quantity}x</p>
                  <p className="text-rose-500 px-2">
                    @£{item.price.toFixed(2)}
                  </p>
                  <p className="font-semibold text-rose-500 mr-auto">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div>
                    <button
                      onClick={() => onRemoveItem(item)}
                      className="text-rose-500 hover:text-black"
                    >
                      <img src="/images/icon-remove-item.svg" className="border rounded-full border-rose-400 p-0.5 hover:brightness-50" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center text-rose-900 py-2">
            <p>Order Total</p>
            <p className="font-bold text-2xl">£{totalCartAmount}</p>
          </div>
          <div className="p-4 rounded-md bg-rose-50">
            <div className="flex items-center justify-center">
              <img src="/images/icon-carbon-neutral.svg" alt="Tree icon" />
              <p className="px-2 text-xs text-rose-900">
                This is a <a className="font-semibold">carbon-neutral</a>{" "}
                delivery
              </p>
            </div>
          </div>
          <div>
            <button 
            className="bg-red p-4 text-white font-semibold text-center w-full rounded-full hover:bg-dark-red"
            onClick={onOrderConfirmed}
            >Confirm Order</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
