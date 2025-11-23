Phase 1

app.js – Sets up Express, connects to Mongodb, configures ejs, serves static files, and registers /cars routes.

models/Car.js – Defines the Car schema with fields for make, model, year, price per day, and status.

routes/cars.js – Handles all crud operations for cars list, add, edit, delete.

views/cars/index.ejs – Displays all cars in a Bootstrap table with Edit and Delete buttons.

views/cars/new.ejs – Form to add a new car with Bootstrap styling.

views/cars/edit.ejs – Form to edit an existing car, pre-populated with current data.

public/css/style.css – Custom CSS for light background, hover effect on table rows, good font, and button styling.