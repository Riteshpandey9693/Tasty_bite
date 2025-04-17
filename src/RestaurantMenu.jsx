import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ShimmerRestaurantMenu } from "./Shimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { CDN_URL_SHORT_PATH } from "./utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);

  const [showCartPopup, setShowCartPopup] = useState(false);

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const handleAddToCart = () => {
    setShowCartPopup(true);
  };

  if (!resInfo) return <ShimmerRestaurantMenu />;

  return (
    <div className=" min-h-screen py-6 px-4 flex flex-col items-center">
      
      {/* Restaurant Details Container */}
      <div className=" w-full max-w-4xl rounded-2xl  p-6 mb-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 pb-4 mb-4">
          <div className="mb-4 md:mb-0">
            <h4 className="text-2xl font-bold text-gray-800">{name}</h4>
            <p className="text-md text-gray-600">{cuisines?.join(", ")}</p>
            <p className="text-sm text-gray-500">
              {restaurantInfo.areaName}, {restaurantInfo.sla?.lastMileTravelString}
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-center shadow-sm">
            <h1 className="text-xl font-bold text-green-600">{restaurantInfo.avgRating}</h1>
            <p className="text-sm text-gray-600 mt-1">{restaurantInfo?.totalRatingsString}</p>
          </div>
        </div>

        {/* Delivery Time + Restaurant Image */}
        <div className="flex flex-col items-start justify-center w-full">
          <h4 className="font-medium text-lg p-2.5">
            {restaurantInfo.sla?.slaString} • {costForTwoMessage}
          </h4>

          {/* Restaurant Image */}
          <img
            className="w-[300px] h-[200px] object-cover rounded-lg"
            src={CDN_URL_SHORT_PATH + restaurantInfo.cloudinaryImageId}
            alt={name}
          />
        </div>

        {/* Discounts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          
          {/* Short Description List */}
          {restaurantInfo?.aggregatedDiscountInfo?.shortDescriptionList?.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300">
              <h4 className="font-semibold mb-2 text-green-600">
                {restaurantInfo.aggregatedDiscountInfo.header}
              </h4>
              {restaurantInfo.aggregatedDiscountInfo.shortDescriptionList.map((item, index) => (
                <p key={index} className="text-sm text-gray-700">{item.meta}</p>
              ))}
            </div>
          )}

          {/* Full Description List */}
          {restaurantInfo?.aggregatedDiscountInfo?.descriptionList?.map((desc, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300"
            >
              {desc?.header && (
                <h4 className="font-semibold mb-1 text-indigo-600">{desc.header}</h4>
              )}
              {desc?.meta && (
                <p className="text-sm text-gray-600">{desc.meta}</p>
              )}
            </div>
          ))}
        </div>

        {/* Menu Section */}
        <div className="w-full max-w-4xl mt-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">🍽️ Menu</h2>
          {categories?.map((category, index) => (
            <RestaurantCategory
              key={index}
              category={category.card?.card}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>

      {/* View Cart Popup */}
      {showCartPopup && cartItems.length > 0 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg flex items-center justify-between w-[90%] max-w-xl animate-slide-up">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">View Cart ({cartItems.length} items)</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="bg-white text-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button>
            <button
              className="text-white text-lg font-bold hover:text-gray-200 transition"
              onClick={() => setShowCartPopup(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
