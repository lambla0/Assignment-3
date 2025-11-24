Phase 1

app.js – Sets up Express, connects to Mongodb, configures ejs, serves static files, and registers /cars routes.

models/Car.js – Defines the Car schema with fields for make, model, year, price per day, and status.

routes/cars.js – Handles all crud operations for cars list, add, edit, delete.

views/cars/index.ejs – Displays all cars in a Bootstrap table with Edit and Delete buttons.

views/cars/new.ejs – Form to add a new car with Bootstrap styling.

views/cars/edit.ejs – Form to edit an existing car, pre-populated with current data.

public/css/style.css – Custom CSS for light background, hover effect on table rows, good font, and button styling.

Phase 2

views/home.ejs – Splash page for the application. Includes a heading, a description, and buttons to navigate to Car List or Add Car. Uses shared navbar and footer for consistent navigation. Centered layout with Bootstrap classes for a good look.

views/cars/index.ejs – Displays all cars from the database in a Bootstrap table with striped rows, hover effect, and shadow styling. Each row includes Edit and Delete buttons. Delete buttons have a JavaScript confirmation popup. Added a Back to Home button for easy/cooler navigation.

views/cars/new.ejs – Form to add a new car. Includes fields for Make, Model, Year, Price per Day, and Status. Styled with a card like container with shadow, padding, and rounded corners for better visuals.

views/cars/edit.ejs – Form to edit an existing car. allows inputs with current car data from the database. Includes Update and Cancel buttons to make it user-friendly. Also uses the card styling for consistency with the new car form.

views/partials/navbar.ejs – Shared navbar included on all pages. Contains links to Home, Car List, and Add Car, with the brand Car Rentals on the left. Resposnive design.

views/partials/footer.ejs – Shared footer included on all pages. Sticks to the bottom of the screen using min-vh-100 and flexbox styling. Displays the current year dynamically.

public/css/style.css – has a dynamic gradient background, card like containers for forms and tables, good table styling, hover effects, and visually nice button styles. Adds responsive spacing, better font choices, and an overall professional yet simple theme.

.env & .gitignore – .env stores the MongoDB URI and other sensitive data securely. .gitignore makes the .env, node_modules, and system files are not committed to GitHub.