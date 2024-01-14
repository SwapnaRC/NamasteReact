import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../../utils/slice/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearItems = () => {
    dispatch(clearItem());
  };
  return (
    <div className=" w-6/12 text-center m-4 p-4 ">
      <div className="font-bold text-2xl">Cart</div>
      <div className="flex justify-end  ">
        <button
          className="  p-2 mx-16 rounded text-black underline bg-transparent"
          onClick={handleClearItems}
        >
          Clear Items
        </button>
      </div>

      {cartItems?.length === 0 && (
        <h1>cart items are empty please add some items</h1>
      )}
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
