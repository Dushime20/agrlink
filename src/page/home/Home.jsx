import React, { useEffect, useState } from 'react'
import Hero from './Hero'

import ProductCard from '../products/ProductCard'

import CategoryPage from './Category'
import ApiService from '@/config/ApiConfig'


const Home = () => {
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
        <Hero/>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
 
          {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}</div>
         
      <CategoryPage/>
       
    </div>
  )
}

export default Home