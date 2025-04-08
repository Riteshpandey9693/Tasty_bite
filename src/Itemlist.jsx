import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const Itemlist = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => {
        const { id, name, defaultPrice, price, description, imageId } =
          item?.card?.info || {};

        return (
          <div
            key={id}
            className="flex justify-between items-center border-b-2 p-4 rounded-lg bg-gray-100 shadow-sm hover:bg-gray-200 transition relative w-full mb-4"
          >
            {/* Left Section (Details) */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-gray-600">₹{(defaultPrice || price) / 100}</p>
              <p className="text-gray-500 overflow-hidden h-6 hover:h-auto hover:overflow-visible transition-all">
                {description}
              </p>
            </div>

            {/* Right Section (Image & Button) */}
            {imageId && (
              <div className="flex flex-col items-center p-4">
                <img
                  className="h-24 w-24 rounded-lg object-cover border-2 border-gray-300"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,e_color,c_fill/${imageId}`}
                  alt={name}
                />
                <button
                  className="mt-2 px-4 py-1 bg-black text-white rounded-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Itemlist;
