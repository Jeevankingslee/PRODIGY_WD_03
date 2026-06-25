# PRODIGY_WD_03

# Local Store E-Commerce Platform

A full-stack e-commerce web application built as part of the Prodigy InfoTech Web Development Internship.

## Features

### User Authentication
- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes

### Product Management
- Product Listings
- Product Images
- Product Descriptions
- Product Prices

### Shopping Cart
- Add Products to Cart
- Remove Products from Cart
- View Cart Items
- Calculate Total Price

### Orders
- Place Orders
- View Orders

### Database
- MongoDB Integration
- Mongoose Models

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcrypt

---

## Project Structure

```
PRODIGY_WD_03
│
├── backend
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   │
│   ├── routes
│   │   ├── auth.js
│   │   ├── products.js
│   │   └── orders.js
│   │
│   ├── seed.js
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── css
│   │   └── style.css
│   │
│   ├── js
│   │   ├── register.js
│   │   ├── login.js
│   │   ├── products.js
│   │   ├── cart.js
│   │   └── dashboard.js
│   │
│   ├── register.html
│   ├── login.html
│   ├── products.html
│   ├── cart.html
│   ├── orders.html
│   └── dashboard.html
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Jeevankingslee/PRODIGY_WD_03.git
```

### Move into Project

```bash
cd PRODIGY_WD_03
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## Seed Products

```bash
node seed.js
```

---

## Run Server

```bash
node server.js
```

Server will run on:

```text
http://localhost:5000
```

---

## API Routes

### Authentication

#### Register

```http
POST /api/auth/register
```

#### Login

```http
POST /api/auth/login
```

---

### Products

#### Get All Products

```http
GET /api/products
```

---

### Orders

#### Place Order

```http
POST /api/orders
```

#### Get User Orders

```http
GET /api/orders
```

---

## Screenshots

- Register Page
- Login Page
- Products Page
- Cart Page
- Orders Page

(Add screenshots here if required.)

---

## Internship Task

Task 03 - Local Store E-Commerce Platform

Requirements Completed:

- Product Listings
- Product Images
- Product Prices
- Shopping Cart
- User Authentication
- JWT Security
- MongoDB Database
- Order Placement

---

## Author

**Jeevan Kingslee**

B.Tech Artificial Intelligence and Data Science

Prodigy InfoTech Web Development Internship
