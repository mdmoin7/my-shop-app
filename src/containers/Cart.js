import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.productId}>
            <td>{item.productName}</td>
            <td>{item.productPrice}</td>
            <td>
              <button onClick={() => dispatch(removeItem(item.productId))}>
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Cart;
