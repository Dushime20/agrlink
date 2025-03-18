import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
          <Link to="/cart" className="hover:underline flex items-center">
            <ShoppingCart size={20} className="mr-1" /> Cart
          </Link>
          <Link to="/profile" className="hover:underline flex items-center">
            <User size={20} className="mr-1" /> Profile
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 text-center">
          <Link to="/" className="block py-2 hover:bg-green-700">Home</Link>
          <Link to="/products" className="block py-2 hover:bg-green-700">Products</Link>
          <Link to="/cart" className=" py-2 hover:bg-green-700 flex justify-center">
            <ShoppingCart size={20} className="mr-1" /> Cart
          </Link>
          <Link to="/profile" className=" py-2 hover:bg-green-700 flex justify-center">
            <User size={20} className="mr-1" /> Profile
          </Link>
        </div>
      )}
    </nav>
  );
}
