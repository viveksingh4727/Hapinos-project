import { useEffect, useState } from "react";
import {RestCard, withPromotedLabel} from "./RestCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRest, setFilteredRest]= useState([]);


  const [searchText, setSearchText] = useState("");

  const RestCardPromoted = withPromotedLabel(RestCard);
  // Whenever state vairable update, react triggers reconciliation cycle ( re-renders the component)

  console.log(listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.88230210366532&lng=80.97087476402521&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //Optional Chaining
    setFilteredRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-amber-100 m-4 rounded-lg "
            onClick={() => {
              // Filter the restraunt and update the Ui
              //searchText
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRest(filteredRestaurant);
              
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (resl) => resl.info.avgRating > 4.4
            );
            setFilteredRest(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        
      </div>

      <div className="flex flex-wrap">
        {filteredRest.map((restaurant, index) => (
         <Link key={restaurant.info.id}
         to={"restaurants/" + restaurant.info.id}
         > 
         
         {restaurant.info.promoted ? <RestCardPromoted resData={restaurant}/> : <RestCard resData={restaurant} />}
         
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
