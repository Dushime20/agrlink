import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import HomeHeader from "./Header";
import ApiService from "@/config/ApiConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(ApiService.isAuthenticated());
    setIsUser(ApiService.isUser());
    setIsSeller(ApiService.isSeller());
    setIsAdmin(ApiService.isAdmin());
  }, []);

  const handleLogout = () => {
    ApiService.logout();
    setIsAuthenticated(false);
    navigate("/auth");
  };

  return (
    <div className="top-0 sticky z-10">
      {/* <HomeHeader /> */}
      <nav className="bg-white sticky text-green-700 p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">
            <NavLink to="/">AGRILINK Rwanda</NavLink>
          </h1>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-64 bg-white text-black px-3 py-1 rounded-md"
            />
            <Button variant="outline" className="text-white hover:text-white hover:bg-green-700 bg-green-900">
              <Search size={20} />
            </Button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/products" className="hover:underline">Products</Link>

            {isAdmin && <Link to="/dashboard" className="hover:underline">Admin</Link>}
        
              <Link to="/my-order" className="hover:underline flex items-center">
                <ShoppingCart size={20} className="mr-1" /> My order
              </Link>
            

            {isAuthenticated ? (
              <>
                <Link to="/profile" className="hover:underline flex items-center">
                  <User size={20} className="mr-1" /> Profile
                </Link>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button onClick={() => setShowLogoutDialog(true)} className="ml-4 bg-green-900 hover:bg-green-700">
                      Logout
                    </Button>
                  </AlertDialogTrigger>
                  {showLogoutDialog && (
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>This action will log you out.</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setShowLogoutDialog(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => { handleLogout(); setShowLogoutDialog(false); }}>
                          Logout
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  )}
                </AlertDialog>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button className="bg-green-900 hover:bg-green-700">Sign In</Button>
                </Link>
                <Link to="/auth" className="ml-2">
                  <Button className="bg-green-900 hover:bg-green-700">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 text-center">
            <Link to="/" className="block py-2 hover:bg-green-50">Home</Link>
            <Link to="/products" className="block py-2 hover:bg-green-50">Products</Link>
            {isUser && (
              <Link to="/cart" className="py-2 hover:bg-green-50 flex justify-center">
                <ShoppingCart size={20} className="mr-1" /> My order
              </Link>
            )}
            {isAdmin && (
              <Link to="/dashboard" className="py-2 hover:bg-green-50 flex justify-center">Admin</Link>
            )}
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="py-2 hover:bg-green-50 flex justify-center">
                  <User size={20} className="mr-1" /> Profile
                </Link>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button onClick={() => setShowLogoutDialog(true)} className="w-full">Logout</Button>
                  </AlertDialogTrigger>
                  {showLogoutDialog && (
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>You’ll be logged out of your session.</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setShowLogoutDialog(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => { handleLogout(); setShowLogoutDialog(false); }}>
                          Logout
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  )}
                </AlertDialog>
              </>
            ) : (
              <>
                <Link to="/auth" className="block py-2 hover:bg-green-50">Sign In</Link>
                <Link to="/auth" className="block py-2 hover:bg-green-50">Sign Up</Link>
              </>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}
