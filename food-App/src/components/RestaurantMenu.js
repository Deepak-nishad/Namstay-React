import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  console.log(resInfo);
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, avgRating } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  // console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR, 31);

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);
  // console.log(itemCards);
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl"> {name}</h1>
      <h2 className="font-bold my-5 text-2xl">
        {costForTwoMessage} || Rating {avgRating}
      </h2>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
