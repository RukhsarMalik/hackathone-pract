"use client";
import React, { useState, useEffect } from "react";
import client from "../../sanity/sanity";
import ProductCard from "./ProductCard";
import Link from "next/link";

// Define the Product type here
interface Product {
  _id: string;
  name: string;
  price: number;
  priceWithoutDiscount: number;
  discountPercentage: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  image: {
    asset: {
      url: string;
    };
  };
}

const FlashSale = () => {
  const [products, setProducts] = useState<Product[]>([]); // For storing the products
  const [loading, setLoading] = useState<boolean>(true); // For handling loading state
  const [timeLeft, setTimeLeft] = useState<string>("00:00:00:00"); // For storing remaining time in Days:Hours:Minutes:Seconds

  useEffect(() => {
    // Set end time for the flash sale (3 days from the current time)
    const endTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds

    // Timer logic
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(timerInterval); // Stop the timer if the sale ends
        setTimeLeft("00:00:00:00");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(
          `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
        );
      }
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    // Fetch products with "Flash Sale" tag from Sanity
    const fetchProducts = async () => {
      const query = `*[_type == "product" && "Flash Sale" in tags[]] {
        _id,
        name,
        price,
        priceWithoutDiscount,
        discountPercentage,
        rating,
        ratingCount,
        tags,
        image {
          asset-> {
            url
          }
        }
      }`;

      try {
        const data = await client.fetch(query); // Sanity query to fetch products
        setProducts(data); // Set the products in the state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching products from Sanity:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures the fetch runs only once when the component mounts

  return (
    <div className="px-4 py-8 md:px-16 lg:px-24">
      {/* Flash Sale Small Heading */}
      <div className="flex items-center gap-3 text-center mb-3">
        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded"></div>
        <div className="flex items-center justify-center">
        <h3 className="text-xl font-semibold text-[#DB4444]">Today&apos;s</h3>

        </div>
      </div>

      {/* Flash Sale Header */}
      <div className="flex flex-col lg:flex-row lg:items-center mb-6 gap-4">
        <h2 className="text-4xl font-bold text-gray-800">Flash Sales</h2>

        {/* Timer Display */}
        <div className="text-xl font-semibold text-red-500 flex items-center justify-start lg:justify-center lg:ml-8">
          <div className="flex flex-col items-center mr-4">
            <span className="text-sm text-black">Days</span>
            <span>{timeLeft.split(":")[0]}</span>
          </div>
          <span className="text-2xl mx-2">:</span>
          <div className="flex flex-col items-center mr-4">
            <span className="text-sm text-black">Hours</span>
            <span>{timeLeft.split(":")[1]}</span>
          </div>
          <span className="text-2xl mx-2">:</span>
          <div className="flex flex-col items-center mr-4">
            <span className="text-sm text-black">Minutes</span>
            <span>{timeLeft.split(":")[2]}</span>
          </div>
          <span className="text-2xl mx-2">:</span>
          <div className="flex flex-col items-center">
            <span className="text-sm text-black">Seconds</span>
            <span>{timeLeft.split(":")[3]}</span>
          </div>
        </div>
      </div>

      {/* Loading */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        // Map through the fetched products and render ProductCard component
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id} // Pass the id (_id) here
              name={product.name}
              price={product.price}
              priceWithoutDiscount={product.priceWithoutDiscount}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
              ratingCount={product.ratingCount}
              image={product.image.asset.url} // Ensure to pass the correct image URL
            />
          ))}
        </div>
      )}

      {/* View All Products Button */}
      <div className="mt-6 text-center">
        <Link href="/products">
          <button className="px-6 py-2 bg-[#DB4444] text-white rounded-lg hover:bg-gray-800 transition duration-200">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FlashSale;
