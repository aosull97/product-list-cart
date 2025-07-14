const Cart = ({ cartCount }: { cartCount: number }) => {
  
  return (
    <div className="mx-6 mt-6 p-4 bg-white rounded-lg">
      <h1 className=" font-bold text-xl text-red">Your Cart ({cartCount})</h1>
      {cartCount === 0 ? 
      
      <div className="flex flex-col gap-4 w-100% px-6 items-center">
      <img src="/images/illustration-empty-cart.svg" alt="empty cart" width={150} height={150} />
      <p className="font-semibold text-rose-500">Your added items will appear here</p>
      </div>
      
      
      : 
      
      <p>Your cart is not empty</p>
      
      }
     
    </div>
  );
};
export default Cart;
