import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productSelector } from "../../store/productSlice";
import "./details.css";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import { useDispatch } from "react-redux";
import cartSlice from "../../store/cartSlice";
import { updateProductStock } from "../../store/productSlice";

export default function ProductDetails() {
  const dispatch = useDispatch();

  const { name } = useParams(); //   => (/product/Cookies) => {name: "Cookies"}
  const product = useSelector(productSelector(name));

  const handleAddToCart = (product) => {
    product.product.inStock > 0 &&
      dispatch(cartSlice.actions.setCartItems(product));
    product.product.inStock > 0 &&
      dispatch(updateProductStock({ product: product.product, stock: -1 }));
  };

  return (
    <section>
      <h1 style={{ textTransform: "uppercase" }}>{product.name}</h1>
      <Card style={{ width: "800px", margin: "3em" }}>
        <CardHeader subheader={`Category: ${product.category}`} />
        <CardMedia
          component="img"
          height="600"
          image={`https://source.unsplash.com/random?${product.name}`}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            Price: ${product.price}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            In stock: {product.inStock}
          </Typography>
          <Button onClick={() => handleAddToCart({ product })}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
