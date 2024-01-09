import React, { useEffect, useState } from "react";
import "./menu.css";
import Shimmer from "../Body/Shimmer";
import {MENU_LIST_API } from '../../utils/constants'
import { useParams } from "react-router-dom";


const ResturantMenu = () => {
  const [menuListItem, setMenuListItem] = useState(null);
  const { restaurantId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menu = await fetch(
        MENU_LIST_API +
        restaurantId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const menuJson = await menu.json();
    setMenuListItem(menuJson?.data);
  };

  if (menuListItem === null) return <Shimmer />;

  const { name, cuisines, avgRating } = menuListItem?.cards[0].card?.card?.info;

  const { itemCards } = menuListItem?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
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
