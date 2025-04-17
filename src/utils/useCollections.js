// utils/useCollections.js
import { useState, useEffect } from "react";
import { FETCH_INFO_URL } from "./constants";

const useCollections = (resId) => {
  const [collectionData, setCollectionData] = useState(null);

  useEffect(() => {
    const getCollection = async () => {
      try {
        const response = await fetch(`${FETCH_INFO_URL}${resId}`);
        const json = await response.json();
        const cards = json?.data?.cards;

        if (!cards || cards.length === 0) {
          setCollectionData(null);
          return;
        }

        // Find the card that contains the collection title and description
        const collectionHeaderCard = cards.find(
          (card) => card?.card?.card?.id === "collection_title_description"
        );

        // Find the card that contains the list of restaurants
        const restaurantListCard = cards.find(
          (card) => card?.card?.card?.id === "restaurant_grid_listing"
        );

        const title = collectionHeaderCard?.card?.card?.title || "Collection";
        const description = collectionHeaderCard?.card?.card?.description || "";

        const restaurants = restaurantListCard?.card?.card?.restaurants || [];

        setCollectionData({ title, description, restaurants });
      } catch (error) {
        console.error("Collection fetch error:", error);
        setCollectionData(null);
      }
    };

    getCollection();
  }, [resId]);

  return collectionData;
};

export default useCollections;
