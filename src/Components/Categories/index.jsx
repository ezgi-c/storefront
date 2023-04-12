import { useDispatch, useSelector } from "react-redux";

import productSlice from "../../store/productSlice";
import { Typography, FormControl, Select, MenuItem } from "@mui/material";

const Categories = () => {
  const categories = useSelector((state) => state.category.categories);

  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    dispatch(
      productSlice.actions.setActiveCategory(
        category === "" ? undefined : category
      )
    );
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Typography variant="h6">Browse our Categories</Typography>
      <FormControl>
        <Select defaultValue="" onChange={handleCategoryChange} displayEmpty>
          <MenuItem value="">All</MenuItem>
          {categories.forEach((category) => {
            <MenuItem value={category.name}>
              {category.name} key={category._id}
            </MenuItem>;
          })}
          {/* <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="food">Food</MenuItem>
          <MenuItem value="clothing">Clothing</MenuItem> */}
        </Select>
      </FormControl>
    </section>
  );
};

export default Categories;
