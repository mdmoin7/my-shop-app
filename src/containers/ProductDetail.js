import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  return (
    <div>
      <h1>Product detail</h1>
      <h3>PID: {params.pid}</h3>
    </div>
  );
}
export default ProductDetail;
