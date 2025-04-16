import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const RestaurantCategory = ({ category }) => {
  const [showItems, setShowItems] = useState(false);
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="p-4 border border-gray-300 rounded-2xl shadow-sm mb-6 bg-white max-w-3xl mx-auto w-full">
      {/* Accordion Toggle Header */}
      <div
        className="flex justify-between items-center cursor-pointer pb-3 border-b"
        onClick={() => setShowItems(!showItems)}
      >
        <h2 className="text-xl font-semibold text-gray-800">
          {category.title} ({category.itemCards.length})
        </h2>
        <span className="text-gray-600 text-lg">{showItems ? "▲" : "▼"}</span>
      </div>

      {/* Menu Items */}
      {showItems && (
        <ul className="mt-3 space-y-3">
          {category?.itemCards?.map((item) => {
            const { id, name, defaultPrice, price, description, imageId } =
              item?.card?.info || {};

            return (
              <li
                key={id}
                className="flex flex-col sm:flex-row justify-between gap-4 border border-gray-200 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition w-full"
              >
                {/* Left Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
                  <p className="text-gray-700 font-medium mb-1">
                    ₹{(defaultPrice || price) / 100}
                  </p>

                  {/* Description with ... and hover expand */}
                  <div className="relative group w-full">
                    <p
                      className="text-gray-500 text-sm line-clamp-1 group-hover:line-clamp-none group-hover:whitespace-normal transition-all duration-300"
                      title={description}
                    >
                      {description}
                    </p>
                  </div>
                </div>

                {/* Right Content: Image + Button */}
                {imageId && (
  <div className="relative w-28 h-28">
    <img
      className="w-full h-full rounded-lg object-cover border border-gray-300"
      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,e_color,c_fill/${imageId}`}
      alt={name}
    />
    <button
      className="absolute left-1/2 bottom-[-7px] transform -translate-x-1/2 px-5 py-1 bg-black text-white rounded-md font-medium text-sm hover:bg-gray-800 transition"
      onClick={() => handleAddItems(item)}
    >
      Add
    </button>
  </div>
)}

              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
