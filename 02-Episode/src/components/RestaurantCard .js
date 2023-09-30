import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h4>{costForTwo}</h4>
      <h4> delivery {sla.deliveryTime} Minute </h4>
    </div>
  );
};

export default RestaurantCard;
