import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Product = ({ product }) => (
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
  </Card>
);

export default Product;
