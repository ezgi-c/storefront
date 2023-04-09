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
import productSlice from "../../store/productSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(cartSlice.actions.setCartItems(product));
    dispatch(productSlice.actions.decreaseStock(product));
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
        image={product.image}
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
    </Card>
  );
};

export default Product;
