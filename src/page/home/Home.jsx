import React, { useEffect, useState } from 'react'
import Hero from './Hero'


import CategoryPage from './Category'

import ProductList from '../products/ProductList'
import { Shop } from './Shop'


const Home = () => {
  


  return (
    <div className='overflow-x-hidden'>
        <Hero/>
           <Shop/> 
      <CategoryPage/>
       
    </div>
  )
}

export default Home