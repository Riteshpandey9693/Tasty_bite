import toast from "react-hot-toast";

/** Scroll to top with smooth animation */
export const handleScrollTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

/** Filter by search string */
export const findRestaurants = (search, restaurants) => {
	return restaurants.filter((restaurant) =>
		restaurant?.info?.name?.toLowerCase()?.includes(search.toLowerCase())
	);
};

/** Helper to toggle between all and specific filtered data */
const applyFilter = ({
	res,
	setRes,
	filterValue,
	currentFilter,
	setFilter,
	filterFn,
	successMsg,
}) => {
	if (filterValue === currentFilter) {
		setRes(res);
		setFilter("jack");
		toast.success("All Restaurants Displayed");
	} else {
		const filtered = res.filter(filterFn);
		setRes(filtered);
		setFilter(filterValue);
		toast.success(successMsg);
	}
};

/** Fast delivery filter */
export const findRestaurantsFast = (res, setRes, fil, filter, setFilter) => {
	applyFilter({
		res,
		setRes,
		filterValue: fil,
		currentFilter: filter,
		setFilter,
		filterFn: (r) => r?.info?.sla?.deliveryTime <= 25,
		successMsg: "Fast Delivery Restaurants",
	});
};

/** Top ratings filter */
export const findRestaurantsRating = (res, setRes, fil, filter, setFilter) => {
	applyFilter({
		res,
		setRes,
		filterValue: fil,
		currentFilter: filter,
		setFilter,
		filterFn: (r) => r?.info?.avgRating >= 4,
		successMsg: "Top Rated Restaurants",
	});
};

/** Offer-based filter */
export const findRestaurantsOffer = (res, setRes, fil, filter, setFilter) => {
	applyFilter({
		res,
		setRes,
		filterValue: fil,
		currentFilter: filter,
		setFilter,
		filterFn: (r) =>
			r?.info?.aggregatedDiscountInfoV3?.header?.includes("OFF"),
		successMsg: "Restaurants With Offers",
	});
};

/** Pure Veg filter */
export const findRestaurantsVeg = (res, setRes, fil, filter, setFilter) => {
	applyFilter({
		res,
		setRes,
		filterValue: fil,
		currentFilter: filter,
		setFilter,
		filterFn: (r) => r?.info?.veg === true,
		successMsg: "Pure Veg Restaurants",
	});
};

/** Budget-friendly (< ₹300) filter */
export const findRestaurantsLess300 = (
	res,
	setRes,
	fil,
	filter,
	setFilter
) => {
	applyFilter({
		res,
		setRes,
		filterValue: fil,
		currentFilter: filter,
		setFilter,
		filterFn: (r) =>
			r?.info?.costForTwo?.includes("200") ||
			r?.info?.costForTwo?.includes("250"),
		successMsg: "Budget-Friendly Restaurants",
	});
};

/** Mid-range ₹300 - ₹600 filter */
export const findRestaurants300to600 = (
	res,
	setRes,
	fil,
	filter,
	setFilter
) => {
	const priceRanges = ["300", "350", "400", "450", "500", "550", "600"];
	applyFilter({
		res,
		setRes,
		filterValue: fil,
		currentFilter: filter,
		setFilter,
		filterFn: (r) =>
			priceRanges.some((price) =>
				r?.info?.costForTwo?.includes(price)
			),
		successMsg: "Discover Dining Deals: ₹300 - ₹600",
	});
};
