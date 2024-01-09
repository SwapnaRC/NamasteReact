import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ category, showItems, setShowItems }) => {
  const handleClick = () => { 
    setShowItems();
  };
  return (
    <div className="my-4 p-4 shadow-lg  bg-gray-50">
      {/* HEADER OF ACCORDION */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {category.title} ({category.itemCards.length})
        </span>
       {!showItems ? <span> 🔽</span>  :<span>🔼 </span>} 
      </div>

      {/* Body of accordion */}
      {showItems && (
        <div className="flex justify-between">
          <ItemList items={category.itemCards}  />
        </div>
      )}
    </div>
  );
};
export default ResturantCategory;
