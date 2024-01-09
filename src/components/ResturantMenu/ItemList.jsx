import { IMAGE_CDN_URL } from "../../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="">
      {items.map((item) => (
        <div
          className="p-2 m-2 border-b-2 border-b-gray-200 text-left     flex justify-between"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className=" py-2 font-bold text-md">{item?.card?.info?.name}</div>
              <div>
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </div>
            <p className="text-xs  text-gray-400">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 p-4 absolute-auto">
              {item?.card?.info?.showImage && (
                <img
                  src={IMAGE_CDN_URL + item.card.info.imageId}
                  className=" border-2 rounded-2xl  h-24 w-28"
                />
              )}
              <button className="p-1 bg-black text-white shadow-lg rounded mx-6 ">Add +</button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
