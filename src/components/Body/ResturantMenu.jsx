import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "../../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  const { restaurantId } = useParams();
  const menuListItem = useResturantMenu(restaurantId);
  const [showIndex, setShowIndex] = useState(null);
  
  if (menuListItem === null) return <Shimmer />;

  const { name, cuisines, avgRating, id } = menuListItem?.cards[0].card?.card?.info;
  // const { itemCards } =
  //   menuListItem?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  const categories =
    menuListItem?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className=" w-6/12  mx-auto my-4 p-4" key={id}>
      <div className="text-xl font-bold">{name}</div>
      <div className="text-gray-300">{cuisines}</div>
      <span className="flex mb-4 ">
      <img
          width="20"
          height="20"
          src="https://img.icons8.com/fluency/16/star--v1.png"
          alt="star--v1"
          className="mx-10px mr-2"
        />
         {avgRating}
      </span>
        
      {categories.map((category, index) => (
        <ResturantCategory
          key={category?.card?.card?.title}
          category={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowItems={() =>  setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default ResturantMenu;
