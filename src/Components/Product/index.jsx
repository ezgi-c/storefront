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

import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    product.product.inStock > 0 &&
      dispatch(cartSlice.actions.setCartItems(product));
    product.product.inStock > 0 &&
      dispatch(updateProductStock({ product: product.product, stock: -1 }));
  };

  return (
    <Card>
      <CardHeader
        title={product.name}
        subheader={`Category: ${product.category}`}
      />
      <CardMedia
        component="img"
        height="200"
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
      </CardContent>
      <Button onClick={() => handleAddToCart({ product })}>Add to Cart</Button>
      <Link to={`/product/${product.name}`}>Product Details</Link>
    </Card>
  );
};

export default Product;
