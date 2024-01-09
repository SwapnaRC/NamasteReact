import { useState, useEffect } from "react";

const useResturantData = () => {
  const [listofResturants, setListofResturants] = useState([]);

  useEffect(() => {
    fetchResturantData();
  }, []);

  const fetchResturantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9853591&lng=77.7081261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const responseResturant =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListofResturants(responseResturant);
    console.log(listofResturants, 'listofResturants')
    // setSearchFilterList(responseResturant);
  };
  return listofResturants;
};

export default useResturantData;