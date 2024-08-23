import { Routes, Route } from "react-router-dom";
import Demo from "./Demo";
// import ProductList from "./containers/ProductList";
import Checkout from "./containers/Checkout";
import ErrorPage from "./containers/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetail from "./containers/ProductDetail";
import Cart from "./containers/Cart";
import Login from "./containers/Login";
import { lazy, Suspense } from "react";

const LazyProductList = lazy(() => import("./containers/ProductList"));

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/products" element={<LazyProductList />} />
        <Route path="/detail/:pid" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}
export default AppRouter;
