# Lab 39: Redux - Additional Topics

__Virtual Store Phase 4:__
Complete work on the Virtual Store by adding detail pages for individual products as well as the the cart checkout page.

## Phase 4 Requirements

In phase 4, we will be completing work on our Virtual Store by adding two full page views to the application: Product Details and Checkout.

For this phase, we are now adding the following new user stories to meet the new requirements.

- ✅ As a user, I want to see a full detail view of a product so that I can make a more informed choice about purchasing it.
- ✅ As a user, I want to view my full cart and initiate the checkout process so that I can purchase my items and have them delivered.

## Technical Requirements

- ✅ Add routing to the application.
- ✅ Link every product to a page that displays the full product details.
- ✅ Link the “Cart” summary in the header to a full shopping cart page with shipping/payment forms.
- Additionally, we will be swapping out our Redux store and replacing it with a store built using Redux Toolkit.

### Application Architecture

- ✅ Add `<BrowserRouter />` to your application.
  - ✅ Create a `<Storefront />` component to contain all of the components viewable form the / route.
- ✅ Create a new page component: `<ProductDetails />`.
  - ✅ Alter each product on the listing screen to have a new “Product Details” button.
  - ✅ When clicked, `<Link to...>` /products/## where ## is the product ID.
  - On this page, show an expanded view of the product, including placeholders for additional information such as reviews, suggestions, etc.
- ✅ Create a new page component: `<ShoppingCart />`
  - ✅ Link to this page from the `Cart (x)` in the header, on the `/cart` route.
  - On this page, show:
    - ✅ A summary of items in tabular format.
    - ✅ A final order total.
    - ✅ A form allowing the user to enter their billing/shipping address and credit card information.
    - ✅ On submit, simply draw an alert that says “Thank you for your purchase”
      - We will __not__ be processing transactions or storing orders just yet.

### Notes on State Management

- ✅ While we will still be using Redux, the technical requirement for this phase is to refactor existing actions and reducers into the new __Redux Toolkit__ framework/pattern.
  - Note that there is no new state functionality (the two pages are read-only), but the underlying architecture will be new.

_RECOMMENDATION: complete the core features first. Once the new pages are added and properly working, then begin the work of swapping the current Redux Store for the Redux Toolkit version of the store. Do this tactically, so that you can easily switch between implementations if you need to._


<!-- # Lab 38: Redux - Asynchronous Actions

__Virtual Store Phase 3:__ 
Connect the Virtual Store to an API to retrieve live data from your data source, using `thunk` to enable asynchronous actions.

## Phase 3 Requirements

In phase 3, we will be connecting our Virtual Store to a live API so that our data is persistent and able to be separately managed.

For this phase, we are now adding the following new user stories to meet the new requirements.

- As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock.
- As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it.

## Technical Requirements / Notes

High level development tasks that address the above end user requirements and workflow.

- Continue to use Material UI Components for layout and styling.
- Load the category and product list from a remote API on page load.
- Update the product quantity in stock when adding items to (or removing from) the cart.
- Continue to use multiple reducers.

### Notes on State Management

- You will need to use `useEffect()` to dispatch a load action on the initial page load.
  - This will need to use `thunk` as it will be asynchronous.
- When adding/removing/updating `products` in the cart, the action/reducer will need to update the `product` on the server.
  - Perform the appropriate `post`, `put`, or `delete` via API call (using thunk in an async action) on each of these actions as performed by the users.

_NOTE: When write operations happen in the cart, the products are changed permanently (inventory count changes on the server), your product list in state will be instantly out of sync with what’s on the server. How (or when) will you re-sync the state of your application with the state of the persisted data on the server? Perhaps ensure that only products that have an available inventory of > 0 can be shown on the application as users browse the categories._ -->

<!-- # Lab 37: Redux - Combined Reducers

__Virtual Store Phase 2:__ Continue work on the e-Commerce storefront, breaking up the store into __multiple reducers__ and sharing functionality/data between components.

For this phase, we are now adding the following new __user stories__ to meet the new requirements.

- ✅ As a user, I want to choose from products in the list and add them to my shopping cart.  
- ✅ As a user, I want to see the products that I’ve added to my shopping cart in a growing list on the side of the page.  
- ❓ As a user, I want to change the quantity of items I intend to purchase in the header. i.e. CART (1)  
- ✅ As a user, I want to be able to remove an item from my shopping cart.  

## Application Flow

