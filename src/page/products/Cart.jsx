const Cart = ({ cartItems }) => {

    cartItems = 1
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="border-b p-2">
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  export default Cart