import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import RestaurantCollections from "./RestaurantCollections";
import {Shimmer} from "./Shimmer";
import useOnlineStatus from "./utils/useOnlineStatus";

const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [mindCards, setMindCards] = useState([]); // What's on your mind

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline. Please check your internet connection.</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4">
      {/* "What's on your mind?" Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">What's on your mind?</h2>
        <div className="flex overflow-x-auto gap-4 scrollbar-hide">
          {mindCards.map((card) => (
            <Link to={`/collections/${card.id}`} key={card.id}>
              <RestaurantCollections imageId={card.imageId} title={card.action?.text} />
            </Link>
          ))}
        </div>
      </div>

      {/* Search & Filter */}
      <div className="mb-4 flex flex-wrap gap-2 items-center">
        <input
          type="text"
          className="border p-2 rounded-md"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for a restaurant"
        />
        <button
          className="bg-yellow-400 px-4 py-2 rounded-md"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="border-2 rounded-lg px-4 py-2 bg-cyan-100"
          onClick={() => {
            const topRated = listOfRestaurants.filter(
              (restaurant) => restaurant?.info?.avgRating > 4
            );
            setFilteredRestaurants(topRated);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-4">
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
