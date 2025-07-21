interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

const Cart = ({ cartItems }: { cartItems: CartItem[] }) => {

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
  const totalItemPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)

  
  return (
    <div className="mx-6 mt-6 p-4 bg-white rounded-lg">
      <h1 className=" font-bold text-xl text-red">Your Cart ({totalCartCount})</h1>
      {totalCartCount === 0 ? 
      
      <div className="flex flex-col gap-4 w-100% px-6 items-center">
      <img src="/images/illustration-empty-cart.svg" alt="empty cart" width={75} height={75} />
      <p className="font-semibold text-rose-500">Your added items will appear here</p>
      </div>
      
      
      : 
      
     <div>
      {cartItems.map((item) => (
        <div key={item.name}>
          <div>
            <div>
              <p>{item.name}</p>
            </div>
            <div className="flex justify-between">
              <p>{item.quantity}x</p>
              <p>£{item.price.toFixed(2)}</p>
              <p>£{totalItemPrice.toFixed(2)}</p>
            </div>
            
            
            
          </div>
        </div>
      ))}
     </div>
      
      
      }
     
    </div>
  );
};
export default Cart;
