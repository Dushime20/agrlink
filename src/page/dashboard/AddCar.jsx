import React, { useState } from 'react';
import ApiService from '@/config/ApiService';
import { toast } from 'sonner';

const AddCar = () => {
  // State to manage form inputs
  const [car, setCar] = useState({
    name: '',
    availability: '',
    price: '',
    image: null,
    description: '',
    type:''
  });

  // State to manage loading state
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle image file change
  const handleImageChange = (e) => {
    setCar((prevState) => ({
      ...prevState,
      image: e.target.files[0]
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const { name, description, price, availability, image,type } = car;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('Description', description);
    formData.append('Price', price);
    formData.append('availability', availability);
    formData.append('image', image);

    setLoading(true); // Set loading to true when request starts

    try {
        console,log(formData)
      const response = await ApiService.AddCar(formData);

      // Handle successful response (e.g., show a success message)
      toast.success('Car added successfully');
      console.log('Car added successfully', response.data);

      // Optionally reset the form
      setCar({
        name: '',
        availability: '',
        price: '',
        image: null,
        description: '',
        type:''
      });
    } catch (error) {
      // Handle error response
      console.error('Error adding car', error);
      toast.error('Failed to add car');
    } finally {
      setLoading(false); // Set loading to false once request is complete
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-1/2 mx-auto m-3">
      <h2 className="text-xl font-bold mb-4">Add Car</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Car Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={car.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Car Type</label>
           <input
            type="text"
            id="type"
            name="name"
            value={car.type}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
           </div>
        </div>
        <div className="mb-4">
          <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability</label>
          <select
            id="availability"
            name="availability"
            value={car.availability}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select Availability</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={car.price}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Car Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={car.description}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-[#11033b] text-white font-bold rounded-md shadow-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Adding Car...' : 'Add Car'}
        </button>
      </form>
    </div>
  );
};

export default AddCar;
