import { promises as fs } from "fs";
import Product from "./components/Product";
import { Red_Hat_Text } from "next/font/google";

const redHatText = Red_Hat_Text({
  subsets: ['latin-ext'],
  weight: ['400', '600', '700']
})

export default async function Home() {
  const dataFile = await fs.readFile(
    process.cwd() + "/lib/data/data.json",
    "utf8"
  );
  const products = JSON.parse(dataFile);

  return (
    <div className={`${redHatText.className} bg-rose-50 text-base text-rose-900`}>
      <div>
        <h1 className="pl-6 p-4 font-bold text-3xl">Desserts</h1>
      </div>
      <div className="flex flex-col items-center gap-4 w-100% px-6 md:grid md:grid-col md:grid-cols-3">
        {products.map(
          (product: {
            name: string;
            image: { mobile: string; desktop: string };
            category: string;
            price: number;
          }) => (
            <Product
              key={`${product.name}-${product.category}`}
              name={product.name}
              mobileImage={product.image.mobile}
              desktopImage={product.image.desktop}
              category={product.category}
              price={product.price}
            />
          )
        )}
      </div>
    </div>
  );
}
