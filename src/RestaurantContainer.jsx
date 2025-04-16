import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import RestaurantCollections from "./RestaurantCollections";
import { Shimmer } from "./Shimmer";
import useOnlineStatus from "./utils/useOnlineStatus";

const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [mindCards, setMindCards] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Fis-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING%26lat=28.7040592%26lng=77.1024901"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    const mindCardData =
      json?.data?.cards?.[0]?.card?.card?.imageGridCards?.info || [];

    setMindCards(mindCardData);
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div className="text-center mt-10 text-xl text-red-500 font-semibold">
        You're offline. Please check your internet connection.
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      {/* What's on your mind */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">What's on your mind?</h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={scrollLeft}
              className="bg-white border shadow hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-full p-2"
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              className="bg-white border shadow hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-full p-2"
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {mindCards.map((card) => (
            <Link to={`/collections/${card.id}`} key={card.id}>
              <RestaurantCollections
                imageId={card.imageId}
                title={card.action?.text}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Search & Filters */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-3">
        <input
          type="text"
          className="flex-1 border rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for restaurants..."
        />
        <button
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filtered);
          }}
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
        >
          Search
        </button>
        <button
          onClick={() => {
            const topRated = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.1
            );
            setFilteredRestaurants(topRated);
          }}
          className="bg-cyan-100 px-4 py-2 rounded-md border border-cyan-300 hover:bg-cyan-200 transition"
        >
          Top Rated
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={`/restaurants/${restaurant?.info?.id}`}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
