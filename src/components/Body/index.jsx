import { useEffect, useState } from "react";
import ResturantCard from "../ResturantCard/index";
import Shimmer from "../Body/Shimmer";
import "./body.css";
import { Link } from "react-router-dom";
import Search from "../Search";

const Body = () => {
  const [listofResturant, setListofResturant] = useState([]);
  const [searchText, setSearchText] = useState();
  const [searchFilterList, setSearchFilterList] = useState([]);

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
    setListofResturant(responseResturant);
    setSearchFilterList(responseResturant);
  };

  const searchHandler = () => {
    const searchList = listofResturant.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchFilterList(searchList);
  };

  return listofResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body-container">
        <button
          className="filter-topratedres"
          onClick={() => {
            const filterdResList = listofResturant.filter(
              (res) => res.info.avgRating >= 4
            );
            setListofResturant(filterdResList);
          }}
        >
          Top Rated Resturants
        </button>
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          listofResturant={listofResturant}
          setSearchFilterList={setSearchFilterList}
        />
      </div>
      <div className="restcard">
        {searchFilterList?.map((resturant) => {
          return (
            <Link
              to={"/restaurants/" + resturant?.info?.id}
              key={resturant?.info?.id}
            >
              <ResturantCard resData={resturant} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
