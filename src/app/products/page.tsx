"use client";
import React, { useState, useEffect } from "react";
import client from "../../sanity/sanity";
import ProductCard from "../components/ProductCard";

// Define the Product type
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

const ProductsPage = () => {
  // Use the Product type instead of any[]
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const query = `*[_type == "product"] | order(_createdAt desc) {
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
        setProducts(data); // Set the products fetched from Sanity
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error("Error fetching products from Sanity:", error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchAllProducts(); // Call the function to fetch products
  }, []);

  return (
    <div className="px-4 py-8 md:px-16 lg:px-24">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        All Products
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              name={product.name}
              price={product.price}
              priceWithoutDiscount={product.priceWithoutDiscount}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
              ratingCount={product.ratingCount}
              image={product.image.asset.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
