export const Shimmer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-6 animate-pulse min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      {/* Top Circle Animation */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full shadow-inner animate-pulse"></div>
        <h2 className="text-lg font-semibold text-gray-500">
          Looking for great food near you...
        </h2>
      </div>

      {/* What's on your mind shimmer (New Section) */}
      <div className="w-full max-w-6xl overflow-hidden">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-1">
          {Array(12)
            .fill("")
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 min-w-[80px]"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full shadow-md animate-pulse"></div>
                <div className="w-16 h-3 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full animate-pulse"></div>
              </div>
            ))}
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {Array(8)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-4 space-y-4 w-full animate-pulse"
            >
              {/* Image Placeholder */}
              <div className="w-full h-40 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md"></div>
              {/* Text Placeholder */}
              <div className="w-3/4 h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded"></div>
              <div className="w-2/3 h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded"></div>
              <div className="w-1/2 h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded"></div>
            </div>
          ))}
      </div>
    </div>
  );
};


  

  export const ShimmerRestaurantMenu = () => {
    return (
      <div className="min-h-screen py-6 px-4 flex flex-col items-center">
        <div className="w-full max-w-5xl rounded-2xl p-6 mb-6 bg-white shadow-md animate-pulse">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 pb-4 mb-6">
            <div className="space-y-2 mb-4 md:mb-0">
              <div className="h-6 w-48 bg-gray-200 rounded-md"></div>
              <div className="h-4 w-64 bg-gray-200 rounded-md"></div>
              <div className="h-3 w-40 bg-gray-200 rounded-md"></div>
            </div>
            <div className="bg-gray-100 border border-gray-300 rounded-lg px-6 py-4 shadow-sm w-28 h-20 flex flex-col justify-center items-center">
              <div className="h-6 w-12 bg-gray-300 rounded-md mb-2"></div>
              <div className="h-3 w-16 bg-gray-200 rounded-md"></div>
            </div>
          </div>

          {/* Cost for Two & Image Section */}
          <div className="flex flex-col items-start gap-4 mb-6">
            {/* Cost for Two Placeholder */}
            <div className="h-5 w-60 bg-gray-200 rounded-md"></div>

            {/* Restaurant Image Placeholder */}
            <div className="w-[300px] h-[200px] bg-gray-200 rounded-xl"></div>
          </div>

          {/* Offer Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-4 shadow bg-gray-100 space-y-3"
              >
                <div className="h-4 w-32 bg-gray-300 rounded-md"></div>
                <div className="h-3 w-48 bg-gray-200 rounded-md"></div>
                <div className="h-3 w-40 bg-gray-200 rounded-md"></div>
              </div>
            ))}
          </div>

          {/* Menu Heading */}
          <div className="mt-10 text-center">
            <div className="h-6 w-40 bg-gray-300 rounded-md mx-auto mb-6"></div>
          </div>

          {/* Menu Categories Placeholder */}
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className="h-20 bg-gray-200 rounded-xl w-full"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  };


