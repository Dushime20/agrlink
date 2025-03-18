import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <div className="flex justify-between items-center">
        <p className="text-green-600 font-bold">${product.price}</p>
        <Link to={`/product-detail/${product.id}`}>
          <Eye className="text-gray-600 hover:text-black cursor-pointer" />
        </Link>
      </div>
      <Button className="mt-2 w-full">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
