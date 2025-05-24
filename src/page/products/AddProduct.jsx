import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ApiService from "@/config/ApiConfig";
import { Toaster } from "@/components/ui/sonner";

const AddProductDialog = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    location: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // For resetting file input

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const { name, description, price, category, stock, location, image } = formData;

    const missingFields = [];
    if (!name) missingFields.push("Product Name");
    if (!description) missingFields.push("Description");
    if (!price) missingFields.push("Price");
    if (!category) missingFields.push("Category");
    if (!stock) missingFields.push("Quantity");
    if (!location) missingFields.push("Location");
    if (!image) missingFields.push("Image");

  if (missingFields.length > 0) {
  toast.error(`Please fill in: ${missingFields.join(", ")}`);
  return false;
}


    if (isNaN(price) || Number(price) <= 0) {
      toast.error("Price must be a valid number greater than 0.");
      return false;
    }

    if (isNaN(stock) || Number(stock) < 0) {
      toast.error("Quantity must be 0 or more.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);

    if (!validateForm()) {
      console.log("Form validation failed.");
      return;
    }

    console.log("Validation passed. Proceeding to submit...");
    setLoading(true);
    try {
      const productData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        productData.append(key, value);
      });

      const response = await ApiService.Addproduct(productData);
      toast.success("Product added successfully");
      
      console.log("added product",response);

      if (onAddProduct) {
        onAddProduct(response);
      }

      // Reset form
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        location: "",
        image: null,
      });
      setFileInputKey(Date.now()); // Reset file input visually
    } catch (error) {
      toast.error("Adding product failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-500 text-white">Add Product</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" value={formData.category} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" value={formData.description} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input id="price" name="price" type="number" value={formData.price} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="stock">Quantity</Label>
            <Input id="stock" name="stock" type="number" value={formData.stock} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" value={formData.location} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="image">Product Image</Label>
            <Input
              key={fileInputKey} // Forces re-render to reset file input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full bg-green-500 text-white" disabled={loading}>
            {loading ? "Adding..." : "Submit"}
          </Button>
          <Toaster position="bottom-right" richColors />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductDialog;
