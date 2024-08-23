import { useDispatch } from "react-redux";
import { changeCurrency } from "../store/slices/currencySlice";

function Currency() {
  // every action must be dispatched
  const dispatch = useDispatch();
  return (
    <select onChange={(ev) => dispatch(changeCurrency(ev.target.value))}>
      <option>INR</option>
      <option>USD</option>
      <option>CAD</option>
      <option>GBP</option>
      <option>EUR</option>
    </select>
  );
}
export default Currency;
