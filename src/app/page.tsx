import { promises as fs } from "fs";
import { Red_Hat_Text } from "next/font/google";
import ProductList from "./components/ProductList";

const redHatText = Red_Hat_Text({
  subsets: ["latin-ext"],
  weight: ["400", "600", "700"],
});

export default async function Home() {
  const dataFile = await fs.readFile(
    process.cwd() + "/lib/data/data.json",
    "utf8"
  );
  const products = JSON.parse(dataFile);

  return (
    <div
      className={`${redHatText.className} bg-rose-50 text-base text-rose-900 pb-6`}
    >
      <div>
        <h1 className="pl-6 p-4 font-bold text-3xl">Desserts</h1>
      </div>
      <ProductList products={products} />
    </div>
  );
}
