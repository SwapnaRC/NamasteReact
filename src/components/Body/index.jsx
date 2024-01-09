import { useContext, useEffect, useState } from "react";
import ResturantCard, { WithPromtedLabel } from "../ResturantCard/index";
import Shimmer from "../Body/Shimmer";
import { Link } from "react-router-dom";
import Search from "../Search";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [listofResturant, setListofResturant] = useState([]);
  const [searchText, setSearchText] = useState();
  const [searchFilterList, setSearchFilterList] = useState([]);
  
  const ResturantCardPromted = WithPromtedLabel(ResturantCard)
  const { LoggedInUserName, setUserName} = useContext(UserContext)
  useEffect(() => {
    fetchResturantData();
  }, []);

  const fetchResturantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9853591&lng=77.7081261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const responseResturant =
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListofResturant(responseResturant);
    setSearchFilterList(responseResturant);
  };
  // console.log(listofResturant);
  return listofResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        <button
          className="m-2 px-2 bg-orange-400 h-10 rounded-lg"
          onClick={() => {
            const filterdResList = listofResturant.filter(
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
          setSearchFilterList={setSearchFilterList}
        />
      </div>
      {/* setting the username using input box */}
      <input className="p-2 border-black border " value={LoggedInUserName}  onChange={(e) => setUserName(e.target.value)}/>
      <div className="flex flex-wrap">
        {searchFilterList.length > 0 ? (
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
