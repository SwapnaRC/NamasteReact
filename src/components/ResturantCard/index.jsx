import React from "react";
import "./resturantcard.css";
import { IMAGE_CDN_URL } from "../../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  return (
    <div className="restcontainer" key={resData?.info?.id}>
      <img
        alt="restimage"
        // width={150}
        src={IMAGE_CDN_URL + resData?.info?.cloudinaryImageId}
        className="resturantImage"
      />
      <div>
        <b> {resData?.info?.name}</b>
      </div>
      <div className="resRatingDelivery">
        {resData?.info?.avgRating && (
          <img
            width="16"
            height="16"
            src="https://img.icons8.com/fluency/16/star--v1.png"
            alt="star--v1"
            className="staricon"
          />
        )}
        {resData?.info?.avgRating}
        {resData?.info?.deliveryTime && <span className="deliveryTime">
          {resData?.info?.deliveryTime} minutes
        </span>}
      </div>
      <div className="resCusine">
        {resData?.info?.cuisines?.length >= 30
          ? resData?.info?.cuisines?.join(", ")
          : `${resData?.info?.cuisines?.join(", ").substring(0,55)}...`
        }
      </div>
      <div className="rescostfor">{resData?.info?.costForTwo} </div>
    </div>
  );
};

export default ResturantCard;
