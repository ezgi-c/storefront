# Lab 37: Redux - Combined Reducers

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

Behavioral tests to assert all user stories are properly completed and operational.

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
