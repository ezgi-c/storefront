import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cartSlice from "../../store/cartSlice";

import { Box, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(cartSlice.actions.removeCartItem(itemId));
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
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.product.id}>
              <ListItemText primary={item.product.name} />
              <IconButton onClick={() => handleRemoveItem(item.product.id)}>
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
