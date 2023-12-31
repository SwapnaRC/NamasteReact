import { useEffect, useState } from "react";
import { MENU_LIST_API } from "../utils/constants";

const useResturantMenu = (restaurantId) => {
  const [menuListItem, setMenuListItem] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menu = await fetch(
      MENU_LIST_API + restaurantId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const menuJson = await menu.json();
    setMenuListItem(menuJson?.data);
  };
  return menuListItem;
};

export default useResturantMenu;
