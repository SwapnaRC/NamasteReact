import { useContext, useEffect, useState } from "react";
import ResturantCard, { WithPromtedLabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Search from "./Search";

const Body = () => {
  const [listofResturant, setListofResturant] = useState([]);
  const [searchText, setSearchText] = useState();
  const [searchFilterList, setSearchFilterList] = useState([]);

  const ResturantCardPromted = WithPromtedLabel(ResturantCard);

  useEffect(() => {
    fetchResturantData();
  }, []);

  const fetchResturantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9853591&lng=77.7081261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const responseResturant =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListofResturant(responseResturant);
    setSearchFilterList(responseResturant);
  };
  console.log(listofResturant, "listofResturant");
  return listofResturant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        <button
          className="m-2 px-2 bg-orange-400 h-10 rounded-lg"
          onClick={() => {
            const filterdResList = listofResturant?.filter(
              (res) => res.info.avgRating >= 4.1
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
          setSearchFilterList={setSearchFilterList} />
        <button
          className="p-1 h-10 bg-green-400 my-2 m-1 w-24 rounded-lg"
          onClick={() => {
            const searchList = listofResturant.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearchFilterList(searchList);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {searchFilterList?.length > 0 ? (
          searchFilterList?.map((resturant) => {
            return (
              <Link
                to={"/restaurants/" + resturant?.info?.id}
                key={resturant?.info?.id}
              >
                {resturant?.info?.promoted ? (
                  <ResturantCardPromted resData={resturant} />
                ) : (
                  <ResturantCard resData={resturant} />
                )}
              </Link>
            );
          })
        ) : (
          <h1> No results found</h1>
        )}
      </div>
    </>
  );
};

export default Body;
