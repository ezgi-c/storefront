import { useSelector } from "react-redux";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Button,
} from "@mui/material";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const total = cartItems.reduce((acc, item) => {
    return acc + item.product.price;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your purchase!");
  };

  return (
    <div style={{ margin: "auto", width: "600px", padding: "40px" }}>
      <h2>Order Summary</h2>
      <TableContainer>
        <Table>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.product._id}>
                <TableCell>{item.product.name}</TableCell>
                <TableCell>${item.product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell>
                <h3>Total</h3>
              </TableCell>
              <TableCell>
                <h3>${total}</h3>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "40px",
        }}
      >
        <TextField label="Billing Address" />
        <TextField label="Shipping Address" />
        <TextField label="Credit Card Number" />
        <TextField label="Expiration Date" />
        <Button type="submit" variant="contained">
          Place your order
        </Button>
      </form>
    </div>
  );
}
