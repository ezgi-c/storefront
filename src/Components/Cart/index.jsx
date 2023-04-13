import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cartSlice from "../../store/cartSlice";

import { updateProductStock } from "../../store/productSlice";

import { Box, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(cartSlice.actions.removeCartItem(item));
    dispatch(updateProductStock({ product: item.product, stock: 0 }));
  };

  return (
    cartItems.length && (
      <Box
        sx={{
          position: "fixed",
          // top: 0,
          right: 0,
          width: 150,
          backgroundColor: "#61dafb",
          border: "3px solid white",
          borderRadius: "3px",
          padding: "1rem",
        }}
      >
        <List sx={{ maxHeight: "300px", overflowY: "scroll" }}>
          {cartItems.map((item) => (
            <ListItem key={item.product._id}>
              <ListItemText primary={item.product.name} />
              <IconButton onClick={() => handleRemoveItem(item)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    )
  );
};

export default Cart;
