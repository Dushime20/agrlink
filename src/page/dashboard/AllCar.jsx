import React, { useState } from 'react'
import { Button } from "@/components/ui/button" // Use your Button component
import { toast } from 'sonner' // For displaying notifications
import { Link, useNavigate } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";

const ManageCars = () => {
  const [cars, setCars] = useState([
    { id: 1, name: 'Toyota Camry', model: '2022', available: true },
    { id: 2, name: 'Honda Accord', model: '2021', available: false },
    { id: 3, name: 'BMW X5', model: '2023', available: true },
    { id: 4, name: 'Mercedes-Benz C-Class', model: '2022', available: true },
  ])
  const navigate = useNavigate()

  // Handle edit car
  const handleEdit = (carId) => {
    navigate(`/edit-car/${carId}`) // Redirect to the edit car page
  }

  // Handle delete car
  const handleDelete = (carId) => {
    const updatedCars = cars.filter(car => car.id !== carId) // Remove deleted car from the list
    setCars(updatedCars)
    toast.success("Car deleted successfully")
  }

  return (
    <div className="container mx-auto p-4">
      <div className='flex justify-between mb-1'>
      <h1 className="text-2xl font-bold mb-4">All Cars</h1>
      <Link to={"/dashboard/add-car"}><button className='text-white bg-[#11033b] p-3 rounded-md'><FaPlus /></button></Link>
          </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Car Name</th>
              <th className="px-4 py-2 text-left">Model</th>
              <th className="px-4 py-2 text-left">Availability</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-4 py-2 text-center">No cars available</td>
              </tr>
            ) : (
              cars.map((car) => (
                <tr key={car.id}>
                  <td className="px-4 py-2">{car.name}</td>
                  <td className="px-4 py-2">{car.model}</td>
                  <td className="px-4 py-2">{car.available ? "Available" : "Not Available"}</td>
                  <td className="px-4 py-2">
                    <Button
                      onClick={() => handleEdit(car.id)}
                      className="mr-2 bg-blue-500 text-white rounded px-4 py-2"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(car.id)}
                      className="bg-red-500 text-white rounded px-4 py-2"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageCars
