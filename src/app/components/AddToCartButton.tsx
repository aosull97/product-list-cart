import IncrementIcon from "./icons/IncrementIcon";
import DecrementIcon from "./icons/DecrementIcon";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

const AddToCartButton = ({
  onAddToCart,
  addToCartButtonClicked,
  onIncrement,
  onDecrement,
  productCount

  
}: {
  onAddToCart: () => void;
  addToCartButtonClicked: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
  productCount: number;


}) => {
  

  if (addToCartButtonClicked === false || productCount === 0) {
    return (
      <div>
        <button
          onClick={onAddToCart}
          className="flex justify-evenly space-x-2 rounded-3xl px-4 py-3 text-center -bottom-5 right-1/2 transform translate-x-1/2 bg-white absolute border-gray-500 border w-1/2 md:w-4/5 md:space-x-1 hover:border-red hover:text-red "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
          >
            <g fill="#C73B0F" clipPath="url(#a)">
              <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
              <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.333 0h20v20h-20z" />
              </clipPath>
            </defs>
          </svg>
          <p className="font-semibold text-sm">Add to Cart</p>
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <div
         
          className="flex justify-evenly space-x-2 rounded-3xl px-4 py-3 text-center -bottom-5 right-1/2 transform translate-x-1/2 bg-red absolute border-red border md:w-2/3 md:space-x-1 text-white"
          
        >
          <button>
            <DecrementIcon onClick={onDecrement} />
          </button>


          <p className="font-semibold text-sm px-8">{productCount}</p>


          <button>
            <IncrementIcon onClick={onIncrement} />
          </button>
        </div>
      </div>
    );
  }
};

export default AddToCartButton;
