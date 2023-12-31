import React, { useEffect, useState } from "react";
import ResturantCard from "../ResturantCard/index";
import Shimmer from "../Body/Shimmer";
import "./body.css";
import { Link } from 'react-router-dom'
const Body = () => {
  //   {
  //     data: {
  //       id: "334475",
  //       name: "Domino's",
  //       uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93c",
  //       city: "1",
  //       area: "BTM Layout",
  //       totalRatingsString: "500+ ratings",
  //       avgRating: "4",
  //       deliveryTime: 29,
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334475",
  //       name: "Burger King",
  //       uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93b",
  //       city: "1",
  //       area: "BTM Layout",
  //       totalRatingsString: "500+ ratings",
  //       avgRating: "4.2",
  //       deliveryTime: 29,
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334475",
  //       name: "KFC",
  //       uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93f",
  //       city: "1",
  //       area: "BTM Layout",
  //       totalRatingsString: "500+ ratings",
  //       avgRating: "3.8",
  //       deliveryTime: 29,

  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //     },
  //   },
  // ];
  const [resList, setResList] = useState([]);
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
    console.log(json , 'json')
    const responseResturant =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(responseResturant, 'responseResturant')
    setResList(responseResturant);
    setSearchFilterList(responseResturant);
  };
console.log(resList, 'resList')
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body-container">
        <button
          className="filter-topratedres"
          onClick={() => {
            const filterList = resList.filter((res) => res.info.avgRating >= 4);
            setResList(filterList);
          }}
        >
          Top Rated Resturants
        </button>

        <input
          className="research"
          type="text"
          value={searchText}
          placeholder="Search your food..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="searchbtn"
          onClick={() => {
            const searchList = resList.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearchFilterList(searchList);
          }}
        >
          Search
        </button>
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
