import { useState, useEffect } from "react";
import { getProducts } from "../services/ProductService";

function useProducts() {
  let [plist, setPlist] = useState([]);
  const getData = async () => {
    try {
      const res = await getProducts();
      // plist = res.data;
      setPlist(res.data);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return plist;
}
export default useProducts;
