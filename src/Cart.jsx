// src/components/Cart.jsx
import { useSelector, useDispatch } from "react-redux";
import CartInfo from "./CartInfo";
import { clearCart } from "./utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const price = item.card.info.price || item.card.info.defaultPrice || 0;
    return total + (price * item.quantity) / 100;
  }, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Cart</h1>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-4">
        {cartItems.length === 0 ? (
          <h2 className="text-center text-xl text-gray-500 py-10">Your cart is empty 🛒</h2>
        ) : (
          cartItems.map((item) => <CartInfo key={item.card.info.id} item={item} />)
        )}

        {cartItems.length > 0 && (
          <>
            <hr className="my-4" />
            <div className="flex justify-between items-center text-xl font-semibold">
              <span>Total</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mt-6">
              <button
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Pay Now
              </button>
            </div>
            <div className="text-center mt-6">
              <Link to="/" className="text-blue-600 hover:underline">
                ← Back to Menu
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
