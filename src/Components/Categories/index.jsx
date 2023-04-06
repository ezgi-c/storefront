import { useDispatch } from "react-redux";
import productSlice from "../../store/product";

const Categories = () => {
  const dispatch = useDispatch();
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
      <h3>Browse our Categories</h3>
      <select
        onChange={(e) => {
          const category = e.target.value;
          dispatch(
            productSlice.actions.setActiveCategory(
              category === "" ? undefined : category
            )
          );
        }}
      >
        <option value="">All</option>
        <option value="electronics">Electornics</option>
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
      </select>
    </section>
  );
};

export default Categories;
