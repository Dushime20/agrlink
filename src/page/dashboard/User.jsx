import React, { useEffect, useState } from "react";
import ApiService from "@/config/ApiConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const ITEMS_PER_PAGE = 5;

const UserSettings = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await ApiService.getAllUser();
        setUsers(response.findUser);
        setFilteredUsers(response.findUser);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(user =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchTerm, users]);

  const handleEdit = (userId) => {
    console.log("Edit user with ID:", userId);
  };

  const handleDelete = (userId) => {
    console.log("Delete user with ID:", userId);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-green-900">
      <div className='flex justify-between mb-4'>
        <h1 className="text-2xl font-bold">All Users</h1>
        <Link to="/dashboard/add-car">
          <Button className="bg-green-900 text-white"><FaPlus /></Button>
        </Link>
      </div>

      <Input
        placeholder="Search by name, email, or role..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedUsers.map((user, index) => (
            <TableRow key={user._id}>
              <TableCell>{startIndex + index + 1}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => handleEdit(user._id)}><MdEdit size={18} className="text-green-900"/></Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(user._id)}><MdDelete size={18} className="text-red-600" /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center mt-4">
          <span>
          Page {currentPage} of {totalPages}
        </span>
         <div className="flex gap-2">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={"bg-green-900 hover:bg-green-600"}
        >
          Previous
        </Button>
       
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={"bg-green-900 hover:bg-green-600"}
        >
          Next
        </Button>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;