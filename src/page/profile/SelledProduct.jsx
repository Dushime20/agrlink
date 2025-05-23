import React from 'react';

const SelledProduct = () => {
  const transactions = [
    {
      id: 1,
      date: '2025-02-15',
      product: 'Coffee Beans (Grade A)',
      quantity: '500kg',
      buyer: 'Kigali Coffee Exporters',
      status: 'Completed',
    },
    {
      id: 2,
      date: '2025-01-20',
      product: 'Maize',
      quantity: '1 ton',
      buyer: 'Rwanda Grain Reserve',
      status: 'Completed',
    },
    {
      id: 3,
      date: '2024-12-10',
      product: 'Coffee Beans (Grade A)',
      quantity: '300kg',
      buyer: 'Mountain Coffee Roasters',
      status: 'Completed',
    },
  ];

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
};

export default SelledProduct;
