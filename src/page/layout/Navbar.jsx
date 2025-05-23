import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "../dashboard/Header";
import HomeHeader from "./Header";
import ApiService from "@/config/ApiConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const auth = ApiService.isAuthenticated();
    const user = ApiService.isUser();
    const seller = ApiService.isSeller()
    const admin = ApiService.isAdmin();
    setIsAuthenticated(auth);
    setIsUser(user);
    setIsAdmin(admin);
  }, []);

  const handleLogout = () => {
    const isLogout = window.confirm("Are you sure you want to logout?");
    if (isLogout) {
      ApiService.logout();
      setIsAuthenticated(false);
      navigate("/login");
    }
  };

  return (
    <div className="top-0 sticky z-10">
      <HomeHeader/>
      <nav className="bg-white sticky text-green-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-bold">
          <NavLink to={"/"}>AGRILINK Rwanda</NavLink>
        </h1>

        {/* Search Bar (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center space-x-2">
          <Input type="text" placeholder="Search products..." className="w-64 bg-white text-black px-3 py-1 rounded-md" />
          <Button variant="outline" className="text-white border-white bg-green-700">
            <Search size={20} />
          </Button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/products" className="hover:underline">Products</Link>
          {isAdmin && <Link to="/dashboard" className="hover:underline">Admin</Link>}
          {isUser && <Link to="/cart" className="hover:underline flex items-center">
            <ShoppingCart size={20} className="mr-1" /> My order
          </Link>}
          {isAuthenticated && <Link to="/profile" className="hover:underline flex items-center">
            <User size={20} className="mr-1" /> Profile
          </Link>}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 text-center">
          <Link to="/" className="block py-2 hover hover:bg-green-50">Home</Link>
          <Link to="/products" className="block py-2 hover:bg-green-50">Products</Link>
        {isUser &&   <Link to="/cart" className=" py-2 hover:bg-green-50 flex justify-center">
            <ShoppingCart size={20} className="mr-1" /> My order
          </Link>}
          {isAdmin &&   <Link to="/dashboard" className=" py-2 hover:bg-green-50 flex justify-center">
             Admin
          </Link>}
         {isAuthenticated &&  <Link to="/profile" className=" py-2 hover:bg-green-50 flex justify-center">
            <User size={20} className="mr-1" /> Profile
          </Link>}
        </div>
      )}
    </nav>
    </div>
  );
}
