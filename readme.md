# WorthSelf Project Documentation

Welcome to the **WorthSelf** project repository! This project powers the WorthSelf e-commerce platform, encompassing both the **Backend** and **Frontend** components. The backend is built with **NestJS** in a **Hexagonal Architecture**, while the frontend will be detailed below. This platform provides essential features to manage product inventory, customer accounts, and transactions.

## Table of Contents
- [Modules](#modules)
  - [Transactions Module](#transactions-module)
  - [Stocks (Inventory) Module](#stocks-inventory-module)
  - [Customer Module](#customer-module)
- [Frontend](#frontend) *(To be filled in later)*
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Modules
---

## API Documentation

You can access the full API documentation for **WorthSelf Backend** through the following Postman link:

[API Documentation - Postman](https://documenter.getpostman.com/view/40588571/2sAYJ3FMYq)

This documentation includes detailed information on all available endpoints, request formats, and response structures to help you interact with the API seamlessly.

---

### Transactions Module

The **Transactions Module** manages the creation and retrieval of payment receipts for purchased products. It ensures that every transaction is recorded and accessible for both customers and administrators.

- **`getById`**: Retrieves a transaction receipt by its unique identifier, providing details such as payment method, amount, and items purchased.
  
- **`create`**: Creates a new transaction receipt upon successful payment, capturing customer details, product items, total cost, and payment status.

This module ensures transparency and tracking for all payments made within the store.

---

### Stocks (Inventory) Module

The **Stocks (Inventory) Module** handles the management of product inventory within the WorthSelf platform. It provides the ability to monitor product availability, stock levels, and manage large catalogs.

- **`getStocksById`**: Retrieves detailed information about a specific product in the inventory using its unique identifier, including stock quantity, product details, and availability.
  
- **`getStocksPaginated`**: Fetches a paginated list of products, enabling efficient browsing and management of large inventories.

This module is key to ensuring that stock data remains up-to-date and accessible.

---

### Customer Module

The **Customer Module** manages customer account-related operations, ensuring secure login and personalized experiences within the platform.

- **`Login`**: Allows customers to securely log into their accounts, accessing order history, preferences, and other personalized features.
  
- **`getCustomerById`**: Retrieves detailed customer information by their unique identifier, including contact information, purchase history, and account preferences.

This module ensures secure and efficient management of customer accounts, providing a personalized shopping experience.

---

## Frontend

*(To be filled in later)*

Here, we will document the frontend aspects of the WorthSelf platform, detailing the technologies, frameworks, and important components used for the client-side of the application.

