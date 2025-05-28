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


     if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div>
        <Hero/>
           <div>
            <p className='text-green-500 text-2xl px-6'>Product</p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
 
          {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}</div>
           </div>
         
      <CategoryPage/>
       
    </div>
  )
}

export default Home