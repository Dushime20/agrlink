import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ApiService from "@/config/ApiConfig";

const ProductFilter = ({ categories, onFilter }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleFilter = async () => {
    const queryParams = {
      ...(name && { name }),
      ...(category && { category }),
      ...(price && { price }),
    };

    try {
      const response = await ApiService.filterProductByNameAndPriceAndCategory(queryParams);
      if (onFilter) {
        onFilter(response.products || []);
      }
    } catch (err) {
      console.error("Failed to filter products:", err);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white shadow rounded-lg">
      {/* Search by name */}
      <Input
        className="w-full"
        placeholder="Search by name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Category input */}
      <Input
        className="w-[180px]"
        placeholder="Enter category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      {/* Price input */}
      <Input
        className="w-[180px]"
        placeholder="Enter price  (1000)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      {/* Filter button */}
      <Button className="bg-green-800 hover:bg-green-400" onClick={handleFilter}>
        Apply Filters
      </Button>
    </div>
  );
};

export default ProductFilter;
