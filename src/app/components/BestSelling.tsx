"use client";
import React, { useState, useEffect } from "react";
import client from "../../sanity/sanity";
import ProductCard from "./ProductCard";
import Link from "next/link";

// Define a type for the product data
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

const BestSelling = () => {
  const [products, setProducts] = useState<Product[]>([]); // Use the Product type
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product" && "Best Selling" in tags[]] {
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
        const data = await client.fetch(query);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products from Sanity:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="px-4 py-8 md:px-16 lg:px-24">
      {/* Section Heading */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 text-center mb-3">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded"></div>
            <div className="flex items-center justify-center">
              <h3 className="text-xl font-semibold text-[#DB4444]">This Month</h3>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Best Selling Products
          </h2>
        </div>

        {/* View All Button */}
        <Link href="/products">
          <button className="px-6 py-2 bg-[#DB4444] text-white rounded-lg hover:bg-gray-800 transition duration-200">
            View All
          </button>
        </Link>
      </div>

      {/* Loading */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        // Map through the fetched products and render ProductCard components
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
    </div>
  );
};

export default BestSelling;
