import React, { useState } from "react";
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

import { useParams } from "react-router-dom";
import ApiService from "@/config/ApiConfig";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const CreateOrder = ({ product }) => {
const productId = product?._id;// or pass as a prop
  const [quantity, setQuantity] = useState(1);
  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    streetAddress: "",
    city: "",
    phoneNumber: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("PayPack");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = async () => {
    if (!productId) {
      toast.error("Product ID is missing.");
      return;
    }

    const orderData = {
      quantity,
      shippingAddress,
      paymentMethod: "PayPack",
      paymentChannel: "MOMO",
      paymentMetadata: {},
      paymentVerified: false,
    };

    try {
      setIsSubmitting(true);

      // 1. Create Order
      const createdOrder = await ApiService.createOrder(productId, orderData);
      console.log(" Order Created:", createdOrder);

      const orderId = createdOrder?.order?.orderId;
      if (!orderId) {
        toast.error("Order creation failed: Missing order ID.");
        return;
      }

      // 2. Initiate MoMo PayPack Payment
      const paymentInitiation = await ApiService.initiatePaypackPayment(orderId);
      console.log("Payment Initiated:", paymentInitiation);

      toast.success("Payment initiated. Please confirm on your phone.");

      // 3. Verify Payment (after delay or external callback)
      setTimeout(async () => {
        try {
          const paymentVerification = await ApiService.verifyPaypackPayment();
          console.log(" Payment Verification Result:", paymentVerification);

          if (paymentVerification?.status === "success") {
            toast.success(" Payment Successful! Your order has been confirmed.");
          } else {
            toast.error(" Payment pending or failed. Please try again.");
          }
        } catch (verificationError) {
          console.error(" Payment verification error:", verificationError);
          toast.error("Error verifying payment.");
        }
      }, 8000); // wait 8s before verifying

    } catch (error) {
      console.error(" Error:", error);
      toast.error("Order or payment failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
        <div className="overflow-y-auto pr-2 max-h-[calc(100vh-8rem)]">
          <div className="space-y-6 py-4">
            {/* Product Summary */}
            <Card className="p-4 bg-gray-50">
              <div className="flex items-center space-x-4">
                <img
                  src={product.images?.[0]?.url}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.price} Rwf per unit</p>
                </div>
              </div>
            </Card>

            {/* Quantity */}
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <div className="flex items-center">
                <Button variant="outline" size="sm" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</Button>
                <Input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  min="1"
                  max={product.stock}
                  className="w-20 mx-2 text-center"
                />
                <Button variant="outline" size="sm" onClick={() => quantity < product.stock && setQuantity(quantity + 1)}>+</Button>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="space-y-4">
              <h3 className="font-medium">Shipping Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={shippingAddress.fullName}
                    onChange={handleAddressChange}
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={shippingAddress.phoneNumber}
                    onChange={handleAddressChange}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="streetAddress">Street Address</Label>
                <Textarea
                  id="streetAddress"
                  name="streetAddress"
                  value={shippingAddress.streetAddress}
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
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="PayPack" id="PayPack" />
                  <Label htmlFor="PayPack">Mobile Money (MoMo)</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Submit Button */}
            <Button
              className="w-full bg-green-600 text-white hover:bg-green-700"
              onClick={handleSubmitOrder}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Confirm & Pay with MoMo"}
            </Button>
             <Toaster position="top-right" richColors />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrder;
