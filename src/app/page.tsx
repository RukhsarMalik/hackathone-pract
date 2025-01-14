import Advertisement from "./components/Advertisement";
import BestSelling from "./components/BestSelling";
import Categories from "./components/Category";
import FlashSale from "./components/FlashSale";
import { Hero } from "./components/Hero";
import OurProducts from "./components/Products";




export default function Home() {
  return (
    <div>
      <Hero/>

      <FlashSale/>
      <Categories/>
      <BestSelling/>
      <Advertisement/>
      <OurProducts/>
    </div>
  )
};
