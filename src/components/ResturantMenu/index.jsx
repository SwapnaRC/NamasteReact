import React from "react";
import { useParams } from "react-router-dom";
import "./menu.css";
import Shimmer from "../Body/Shimmer";
import useResturantMenu from "../../utils/useResturantMenu";

const ResturantMenu = () => {
  const { restaurantId } = useParams();
  const menuListItem = useResturantMenu(restaurantId);

  if (menuListItem === null) return <Shimmer />;

  const { name, cuisines, avgRating } = menuListItem?.cards[0].card?.card?.info;
 
  const { itemCards } =
    menuListItem?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  return (
    <div>
      <h1>{name}</h1>
      <div>{cuisines}</div>
      <div>{avgRating}</div>
      {itemCards.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="menu-list-conatiner">
            <div>
              <b>{item?.card?.info?.name}</b>
            </div>
            <div>Rs. {item?.card?.info?.price / 100}</div>
          </div>
        );
      })}
    </div>
  );
};
export default ResturantMenu;
