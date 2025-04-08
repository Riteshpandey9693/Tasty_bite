import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "./utils/cartSlice"; // Fixed incorrect import path

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          onClick={handleClearCart}
        >
          Empty Cart
        </button>
        {cartItems.length === 0 ? (
          <h1 className="mt-4 text-gray-600">Cart is empty. Add items to cart!</h1>
        ) : (
          <Itemlist items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
