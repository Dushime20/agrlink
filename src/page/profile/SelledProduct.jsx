import ApiService from '@/config/ApiConfig';
import React, { useEffect, useState } from 'react';

const SelledProduct = () => {


  const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
  
    // Fetch products by seller ID on mount
    useEffect(() => {
      getOrderBySeller();
    }, []);
  
    const getOrderBySeller = async () => {
      try {
       
        const result = await ApiService.getOrdersBySellerId();
        console.log("Order by seller:", result);
        setTransactions(result.orders)
         setLoading(true) 
      } catch (error) {
        toast.error("Getting products failed");
        console.error("API error:", error);
        setLoading(false);
        setError("Failed to fetch product");
      }
      finally {
        setLoading(false);
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
  
     if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }

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
                Order Date
              </th>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Delivery Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Buyer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               Order Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               Payment Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction,index) => (
              <tr key={transaction._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {index + 1}
                </td>
               <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {new Date(transaction.orderDate).toLocaleDateString()}
                  </td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {new Date(transaction.deliveryDate).toLocaleDateString()}
                  </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {transaction.product.productId.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {transaction.quantity}
                </td>
                 <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {transaction.totalAmount.toLocaleString()} RWF
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {transaction.buyer.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {transaction.orderStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {transaction.paymentStatus}
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
