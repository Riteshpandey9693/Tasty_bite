import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const RestaurantCategory = ({ category }) => {
  const [showItems, setShowItems] = useState(false);
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item)); // Pass actual item instead of hardcoded "pizza"
  };

  return (
    <div className="p-4 border-2 border-gray-300 rounded-2xl shadow-md mb-4 bg-white max-w-3xl mx-auto">
      {/* Category Header (Accordion Toggle) */}
      <div
        className="flex justify-between items-center cursor-pointer pb-2 border-b-2"
        onClick={() => setShowItems(!showItems)}
      >
        <h2 className="text-xl font-bold text-gray-800">
          {category.title} ({category.itemCards.length})
        </h2>
        <span className="text-gray-600 text-lg">{showItems ? "▲" : "▼"}</span>
      </div>

      {/* Menu Items (Shown when showItems is true) */}
      {showItems && (
        <ul className="mt-2">
          {category?.itemCards?.map((item) => {
            const { id, name, defaultPrice, price, description, imageId } =
              item?.card?.info || {};

            return (
              <li
                key={id}
                className="flex items-center justify-between border-b-2 p-4 rounded-lg bg-gray-100 shadow-sm hover:bg-gray-200 transition relative w-full"
              >
                {/* Content on the left */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-gray-600">₹{(defaultPrice || price) / 100}</p>

                  {/* Description with hover effect */}
                  <div className="relative w-2xl">
                    <p className="text-gray-500 overflow-hidden h-6 hover:h-auto hover:overflow-visible hover:whitespace-normal transition-all">
                      {description}
                    </p>
                  </div>
                </div>

                {/* Image & Button on the right */}
                {imageId && (
                  <div className="flex flex-col items-center p-4">
                    <img
                      className="h-25 w-25 rounded-lg object-cover border-2 border-gray-300"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,e_color,c_fill/${imageId}`}
                      alt={name}
                    />
                    <div className="absolute">
                      <button
                        className="mt-2 px-4 py-1 bg-black text-white rounded-lg"
                        onClick={() => handleAddItems(item)} // Corrected onClick handler
                      >
                        Add
                      </button>
                    </div>
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
