import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import SimpleCart from "../SimpleCart";

export default function Storefront() {
  return (
    <>
      <Header />
      <SimpleCart />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
