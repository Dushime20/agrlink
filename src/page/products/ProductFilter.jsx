import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const ProductFilter = ({ categories, onFilter }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(null); // Set initial state to null
  const [price, setPrice] = useState(null);

  const handleFilter = () => {
    onFilter({ name, category, price });
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white shadow rounded-lg">
      {/* Search Input */}
      <Input
        placeholder="Search by name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Category Filter */}
      <Select onValueChange={setCategory}>
        <SelectTrigger className="w-[180px] border border-gray-300 rounded-md px-3 py-2">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Price Filter */}
      <Select onValueChange={setPrice}>
        <SelectTrigger className="w-[180px] border border-gray-300 rounded-md px-3 py-2">
          <SelectValue placeholder="Any Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low to High</SelectItem>
          <SelectItem value="high">High to Low</SelectItem>
        </SelectContent>
      </Select>

      {/* Apply Filters Button */}
      <Button onClick={handleFilter}>Apply Filters</Button>
    </div>
  );
};

export default ProductFilter;
