import React, { useEffect, useState } from 'react';
import ApiService from '@/config/ApiService';
import { Button } from '@/components/ui/button'; // Import your Button component if you have one

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
        setUsers(response.getUsers); // Access the getUsers array in the response
        setLoading(false);
        console.log("response",response)
        console.log("usersssss",users)
      } catch (err) {
        console.log(error)
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    // Handle edit action
    console.log('Edit user with ID:', userId);
    // Implement edit logic here
  };

  const handleDelete = (userId) => {
    // Handle delete action
    console.log('Delete user with ID:', userId);
    // Implement delete logic here
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">

        <div>hello</div>
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">User ID</th>
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
              <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-2 px-4 text-center">{user.id}</td>
                <td className="py-2 px-4">{user.Name}</td>
                <td className="py-2 px-4">{user.Email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">{user.PhoneNumber}</td>
                <td className="py-2 px-4">{user.Address}</td>
                <td className="py-2 px-4">
                  <Button
                    onClick={() => handleEdit(user.id)}
                    className="mr-2 bg-blue-500 text-white rounded px-4 py-2"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white rounded px-4 py-2"
                  >
                    Delete
                  </Button>
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
