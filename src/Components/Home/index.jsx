import Products from "../Products";
import Categories from "../Categories";
import SimpleCart from "../SimpleCart";

export default function HomePage() {
  return (
    <>
      <SimpleCart />

      <Categories />
      <Products />
    </>
  );
}
