import { useEffect } from "react";
import Product from "../components/Product";
import useProducts from "../hooks/useProducts";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";

function ProductList() {
  // const [state_variable, update_state_func]= useState(initial_value);
  const plist = useProducts();
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // ?page=10&pincode=123456
    console.log("PAGE", queryParams.get("page"));
  }, [queryParams]);

  return (
    <div>
      {plist.map((item) => (
        <Product
          key={item.productId}
          data={item}
          btnClick={(id) => {
            dispatch(addItem(item));
            navigate("/cart");
          }}
        />
      ))}

      <button onClick={() => setQueryParams({ page: 4 })}>Page 4</button>
    </div>
  );
}
export default ProductList;
