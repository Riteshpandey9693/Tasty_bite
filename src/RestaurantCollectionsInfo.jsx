import RestaurantCollections from "./RestaurantCollections";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

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
    <div className="px-4 mt-6 relative">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        What's on your mind?
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Collection List */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth px-10"
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
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default RestaurantCollectionsInfo;
