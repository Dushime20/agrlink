import React, { useState } from "react";
import AddProductDialog from "../products/AddProduct";
import SelledProduct from "./SelledProduct";
import SellerProduct from "./SellerProduct";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleAddProduct = async (productData) => {
    console.log("Adding product:", productData);
    // TODO: Send productData to backend (e.g., Firebase or your API)
  };

  // Sample user data - in a real app, this would come from an API
  const farmerData = {
    name: "Josiane Mukamana",
    location: "Nyagatare District, Eastern Province",
    profileImg: "/api/placeholder/100/100",
    memberSince: "2023",
    role: "Farmer",
    crops: ["Coffee", "Maize", "Beans"],
    certifications: ["Organic Certified", "Fair Trade"],
    cooperative: "Nyagatare Coffee Growers Cooperative",
    productionCapacity: "3.5 tons annually",
    description:
      "Experienced coffee farmer with 10 years of sustainable farming practices. Specializing in arabica coffee cultivation at high altitudes.",
    contactInfo: {
      phone: "+250 78 123 4567",
      email: "josiane@example.com",
    },
  
   
  };

  const renderTabContent = () => {
    switch (activeTab) {


       case "listings":
      return <SellerProduct />;

    case "transactions":
      return <SelledProduct />;

      case "addProduct":
        return (
          
            <AddProductDialog onAddProduct={handleAddProduct} />
          
        );

     

      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header with AGRILINK branding */}
      <div className="bg-green-700 text-white p-6 rounded-t-lg">
        <div className="flex items-center">
          <div className="mr-2 text-2xl font-bold">AGRILINK</div>
          <div className="text-sm bg-green-600 px-2 py-1 rounded">Rwanda</div>
        </div>
        <p className="mt-1 text-green-100 text-sm">
          Transforming Agriculture in Rwanda
        </p>
      </div>

      {/* Profile header */}
      <div className="bg-white p-6 shadow rounded-b-lg mb-6">
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src={farmerData.profileImg}
              alt={farmerData.name}
              className="w-24 h-24 rounded-full border-4 border-green-100"
            />
          </div>
          <div className="md:ml-6">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold">{farmerData.name}</h1>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                {farmerData.role}
              </span>
            </div>
            <p className="text-gray-600 mt-1">{farmerData.location}</p>
            <p className="text-sm text-gray-500 mt-1">
              Member since {farmerData.memberSince}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm">
                Edit profile
              </button>
              <button className="border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-md text-sm">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="border-b mb-6">
        <nav className="flex -mb-px">
          
          <button
            onClick={() => setActiveTab("listings")}
            className={`mr-8 py-4 px-1 ${
              activeTab === "listings"
                ? "border-b-2 border-green-500 text-green-600 font-medium"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Current Listings
          </button>
          <button
            onClick={() => setActiveTab("transactions")}
            className={`mr-8 py-4 px-1 ${
              activeTab === "transactions"
                ? "border-b-2 border-green-500 text-green-600 font-medium"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Transactions
          </button>
          
          <button
            onClick={() => setActiveTab("addProduct")}
            className={`mr-8 py-4 px-1 ${
              activeTab === "addProduct"
                ? "border-b-2 border-green-500 text-green-600 font-medium"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Add Product
          </button>
        </nav>
      </div>

      {/* Tab content */}
      {renderTabContent()}

      {/* Footer */}
      <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
        <p>
          AGRILINK Rwanda - Connecting farmers, cooperatives, and suppliers with
          buyers
        </p>
        <p className="mt-1">
          For a transparent and efficient agricultural marketplace.
        </p>
      </div>
    </div>
  );
};

export default Profile;
