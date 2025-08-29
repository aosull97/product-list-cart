interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: { mobile: string; desktop: string };
}

const OrderConfirmation = ({ cartItems, onNewOrderStarted }: { cartItems: CartItem[], onNewOrderStarted: () => void }) => {
  const totalCartAmount = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-6 pt-8 bg-white rounded-3xl text-rose-900">
      <div className="flex flex-col justify-between gap-2 pb-6 rounded-2xl">
        <img src="/images/icon-order-confirmed.svg" height={40} width={40} />
        <p className="font-bold text-3xl w-2/3 pt-4">Order Confirmed</p>
        <p className="text-rose-500 text-sm">We hope you enjoy your food!</p>
      </div>
      <div className="bg-rose-50 rounded-xl px-4">
        {cartItems.map((item) => (
          <div
            className="flex p-2 py-4 border-b justify-between items-center gap-4"
            key={item.name}
          >
            <div>
              <img
                src={item.image.desktop}
                height={90}
                width={90}
                className="rounded-md"
              />
            </div>
            <div className="w-full text-sm">
              <p className="font-semibold py-1 truncate w-36">{item.name}</p>
              <div className="flex gap-4 items-center">
                <p className="text-red font-semibold">{item.quantity}x</p>
                <p className="text-rose-400">@ £{item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="font-semibold">
              £{(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center p-2 py-5">
          <p>Order Total</p>
          <p className="font-bold text-2xl">£{totalCartAmount}</p>
        </div>
      </div>
      <div className="py-4 pt-6">
        <button
          className="bg-red p-2 py-3 text-white font-semibold text-center w-full rounded-full hover:bg-dark-red"
          onClick={onNewOrderStarted}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
