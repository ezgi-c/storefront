import cartSlice from "./cartSlice";

describe("Cart Reducers", () => {
  test("updates cartItems", () => {
    // Arrange
    // define an initial state
    const initialState = {
      cartItems: [],
    };

    const newItem = {
      name: "TV",
      category: "electronics",
      price: 699.0,
      inStock: 5,
      id: 1,
    };

    // Act
    const state = cartSlice.reducer(
      initialState,
      cartSlice.actions.setCartItems(newItem)
    );

    // Assert
    // check that the state changed as expected
    expect(state.cartItems).toEqual([newItem]);
  });

  test.skip("removes cart item", () => {
    // Arrange
    const initialState = {
      cartItems: [
        { product: { id: 1, name: "TV" } },
        { product: { id: 2, name: "Radio" } },
        { product: { id: 3, name: "Shirt" } },
      ],
    };
    const itemIdToRemove = 2;
    // Act
    const state = cartSlice.reducer(
      initialState,
      cartSlice.actions.removeCartItem(itemIdToRemove)
    );

    // Assert
    expect(state.cartItems).toEqual([
      { product: { id: 1, name: "TV" } },
      { product: { id: 3, name: "Shirt" } },
    ]);
  });
});
