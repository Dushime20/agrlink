import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import ApiService from "@/config/ApiConfig";
import CreateOrder from "../order/createOrder";



const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await ApiService.getProductById(id);
        setProduct(response.product); // Assumes the backend returns { product: {...} }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch product");
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!product)
    return <div className="text-center text-red-600">Product not found</div>;

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const totalAmount = product.price * quantity;
  const shippingFee = 2.99;
  const grandTotal = totalAmount + shippingFee;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Images Section */}
        <div className="space-y-4">
          <img
            src={product.images?.[mainImage]?.url}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
          <div className="grid grid-cols-4 gap-2">
            {product.images?.map((imgObj, index) => (
              <img
                key={index}
                src={imgObj.url}
                alt={`${product.name} ${index + 1}`}
                className={`w-full h-20 object-cover rounded-md cursor-pointer ${
                  mainImage === index ? "ring-2 ring-green-500" : ""
                }`}
                onClick={() => setMainImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              {product.category}
            </span>
            <span className="text-gray-500">•</span>
            <span
              className={`text-sm ${
                product.stock > 10 ? "text-green-600" : "text-orange-600"
              }`}
            >
              {product.stock} Kg in stock
            </span>
          </div>

          <p className="text-2xl font-semibold text-green-600">
            {product.price}Rwf/Kg
          </p>

          <div className="border-t border-b py-4 my-4">
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col items-start gap-1">
              <div className="flex">
                <span className="w-24 text-gray-500">Seller:</span>
                <span className="font-medium">
                  name: {product.seller.username}
                </span>
              </div>
              <div className="flex">
                <span className="w-24"></span>
                <span className="font-medium">
                  phone: {product.seller.phoneNumber}
                </span>
              </div>
              <div className="flex">
                <span className="w-24"></span>
                <span className="font-medium">
                  email: {product.seller.email}
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <span className="w-24 text-gray-500">Location:</span>
              <span>{product.location}</span>
            </div>
          </div>

            {/* Order Button/Dialog */}
           <CreateOrder product={product} />

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
