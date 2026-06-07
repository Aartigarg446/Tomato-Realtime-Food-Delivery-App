# 🍅 Tomato Realtime Food Delivery Platform

## ✨ Table of Contents

* [Introduction](#-introduction)
* [Features](#-features)
* [Custom Features Added](#-custom-features-added)
* [Technologies Used](#️-technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#-screenshots)
* [API Documentation](#-api-documentation)
* [Developer](#-developer)
* [Contact](#-contact)


## 📊 Introduction

Tomato Realtime Food Delivery Platform is a full-stack MERN application developed to streamline online food ordering and delivery management.

The platform provides a seamless experience for customers to browse food items, place orders, make secure online payments, and track orders in real time. It also includes an advanced admin dashboard for monitoring sales performance and managing customer orders efficiently.

The application was designed and enhanced with secure payment processing, real-time order tracking using Socket.io, and an analytics dashboard for monitoring business performance..

## 🚀 Features

### 👤 User Features

* User Registration and Login
* JWT-based Authentication & Authorization
* Browse Food Items by Category
* Add/Remove Items from Cart
* Secure Checkout Process
* Order Placement and Tracking

### 💳 Payment Features

* Stripe Payment Gateway Integration
* Secure Online Payment Processing
* Payment Verification Workflow

### 📦 Order Management

* Real-Time Order Status Tracking
* Food Processing → Out for Delivery → Delivered Workflow
* Live Order Synchronization using Socket.io

### 📊 Admin Features

* Manage Food Items
* Add New Menu Products
* Update Order Status
* Monitor Customer Orders

### 📈 Analytics Dashboard

* Total Revenue Tracking
* Total Orders Monitoring
* Delivered Orders Statistics
* Top Selling Food Item Analysis

### ⚡ Real-Time Features

* Socket.io Integration
* Instant Order Updates
* No Page Refresh Required
* Live Communication Between Admin and Customer Applications

### 🎨 User Experience

* Responsive User Interface
* Mobile-Friendly Design
* Fast Navigation with React Router


## 🚀 Custom Features Added

### 📊 Analytics Dashboard
- Total Revenue Tracking
- Total Orders Monitoring
- Delivered Orders Statistics
- Top Selling Food Analysis

### ⚡ Real-Time Order Tracking
- Socket.io based live communication
- Instant status updates without page refresh
- Synchronization between customer and admin applications

### 💳 Secure Payments
- Stripe Checkout Integration
- Payment Verification Workflow
- Secure Transaction Processing

## 🛠️ Technologies Used
- **Frontend:** React.js, React Context API, React Router
- **Backend:** Node.js, Express.js
- **Payment Gateway:** Stripe
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS

## Installation
### Prerequisites
- Node.js
- MongoDB

## 🚀 Run Locally — Step-by-step

Make sure you have Node.js (v20+ recommended) and npm installed.

### Clone the Repository
```sh
git clone https://github.com/Aartigarg446/Tomato-Realtime-Food-Delivery-App.git
cd Tomato-Realtime-Food-Delivery-App
```

## Backend Setup
Navigate to the backend directory:

```sh
cd backend

```
Install dependencies:

```sh
npm install
```

Create a .env file in the backend directory and add the following:

```sh
JWT_SECRET = "random#secret"
STRIPE_SECRET_KEY = "your_stripe_secret_key_here" 
⚠️ Note: Do not commit your .env file. Create your own keys from Stripe Dashboard and use them locally.

```
 
Start the backend server:

```sh
npm run server
```
## Frontend Setup
Navigate to the frontend directory:

```sh

cd frontend
```

Install dependencies:
```sh

npm install
```

Start the frontend server:
```sh

npm run dev
```

## Admin App Setup

Navigate to the admin directory:
```sh

cd admin
```

Install dependencies:

```sh
npm install
```

Start the admin app :
```sh
npm run dev
```

## Usage

### Customer Application
- Register and login using JWT Authentication
- Browse food items by category
- Add products to cart and place orders
- Complete payments securely using Stripe Checkout
- Track order status in real-time

### Admin Panel
- Add, update and manage food items
- Monitor all customer orders
- Update order status (Food Processing → Out for Delivery → Delivered)
- View business analytics including:
  - Total Revenue
  - Total Orders
  - Delivered Orders
  - Top Selling Food Item

### Real-Time Features
- Instant order status synchronization using Socket.io
- Customers receive live order updates without refreshing the page
- Admin changes are reflected immediately in the customer dashboard

## 📸 Screenshots
# 🏠 Home : 
 "C:\Users\Aarti\OneDrive\Desktop\home.png"
# 🔐 Login : 
![2](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/0cb56d94-a715-48bd-9a7d-05c876a05b2c)
# 🔐 Signup : 
![3](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/f5dd216a-dc8d-4042-9a96-4884cdb17aef)
# 🍔 Menu :
![Capture2](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/22fc6a58-b713-4ab7-babb-cff5844e7c55)
# 🍱 Menu Food :
![Capture3](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/0f7fe1ab-8c29-4fa2-bdb2-7212994cdf80)

# 🍱 Menu Food :
![Capture5](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/34e366fa-8ee5-4f77-a5e0-d5d4ea294672)
# 🛒 Cart : 
![Capture6](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/1894f642-ea89-42de-ad74-de173c6c42aa)
# 📞 Contact :
![Capture7](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/1a94b8aa-aa4e-4991-9d45-f6548f793b47)
# ❤️ Payment :
![Capture8](https://github.com/DulanjaliSenarathna/mern-food-delivery-app/assets/59603716/c85e4c11-7ebf-4e45-8678-4000abde835d)

## 📜 API Documentation
The backend exposes REST APIs for:

- User Authentication
- Cart Management
- Food Management
- Order Processing
- Payment Verification
- Analytics Dashboard

API testing was performed using Postman.

## 👨‍💻 Developer

**Aarti Garg**

Final Year B.Tech Student | MERN Stack Developer

### Key Contributions

* Developed a full-stack Food Ordering Web Application using MongoDB, Express.js, React.js and Node.js
* Implemented secure JWT-based Authentication and Authorization
* Integrated Stripe Payment Gateway for online payments
* Built an Admin Analytics Dashboard for monitoring revenue, orders and sales performance
* Added Real-Time Order Tracking using Socket.io for instant status synchronization
* Designed a responsive and user-friendly interface for customers and administrators
* Developed complete Order Management and Food Inventory Management modules

### Future Enhancements

* AI-based Food Recommendation System
* Push Notifications for Order Updates
* Progressive Web App (PWA) Support
* Advanced Sales Analytics and Reports

## 📫 Contact

**Developer:** Aarti Garg

**GitHub:** https://github.com/Aartigarg446

**Email:** [aartigarg488@gmail.com](mailto:aartigarg488@gmail.com)

---

If you found this project useful, consider giving it a ⭐ on GitHub.
