import React from 'react'
import Hero from './Hero'
import Services from './Service'
import AboutUs from './AboutUsPage'
import ContactUs from './ContactUs'
import ProductCard from '../products/ProductCard'
import { Link } from 'react-router-dom'
import Product from './Product'
import CategoryPage from './Category'


const Home = () => {


  return (
    <div>
        <Hero/>
      <Product/>
      <CategoryPage/>
       
    </div>
  )
}

export default Home