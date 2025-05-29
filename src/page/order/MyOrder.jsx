import React, { useEffect, useState } from 'react';
import ApiService from '@/config/ApiConfig';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await ApiService.getOrdersByBuyerId();
        if (response.success) {
          setOrders(response.orders);
        } else {
          setError("Failed to load orders");
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, []);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (error) return <div className="p-6 text-red-500 text-center">{error}</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto text-green-900">
      <h1 className="text-2xl font-semibold mb-4">My Orders</h1>
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={order._id} className="mb-6 border rounded-lg shadow-sm p-4 bg-white">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-medium">Order ID: <span className="text-gray-700">{order.orderId}</span></p>
                <p className="text-sm text-gray-500">Order date: {new Date(order.orderDate).toLocaleDateString()}</p>
                <p className="text-sm text-gray-500">Delivery date: {new Date(order.orderDate).toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">Status: <span className="text-blue-600">{order.orderStatus}</span></p>
                <p className="text-lg font-bold">{order.totalAmount.toLocaleString()} RWF</p>
              </div>
            </div>

            <div className="border-t pt-2">
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={order.product.productId.images[0]?.url || 'https://via.placeholder.com/100'}
                  alt={order.product.productId.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{order.product.productId.name}</p>
                  <p className="text-sm text-gray-600">
                    Qty: {order.product.quantity} | Price: {order.product.price.toLocaleString()} RWF
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 border-t pt-2 text-sm text-gray-700">
              <p><span className="font-medium">Seller Email:</span> {order.seller?.email || "N/A"}</p>
              <p><span className="font-medium">Seller Phone:</span> {order.seller?.phoneNumber || "N/A"}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrder;
