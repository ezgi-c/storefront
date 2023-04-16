import Cart from ".";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("SimpleCart", () => {
  test("renders items in cart", () => {
    const store = mockStore({
      cart: {
        cartItems: [
          {
            product: {
              id: 1,
              name: "TV",
            },
            quantity: 1,
          },
          {
            product: {
              id: 2,
              name: "Radio",
            },
            quantity: 2,
          },
        ],
      },
    });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const item1 = screen.getByText(/TV/i);
    const item2 = screen.getByText(/Radio/i);

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });
});
