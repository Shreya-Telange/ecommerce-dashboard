E-commerce Product Dashboard :
This is a simple e-commerce product dashboard built using React and TailwindCSS. The application allows users to browse products, view detailed information, add products to a shopping cart, and simulate the checkout process.

Core Features:

Home Page:-
Displays a grid of products with key details such as name, price, and thumbnail image.
Includes a search bar for filtering products by name or category.
Provides a dropdown or filter options to sort products by price, rating, and other criteria.
Product Details Page
Shows detailed information about a selected product, including name, price, description, images, and ratings.
Features an "Add to Cart" button to add the product to the shopping cart.

Shopping Cart Page:-
Displays the items added to the cart with their quantities and prices.
Allows users to update item quantities or remove items from the cart.
Shows the total price of all items in the cart.
Includes a "Checkout" button to simulate the checkout process.

Mock Data:-
Product data is fetched from the Fake Store API, which provides endpoints for:
/products to retrieve the list of products.
/products/:id to retrieve detailed information for a specific product.

Styling:-
The app is styled using CSS to ensure responsiveness across different devices and screen sizes.
State Management.
React's useState and useContext (React Context API) are used to manage the shopping cart state.

Routing:-
React Router is used for navigation between the following pages:
Home Page (/)
Product Details Page (/product/:id)
Shopping Cart Page (/cart)

Technologies Used:-
React
React Router
React Context API (for state management)
Fake Store API (for mock product data)