- ✅ User sees a list of categories.
- ✅ Chooses a category and sees a list of products.
- ✅ Clicks the “Add to Cart” button on any product.
- ✅ Sees a list of all products in the `<SimpleCart />` side menu.
- ✅ Clicks the delete button on an item and sees the item removed (see stretch goals for this lab).
- ✅ Changes the cart total in the header. If two different products are in the cart you should see: CART (2)

## Technical Requirements / Notes

the high level development tasks that address the above end user requirements and workflow

- ✅ Continue to use Material UI Components for layout and styling.
- ✅ Add a “Cart” indicator to the header, like this: __Cart (0)__.
- ✅ Create a new __Cart__ component to show the items in the user’s cart.

### Application Architecture

- ✅ Add a new component to the page: `<SimpleCart />`
  - ✅ Displays a short list (title only) of products in the cart.
  - ✅ This should be present at all times.
- Home Page Operation:
  - When the user selects (clicks on) a category:
    - ✅ Identify that category as selected.
    - ✅ Show a list of products associated with the category, that have a quantity > 0.
    - ✅ Add an “add to cart” button to each product.
  - ✅ When a user clicks the “add to cart” button, add the item to their cart:
    - ✅ In the `<SimpleCart />` component, show a running list of the items in the cart (just the titles).
    - ✅ Change the `(0)` indicator in the header to show the actual number of items in the cart.
    - ✅ Reduce the number in stock for that product.

### Manage state in a Redux store with multiple reducers/actions

- Categories
  - ✅ State should be a list of categories as well as the active one.
    - ✅ Each category should have a normalized name, display name, and a description.
  - ✅ Create an action that will trigger the reducer to change the active category.
  - ✅ Update the active category in the reducer when this action is dispatched.
- Products
  - ✅ State should be a list of all products.
    - ✅ Each product should have a category association, name, description, price, inventory count.
  - ✅ Create an action that will trigger the reducer to filter the product list when the active category is changed.
    - Hint: Different reducers can respond to the same actions.
  - ✅ Create a reducer that will filter the products list based on the active category.
  - ✅ Create an action that will trigger the reducer to reduce the stock counter.
  - ✅ Create a reducer that reduces the # in stock when that action is dispatched.
- Cart
  - ✅ State should be an array of products that have been added (all product details).
  - ✅ Create an action that will trigger the reducer to add the selected item to the cart.
    - Hint: this could be the same action type as you create for the Products reducer.
  - ✅ Create a reducer that adds the product to the array of items in state.

### Stretch Goal

✅ Add a “Remove from Cart” button to each item in the cart.

- ✅ Change the indicator in the menu.
- ✅ Add 1 back to the # in stock for that product.

### Testing

Behavioral tests to assert all user stories are properly completed and operational. -->

<!-- # Lab: Class 36 - Application State with Redux

-Virtual Store Phase 1:- For this assignment, you will be starting the process of creating an e-Commerce storefront using React with Redux, coupled with your live API server.

## Before you begin

Create a UML diagram of the -Virtual Store- architecture on a whiteboard before you start.

## Phase 1 Requirements

In this first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors.

This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner.

The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
- As a user, I want to choose a category and see a list of all available products matching that category.
- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.

## Technical Requirements / Notes

- Create a visually appealing site using Material UI.
- Use a Redux Store to manage the state of categories and items in the store.
- Display a list of categories from state.
- When the user selects (clicks on) a category:
  - Identify that category as selected (change of class/display).
  - Show a list of products associated with the category.

### Application Architecture

Create the Virtual Store application as follows:

- Begin with creating your application using `create-react-app`.
- Install Material UI as a dependency.
- Write an `<App />` component that serves as the container for all sub-components of this application.
  - A `<Header />` component which shows the name of your virtual store.
  - A `<Footer />` component which shows your copyright and contact information.
  - A `<Categories />` component:
    Shows a list of all categories.
    Dispatches an action when one is clicked to “activate” it.
  - A `<Products />` component:
    Displays a list of products associated with the selected category.

### Notes on constructing the Redux Store:

- Categories
  - State should contain a list of categories as well as the active category.
    - Each category should have a normalized name, display name, and a description.
  - Create an action that will trigger the reducer to change the active category.
  - Update the active category in the reducer when this action is dispatched.
- Products
  - State should be a list of all products.
    - Each product should have a category association, name, description, price, inventory count.
  - Create an action that will trigger when the active category is changed.
    - HINT: Multiple reducers can respond to the same actions.
  - Create a reducer that will filter the products list based on the active category.
- Active Category
  - State should store active category.
    - Other components (products, etc) might need to reference this.

### Testing

Testing for the core behaviors (user stories) of the application is required. -->
