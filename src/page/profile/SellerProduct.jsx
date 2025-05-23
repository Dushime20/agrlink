import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const SellerProduct = () => {
  const transactions = [
    {
      id: 1,
      date: "2025-02-15",
      product: "Coffee Beans (Grade A)",
      quantity: "500kg",
     
    },
    {
      id: 2,
      date: "2025-01-20",
      product: "Maize",
      quantity: "1 ton",
      
    },
    {
      id: 3,
      date: "2024-12-10",
      product: "Coffee Beans (Grade A)",
      quantity: "300kg",
      
    },
  ];
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <h3 className="text-lg font-semibold p-4 border-b">
        Current Listing
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
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
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
              
                <td className="px-6 py-4 whitespace-nowrap">
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEdit(car.id)}
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerProduct;
