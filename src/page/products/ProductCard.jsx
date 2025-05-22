import { Button } from "@/components/ui/button";
import { Eye, Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white relative">
    {/* Product Image */}
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
      />
      {/* Like/Unlike Button */}
      <button
        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        onClick={() => setLiked(!liked)}
      >
        <Heart
          size={22}
          className={liked ? "text-red-500 fill-red-500" : "text-gray-400"}
        />
      </button>
    </div>

    {/* Product Category */}
    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-lg uppercase font-semibold shadow">
      {product.category}
    </span>

    {/* Product Name */}
    <h2 className="text-lg font-semibold mt-3 text-gray-800 hover:text-green-600 transition-colors duration-300">
      {product.name}
    </h2>

    {/* Rating Section */}
    <div className="flex items-center mt-2">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < product.rating ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-600">({product.rating} Reviews)</span>
    </div>

    {/* Price & Details Button */}
    <div className="flex justify-between items-center mt-3">
      <p className="text-green-600 font-bold text-xl">${product.price} per Kg</p>
      
    </div>

    {/* Add to Cart Button */}
    <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300">
    <Link to={`/product-detail/${product.id}`}>
    View Deatails
    </Link>
    </Button>
  </div>

  );
};

export default ProductCard;
