import React, { useState } from "react";
import AddProductDialog from "../products/AddProduct";

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
    transactions: [
      {
        id: 1,
        date: "2025-02-15",
        product: "Coffee Beans (Grade A)",
        quantity: "500kg",
        buyer: "Kigali Coffee Exporters",
        status: "Completed",
      },
      {
        id: 2,
        date: "2025-01-20",
        product: "Maize",
        quantity: "1 ton",
        buyer: "Rwanda Grain Reserve",
        status: "Completed",
      },
      {
        id: 3,
        date: "2024-12-10",
        product: "Coffee Beans (Grade A)",
        quantity: "300kg",
        buyer: "Mountain Coffee Roasters",
        status: "Completed",
      },
    ],
    currentListings: [
      {
        id: 1,
        product: "Coffee Beans (Grade A)",
        quantity: "800kg",
        price: "RWF 2,400/kg",
        harvestDate: "March 2025",
      },
      {
        id: 2,
        product: "Beans",
        quantity: "500kg",
        price: "RWF 800/kg",
        harvestDate: "February 2025",
      },
    ],
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p>{farmerData.description}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Farm Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Location</p>
                  <p className="font-medium">{farmerData.location}</p>
                </div>
                <div>
                  <p className="text-gray-600">Cooperative</p>
                  <p className="font-medium">{farmerData.cooperative}</p>
                </div>
                <div>
                  <p className="text-gray-600">Production Capacity</p>
                  <p className="font-medium">{farmerData.productionCapacity}</p>
                </div>
                <div>
                  <p className="text-gray-600">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {farmerData.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Crops</h3>
              <div className="flex flex-wrap gap-2">
                {farmerData.crops.map((crop, index) => (
                  <span
                    key={index}
                    className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                  >
                    {crop}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case "listings":
        return (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <h3 className="text-lg font-semibold p-4 border-b">
              Current Listings
            </h3>
            {farmerData.currentListings.length > 0 ? (
              <div className="divide-y">
                {farmerData.currentListings.map((listing) => (
                  <div key={listing.id} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{listing.product}</h4>
                      <span className="text-green-600 font-semibold">
                        {listing.price}
                      </span>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div>Quantity: {listing.quantity}</div>
                      <div>Harvest: {listing.harvestDate}</div>
                    </div>
                    <div className="mt-3">
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded text-sm">
                        Contact Seller
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="p-4 text-gray-500">
                No active listings at the moment.
              </p>
            )}
          </div>
        );

      case "transactions":
        return (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <h3 className="text-lg font-semibold p-4 border-b">
              Transaction History
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Buyer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {farmerData.transactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {transaction.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {transaction.product}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {transaction.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {transaction.buyer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "addProduct":
        return (
          <div className="bg-white rounded-lg shadow p-4">
            <h1 className="text-2xl font-bold">Manage Products</h1>
            <AddProductDialog onAddProduct={handleAddProduct} />
          </div>
        );

      case "contact":
        return (
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-600">Phone</p>
                <p className="font-medium">{farmerData.contactInfo.phone}</p>
              </div>
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-medium">{farmerData.contactInfo.email}</p>
              </div>
              <div className="pt-4">
                <h4 className="font-medium mb-2">Send Message</h4>
                <textarea
                  className="w-full border rounded p-2 h-24"
                  placeholder="Type your message here..."
                ></textarea>
                <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                  Send Message
                </button>
              </div>
            </div>
          </div>
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
                Connect
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
            onClick={() => setActiveTab("overview")}
            className={`mr-8 py-4 px-1 ${
              activeTab === "overview"
                ? "border-b-2 border-green-500 text-green-600 font-medium"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Overview
          </button>
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
            onClick={() => setActiveTab("contact")}
            className={`mr-8 py-4 px-1 ${
              activeTab === "contact"
                ? "border-b-2 border-green-500 text-green-600 font-medium"
                : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Contact
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
