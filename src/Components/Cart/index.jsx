// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import cartSlice from "../../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  // const dispatch = useDispatch();

  // const handleRemoveItem = (e) => {
  //   const category = e.target.value;
  //   dispatch(
  //     cartSlice.actions.removeItem(
  //       category === "" ? undefined : category
  //     )
  //   );
  // };

  return (
    <article>
      <ul>
        {cartItems.map((item) => (
          <li key={item.product.id}>
            <p>{item.product.name}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Cart;
