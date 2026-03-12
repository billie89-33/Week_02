# Workspace Overview: Week 02

This workspace contains two distinct projects being developed as part of a learning module or exercise set: **ElectroShop** (an e-commerce platform) and a **Restaurant/POS Database System**.

## 1. ElectroShop (E-Commerce Project)
**ElectroShop** is a platform for imported electrical appliances. It aims to solve common shopping issues such as price comparison, lack of product information, and long wait times.

### Key Files
- `my-ecommerce.md`: Contains the problem statement, solutions, and project overview.
- `my-product-backlog`: Lists the functional requirements (Auth, User Profile, Store/Product, Cart, Order) and the basic user flow.
- `bring-it-to-javascript.js`: A JavaScript-based functional prototype for core features like:
  - User Registration & Login
  - Product Catalog (Samsung TV, Sony Headphones, etc.)
  - Cart management
  - User profile display

### Running the Prototype
To run the JavaScript prototype, use:
```powershell
node bring-it-to-javascript.js
```

---

## 2. Restaurant/POS Database (Postgres)
The `Postgres/` directory contains a relational database schema and mock data for a restaurant management system.

### Key Components
- **Entities:** Suppliers, Staff, Ingredients, Menu Items, Orders, and Recipes.
- **Relational Structure:**
  - `Suppliers` provide `Ingredients`.
  - `MenuItems` are composed of `Ingredients` via the `RecipeItems` join table.
  - `Orders` consist of multiple `OrderItems`.

### Key Files
- `Postgres/create-tables.sql`: The primary schema definition.
- `Postgres/01_suppliers.sql` to `07_order_items.sql`: SQL scripts for populating the database with mock data.
- `Postgres/query.sql`: Sample queries for the database.

### Setup Instructions
To initialize the database, execute the SQL files in the following order:
1. `Postgres/create-tables.sql`
2. `Postgres/01_suppliers.sql`
3. `Postgres/02_staff.sql`
4. `Postgres/03_ingredients.sql`
5. `Postgres/04_menu_items.sql`
6. `Postgres/05_recipe_items.sql`
7. `Postgres/06_orders.sql`
8. `Postgres/07_order_items.sql`

---

## 3. Design & Architecture
The workspace includes several design documents using Excalidraw:
- `business-model.excalidraw`: Likely for ElectroShop's business strategy.
- `er-diagram.excalidraw`: Entity-Relationship diagram for the database projects.
- `use_case-diagram.excalidraw`: Functional use cases for the systems.

## Development Conventions
- **Language:** JavaScript (Prototype), SQL (Database).
- **Style:** The project uses clear, descriptive naming for database tables and JavaScript functions.
- **Testing:** Currently, manual testing via `console.log` is used in the JavaScript prototype.
