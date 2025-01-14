import { useState } from 'react';
import Link from 'next/link'; // Import Link from next/link
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai'; // Import React icons
import Image from 'next/image'; // Import Image from next/image

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  priceWithoutDiscount: number;
  discountPercentage: number;
  rating: number;
  ratingCount: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  priceWithoutDiscount,
  discountPercentage,
  rating,
  ratingCount,
  image,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative group">
        <div className="bg-gray-200 w-full h-64 flex items-center justify-center rounded-lg overflow-hidden">
          <Link href={`/product/${id}`}>
            <Image
              src={image}
              alt={name}
              width={140}
              height={150}
              className="object-cover transition-transform transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Heart Icon with White Circle Background */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-2 right-2 p-2 rounded-full ${isFavorite ? 'text-red-500' : 'text-gray-300'} transition-all duration-200 bg-white`}
        >
          <AiOutlineHeart className="text-dark-gray" />
        </button>

        {/* Eye Icon with Circle Background */}
        <div className="absolute top-12 right-2 p-2 bg-white bg-opacity-70 rounded-full transition-all duration-200">
          <AiOutlineEye className="text-dark-gray" />
        </div>
      </div>

      {/* Truncated Product Name */}
      <h3
        className="text-xl font-semibold mt-3 truncate"
        title={name} // Tooltip to show the full name on hover
      >
        {name}
      </h3>

      <div className="mt-3">
        {discountPercentage > 0 ? (
          <div>
            <span className="text-xl font-bold text-red-500">{price} USD</span>
            <span className="text-sm text-gray-500 line-through ml-2">{priceWithoutDiscount} USD</span>
          </div>
        ) : (
          <span className="text-xl font-bold">{price} USD</span>
        )}
      </div>

      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill={index < rating ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 17l-5 3 1-5-4-4 5-.5L12 2l2 4.5 5 .5-4 4 1 5-5-3z"
            />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-500">({ratingCount})</span>
      </div>

      <button className="mt-4 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-200">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
