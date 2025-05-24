import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import ApiService from "@/config/ApiConfig";



const ProductList = () => {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Fetch users from the endpoint
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await ApiService.getAllProducts(); // Replace with the actual endpoint URL
          setProducts(response.products); 
          setFilteredProducts(response.products);// Access the getUsers array in the response
          setLoading(false);
          console.log("response", response);
          
        } catch (err) {
          console.log(error);
          setError("Failed to fetch product");
        } finally {
          setLoading(false);
        }
      };
  
      fetchProduct();
    }, []);

  const [filteredProducts, setFilteredProducts] = useState(products);



  const handleFilter = (filters) => {
    let filtered = products;

    if (filters.name) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }
    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category);
    }
    if (filters.price === "low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (filters.price === "high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    // If no filters are applied, show all products
    setFilteredProducts(filtered.length > 0 ? filtered : products);
  };

   if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ProductFilter categories={["Fruits", "Vegetables", "Grains"]} onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
