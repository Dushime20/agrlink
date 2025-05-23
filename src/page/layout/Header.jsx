import { Phone } from 'lucide-react'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

function HomeHeader() {
  return (
    <div className='bg-green-900 text-white flex items-center justify-center gap-4 top-0 sticky h-6'>
           <div className="flex items-center">
                  <Phone size={24} className="text-green-700 flex-shrink-0" />
                  <p className="ml-2">+250 123 456 789</p>
                </div>
                <div className="flex items-center">
                  <FaWhatsapp size={24} className="text-green-700 flex-shrink-0" />
                  <p className="ml-2">+250 123 456 789</p>
                </div>

    </div>
  )
}

export default HomeHeader