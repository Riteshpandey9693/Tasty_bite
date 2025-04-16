import RestaurantCollections from "./RestaurantCollections";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RestaurantCollectionsInfo = ({ collectionData }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  if (!collectionData || collectionData.length === 0) {
    return (
      <div className="px-4 mt-6">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">What's on your mind?</h2>
        <p className="text-gray-500">No collections to display</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 mt-6 relative">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">What's on your mind?</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
        >
          <FaChevronLeft size={16} />
        </button>

        {/* Scrollable Collection */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-10 sm:px-14"
        >
          {collectionData.map((item) => (
            <RestaurantCollections
              key={item.id}
              imageId={item.imageId}
              title={item.title}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default RestaurantCollectionsInfo;
