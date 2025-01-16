import React from "react";

const Product = ({
  name,
  mobileImage,
  desktopImage,
  category,
  price,
}: {
  name: string;
  mobileImage: string;
  desktopImage: string;
  category: string;
  price: number;
}) => {
  const formattedPrice = price.toFixed(2);

  return (
    <div>
      <div className="relative">

      <div className="block md:hidden"><img src={mobileImage} alt={name} className="rounded-lg w-full pt-2" /></div>

        <div className="hidden md:block">
        <img
          src={desktopImage}
          alt={name}
          className="rounded-lg w-full pt-2"
        />
        </div>
        
       
        
        <button className="flex justify-evenly space-x-2 rounded-2xl px-4 py-2 text-center -bottom-4 right-1/2 transform translate-x-1/2 bg-white absolute border-gray-500 border md:w-2/3 md:space-x-1">
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
          <p className="font-semibold text-sm ">Add to Cart</p>
        </button>
      </div>
      <div className="pt-8">
        <p className="text-sm text-rose-500">{category}</p>
        <p className="font-semibold">{name}</p>
        <p className="text-red font-semibold">£{formattedPrice}</p>
      </div>
    </div>
  );
};

export default Product;
