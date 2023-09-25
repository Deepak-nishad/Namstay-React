import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, avgRating } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { cards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  // console.log(cards, 31);

  const { itemCards } = cards[2].card.card;

  console.log(itemCards);
  return (
    <div className="menu">
      <h1> {name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h3>Rating {avgRating}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} = {" Rs. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
