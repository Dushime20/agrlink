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
         src={product.images?.[0]?.url}
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

  

    {/* Product Name */}
    <h2 className="text-lg font-semibold mt-3 text-gray-800 hover:text-green-600 transition-colors duration-300">
      {product.name}
    </h2>

    {/* Price & Details Button */}
    <div className="flex justify-between items-center mt-3">
      <p className="text-green-600 font-bold text-xl">{product.price}Rwf per Kg</p>
      
    </div>

    {/* Add to Cart Button */}
    <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300">
    <Link to={`/product-detail/${product._id}`}>
    View Deatails
    </Link>
    </Button>
  </div>

  );
};

export default ProductCard;
