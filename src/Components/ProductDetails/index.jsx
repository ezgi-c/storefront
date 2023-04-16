import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productSelector } from "../../store/productSlice";

export default function ProductDetails() {
  const { name } = useParams(); //   => (/product/Cookies) => {name: "Cookies"}
  const product = useSelector(productSelector(name));

  return (
    <>
      <h2>{product.name}</h2>
      <figure>
        <img
          src={`https://source.unsplash.com/random?${product.name}`}
          alt={`Portrait of ${name}`}
        />
        <p>{product.inStock}</p>
        <p>{product.price}</p>
      </figure>
    </>
  );
}
