import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "sonner";
import ApiService from "@/config/ApiConfig";

const SellerProduct = () => {
  const [products, setProducts] = useState([]);

  // Fetch products by seller ID on mount
  useEffect(() => {
    getProductBySellerId();
  }, []);

  const getProductBySellerId = async () => {
    try {
      const result = await ApiService.getProductBySellerId();
      console.log("Products by seller ID:", result);
      setProducts(result.product); // Ensure your API returns { product: [...] }
    } catch (error) {
      toast.error("Getting products failed");
      console.error("API error:", error);
    }
  };

  const handleEdit = (id) => {
    toast.info(`Edit product ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    toast.info(`Delete product ${id}`);
    // Add your delete logic here
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <h3 className="text-lg font-semibold p-4 border-b">Current Listing</h3>
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
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{product.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm flex gap-2">
                    <button onClick={() => handleEdit(product._id)} className="text-green-600">
                      <MdEdit size={20} />
                    </button>
                    <button onClick={() => handleDelete(product._id)} className="text-red-500">
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerProduct;
