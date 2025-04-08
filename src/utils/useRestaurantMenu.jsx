import { useEffect, useState } from "react";
import { MENU_API_END, MENU_API_START } from "./constants";
const useRestaurantMenu = (resId) => {

    const [ resInfo, setResInfo ] = useState(null);

    useEffect(()=> {
        //fetch data
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API_START + resId +  MENU_API_END);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;
