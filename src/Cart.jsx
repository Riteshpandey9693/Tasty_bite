import { useSelector, useDispatch } from "react-redux";
import CartInfo from "./CartInfo";
import { clearCart } from "./utils/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import successSound from "./success.mp3";
import { CheckCircle2 } from "lucide-react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [showSuccess, setShowSuccess] = useState(false);

  const totalAmount = cartItems.reduce((total, item) => {
    const price = item.card.info.price || item.card.info.defaultPrice || 0;
    return total + (price * item.quantity) / 100;
  }, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlePayNow = () => {
    const audio = new Audio(successSound);
    audio.play().catch((e) => console.error("Audio playback failed:", e));

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      dispatch(clearCart());
    }, 3000);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Cart</h1>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-4">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10">
            <h2 className="text-xl text-gray-500 text-center">Your cart is empty 🛒</h2>
            <Link
              to="/"
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {cartItems.map((item) => (
              <CartInfo key={item.card.info.id} item={item} />
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <>
            <hr className="my-4" />
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
              <button
                className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <button
                className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
                onClick={handlePayNow}
              >
                Pay Now
              </button>
            </div>
          </>
        )}
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center gap-4 animate-fade-in">
            <CheckCircle2 className="text-green-500" size={64} />
            <h2 className="text-xl font-bold text-green-600">Payment Successful!</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
