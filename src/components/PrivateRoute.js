import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute(props) {
  const isLoggedIn = useSelector((store) => !!store.user);
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return props.children;
}
export default PrivateRoute;
