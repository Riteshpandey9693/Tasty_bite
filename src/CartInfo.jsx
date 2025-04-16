// src/components/CartInfo.jsx
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./utils/cartSlice";

const CartInfo = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, imageId, price, defaultPrice } = item.card.info;
  const displayPrice = (price || defaultPrice) / 100;

  return (
    <div className="flex justify-between items-center border-b py-4">
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">₹{(displayPrice * item.quantity).toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded overflow-hidden">
          <button
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
            onClick={() => dispatch(removeItem(id))}
          >
            −
          </button>
          <span className="px-4">{item.quantity}</span>
          <button
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
            onClick={() => dispatch(addItem(item))}
          >
            +
          </button>
        </div>
        {imageId && (
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,e_color,c_fill/${imageId}`}
            alt={name}
            className="w-20 h-20 rounded border object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default CartInfo;
