import { CDN_URL, CDN_URL_LONG_PATH, CDN_URL_SHORT_PATH } from "./utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { 
        name, 
        cuisines, 
        avgRating, 
        costForTwo, 
        cloudinaryImageId,
        aggregatedDiscountInfoV3 
    } = resData?.info || {};

    // Function to determine the correct image URL based on ID format
    const getImageUrl = (imageId) => {
        if (!imageId) return CDN_URL; // Fallback image
        
        // Check if it's the long path format
        if (imageId.startsWith("RX_THUMBNAIL")) {
            return `${CDN_URL_LONG_PATH + imageId}`;
        }
        // For the shorter hash format
        return `${CDN_URL_SHORT_PATH + imageId}`;
    };

    return (
        <div className="relative h-78 w-76 p-4 transition-transform duration-200 hover:scale-90">
            {/* Image Container with Header Overlay */}
            <div className="relative">
                <img 
                    className="h-42 w-62 rounded-2xl"
                    src={getImageUrl(cloudinaryImageId)} 
                    alt={name || "Restaurant"} 
                    onError={(e) => { e.target.src = CDN_URL; }} // Fallback on error
                />
                {/* Discount Info (Header + SubHeader) */}
                {aggregatedDiscountInfoV3 && (
                    <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded">
                        <h4 className="font-bold">{aggregatedDiscountInfoV3?.header}</h4>
                        <h4 className="text-xs">{aggregatedDiscountInfoV3?.subHeader}</h4>
                    </div>
                )}
            </div>

            {/* Restaurant Details */}
            <h3 className="text-lg font-medium">{name}</h3>
            <h2 className="text-lg font-medium">
                {`${avgRating} stars • ${resData?.info?.sla?.deliveryTime} mins`}
            </h2>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{costForTwo || "Cost not available"} for two</h4>
        </div>
    );
};

export default RestaurantCard;
