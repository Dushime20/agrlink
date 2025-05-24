import React, { useEffect, useState } from "react";
import ApiService from "@/config/ApiConfig";
import { Button } from "@/components/ui/button"; // Import your Button component if you have one
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const UserSettings = () => {
  // State to store users
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from the endpoint
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await ApiService.getAllUser(); // Replace with the actual endpoint URL
        setUsers(response.findUser); // Access the getUsers array in the response
        setLoading(false);
        console.log("response", response);
        console.log("usersssss", users);
      } catch (err) {
        console.log(error);
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    // Handle edit action
    console.log("Edit user with ID:", userId);
    // Implement edit logic here
  };

  const handleDelete = (userId) => {
    // Handle delete action
    console.log("Delete user with ID:", userId);
    // Implement delete logic here
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-green-900">
    
       <div className='flex justify-between mb-1'>
      <h1 className="text-2xl font-bold mb-4">All Order</h1>
      <Link to={"/dashboard/add-car"}><button className='text-white bg-green-900 p-3 rounded-md'><FaPlus /></button></Link>
          </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
  <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className=" border">No</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Role</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Address</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                {/* update to be a numberstarting from 1 */}
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="px-3 border">{user.username}</td>
                <td className="px-3 border">{user.email}</td>
                <td className="px-3 border">{user.role}</td>
                <td className="px-3 border">{user.phoneNumber}</td>
                <td className="px-3 border">{user.address}</td>
                <td className="px-4 py-2 flex gap-4">
                  <button
                    onClick={() => handleEdit(car._id)}
                    className=" text-green-900 "
                  >
                    <MdEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(car.id)}
                    className="text-red-500 m-4"
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserSettings;
