import { Grid } from "@mui/material";
import Product from "../Product";
import { filteredProducts } from "../../store/productSlice";
import { useSelector } from "react-redux";
import "./products.css";

const Products = () => {
  const products = useSelector(filteredProducts);

  return (
    <Grid className="products" container spacing={4}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.name}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;

//   return (
//     <section>
//       {products.map((product) => (
//         <Product product={product} />
//       ))}
//     </section>
//   );
// };
