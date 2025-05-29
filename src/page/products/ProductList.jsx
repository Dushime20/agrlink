import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import ApiService from "@/config/ApiConfig";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all products on initial load
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await ApiService.getAllProducts();
        setProducts(response.products || []);
        setFilteredProducts(response.products || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  // Called when filters are applied in ProductFilter
  const handleFilter = (filtered) => {
    setFilteredProducts(filtered);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <ProductFilter
        
        onFilter={handleFilter}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
