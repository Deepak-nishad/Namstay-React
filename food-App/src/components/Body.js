import React from "react";
import { useState } from "react";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard ";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

// use index if you no unique key(In map function)

const Body = () => {
  // Local State Variable - Super powerful variable
  // const [listOfRestaurants, setListOfRestraunts] = useState(resList);
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [searchText, setSearchTexts] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  useEffect(() => {
    fetchData();
  }, []);



  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Search Resturant By Name"
            value={searchText}
            onChange={(e) => {
              setSearchTexts(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterResturants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filterResturants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg"
            onClick={() => {
              // filter something here
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Resturant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
