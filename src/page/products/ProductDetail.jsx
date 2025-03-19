import { useParams } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const mockProducts = [
  { 
    id: 1, 
    name: "Organic Tomatoes", 
    description: "Fresh locally grown organic tomatoes, perfect for salads and cooking.",
    price: 5, 
    category: "Vegetables", 
    stock: 25,
    location: "Green Valley Farm, CA",
    sellerName: "John's Organic Farm",
    images: [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTeJa3Rtp_DIv-wrOWaB7wJU6fK0fd-tGgYs7IxuaAqE9HXVxF7cfkFu02TP8kLsT9sT3aBQLxS5Cfm778L-qLbGtDcLN8pqLQa3C2D0G8",
      "https://example.com/tomatoes-2.jpg",
      "https://example.com/tomatoes-3.jpg"
    ] 
  },
  { 
    id: 3, 
    name: "Green Spinach", 
    description: "Nutrient-rich organic spinach, harvested at peak freshness.",
    price: 4, 
    category: "Vegetables", 
    stock: 15,
    location: "Riverside Farms, OR",
    sellerName: "Riverside Organic Co-op",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLs7eAWgSXg1AB3dmgsvIOqFXQyfJ9VSNbCQ&s",
      "https://example.com/spinach-2.jpg"
    ] 
  }
];

// Payment method configuration with image paths
const paymentMethods = [
  {
    id: "MOMO",
    name: "MOMO",
    imagePath: "/image/momo.jpeg"
  },
  {
    id: "AIRTEL_MONEY",
    name: "AIRTEL MONEY",
    imagePath: "/image/aitelMoney.jpeg"
  },
  {
    id: "VISA_CARD",
    name: "VISA CARD",
    imagePath: "/image/visa.jpeg"
  },
  {
    id: "PAYPAL",
    name: "PAYPAL",
    imagePath: "/image/paypal.jpeg"
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("MOMO");
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    phone: ""
  });

  if (!product) return <p className="text-center text-red-600">Product not found</p>;

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress(prev => ({ ...prev, [name]: value }));
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
            src={product.images[mainImage]} 
            alt={product.name} 
            className="w-full h-80 object-cover rounded-lg shadow-md" 
          />
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`${product.name} ${index + 1}`} 
                className={`w-full h-20 object-cover rounded-md cursor-pointer ${mainImage === index ? 'ring-2 ring-green-500' : ''}`} 
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
            <span className={`text-sm ${product.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
              {product.stock} in stock
            </span>
          </div>
          
          <p className="text-2xl font-semibold text-green-600">${product.price}</p>
          
          <div className="border-t border-b py-4 my-4">
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="w-24 text-gray-500">Seller:</span>
              <span className="font-medium">{product.sellerName}</span>
            </div>
            <div className="flex items-start">
              <span className="w-24 text-gray-500">Location:</span>
              <span>{product.location}</span>
            </div>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium">
                Order Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md md:max-w-lg max-h-screen">
              <DialogHeader className="sticky top-0 z-10 pb-4">
                <DialogTitle>Complete Your Order</DialogTitle>
              </DialogHeader>
              
              {/* Scrollable content */}
              <div className="overflow-y-auto pr-2 max-h-[calc(100vh-8rem)]">
                <div className="space-y-6 py-4">
                  {/* Product Summary */}
                  <Card className="p-4 bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={product.images[0]} 
                        alt={product.name} 
                        className="w-16 h-16 object-cover rounded-md" 
                      />
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-500">${product.price} per unit</p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Quantity */}
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <div className="flex items-center">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                        className="px-3"
                      >
                        -
                      </Button>
                      <Input 
                        id="quantity" 
                        type="number" 
                        value={quantity} 
                        onChange={handleQuantityChange}
                        min="1" 
                        max={product.stock}
                        className="w-20 mx-2 text-center"
                      />
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
                        className="px-3"
                      >
                        +
                      </Button>
                      <span className="ml-2 text-sm text-gray-500">
                        (Max: {product.stock})
                      </span>
                    </div>
                  </div>
                  
                  {/* Shipping Address */}
                  <div className="space-y-4">
                    <h3 className="font-medium">Shipping Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={shippingAddress.name} 
                          onChange={handleAddressChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={shippingAddress.phone} 
                          onChange={handleAddressChange}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Textarea 
                        id="address" 
                        name="address" 
                        value={shippingAddress.address} 
                        onChange={handleAddressChange}
                        rows={2}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        name="city" 
                        value={shippingAddress.city} 
                        onChange={handleAddressChange}
                      />
                    </div>
                  </div>
                  
                  {/* Payment Method */}
                  <div className="space-y-4">
                    <h3 className="font-medium">Payment Method</h3>
                    <RadioGroup 
                      value={paymentMethod} 
                      onValueChange={setPaymentMethod}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={method.id} id={method.id} />
                          <Label htmlFor={method.id} className="flex items-center cursor-pointer">
                            <img 
                              src={method.imagePath} 
                              alt={method.name} 
                              className="h-6 w-auto mr-2 object-contain" 
                            />
                            {method.name}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  {/* Order Summary */}
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping Fee</span>
                      <span>${shippingFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>Total</span>
                      <span>${grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Fixed bottom action button */}
              <div className="bottom-0 bg-white  pb-2 z-10">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium">
                  Complete Order
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;