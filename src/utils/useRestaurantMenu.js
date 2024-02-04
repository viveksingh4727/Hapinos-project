import { useEffect , useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const[resInfo,setResInfo] = useState();

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const resData = await fetch (MENU_API + resId);
        const json = await resData.json();
        setResInfo(json.data)
    };

    return resInfo;
};

export default useRestaurantMenu;