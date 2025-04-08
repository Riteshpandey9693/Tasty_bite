import { CDN_URL_SHORT_PATH } from "./utils/constants";

const RestaurantCollections = ({ imageId, title }) => {
  return (
    <div className="min-w-[90px] flex flex-col items-center">
      <div className="w-[90px] h-[90px] rounded-full overflow-hidden shadow-md border border-gray-200">
        <img
          src={CDN_URL_SHORT_PATH + imageId}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-2 text-sm font-medium text-center">{title}</p>
    </div>
  );
};

export default RestaurantCollections;
