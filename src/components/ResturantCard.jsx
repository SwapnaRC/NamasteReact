import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  return (
    <div
      data-testid="resCard"
      className="hover:shadow-lg hover:bg-slate-100 border-cyan-950-200 p-2  w-48 "
      key={resData?.info?.id}
    >
      <img
        alt="restimage"
        style={{ width: "220px", height: "190px" }}
        src={IMAGE_CDN_URL + resData?.info?.cloudinaryImageId}
        className=" rounded-lg"
      />
      <div>
        <b> {resData?.info?.name}</b>
      </div>
      <div className="text-lg font-bold">
        <div className="float-left">
           {resData?.info?.avgRating && (
          <img
            width="16"
            height="16"
            src="https://img.icons8.com/fluency/16/star--v1.png"
            alt="star--v1"
            className="mx-10px pt-1"
          />
        )}
        </div>
        <div className="pl-6">
        {resData?.info?.avgRating}
        </div>
        {resData?.info?.sla?.deliveryTime && (
          <span className="deliveryTime">
            {resData?.info?.sla?.deliveryTime} minutes
          </span>
        )}
      </div>
      <div className="resCusine">
        {resData?.info?.cuisines?.length >= 50
          ? resData?.info?.cuisines?.join(", ")
          : `${resData?.info?.cuisines?.join(", ").substring(0, 50)}...`}
      </div>
      <div className="rescostfor">{resData?.info?.costForTwo} </div>
    </div>
  );
};

// Higher Order component
export const WithPromtedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <>
        <label className="rounded bg-black text-white m-2 p-1 absolute text-sm">
          Promoted
        </label>
        <ResturantCard {...props} />
      </>
    );
  };
};
export default ResturantCard;
