import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import ProductCategoryCard from '../products/ProductCategoryCard';
import ApiService from '@/config/ApiConfig';

const CategoryPage = () => {
const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Fetch product from the endpoint
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await ApiService.getAllProducts(); // Replace with the actual endpoint URL
          setProducts(response.products); 
         
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
  return (
    <div>
        <div className='py-4'>
       <p className='text-green-500 text-2xl px-6'>Shop by category</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductCategoryCard key={product._id} product={product} />
        ))}
      </div>
      </div>
    </div>
  )
}

export default CategoryPage