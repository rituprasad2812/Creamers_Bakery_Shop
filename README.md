#  Creamers Bakery

> A modern, full-stack bakery website offering a seamless online shopping experience for fresh baked goods. Built with a production-ready tech stack and deployed on cloud platforms.

<br />

##  Live Demo

🔗 **[https://creamersbakery.netlify.app](https://creamersbakery.netlify.app)**

<br />

---

##  Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js, Tailwind CSS, Framer Motion |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | JWT + Bcrypt.js |
| **Deployment** | Netlify (Frontend), Render (Backend) |

<br />

---

##  Features

###  Shopping Experience
- Browse **4 product categories** — Cakes, Breads, Cookies, Pastries
- Unique **horizontal scroll stacked card** menu animation
- Filter products within each category
- Product detail page with **dynamic pricing** based on size/weight
- **Custom name on cake** option
- Quantity selector with real-time price update

###  Cart & Checkout
- Add to cart with size and option selection
- Real-time cart count in navbar
- Cart page with quantity management and item removal
- Full checkout flow:
  - Customer details
  - Delivery or Pickup selection
  - Address, date & time picker
  - Payment method (COD / Online)

###  Custom Cake Orders
- Dedicated custom order form
- Fields for occasion, size, flavor, floors, add-ons
- Design preferences (theme, colors)
- Automatic **price breakdown** with 50% down payment system

###  Order Management
- Order confirmation page with **full receipt**
- Unique Order ID (`CRM-2025-XXXXX`)
- Order history with **status tracking**
- **Reorder** functionality

###  Reviews System
- Product-specific reviews
- Submit reviews (login required)
- **Star rating** system
- Reviews displayed on home page

###  Authentication
- User Signup & Login
- JWT-based session management
- **Protected routes** (Cart, Checkout, Orders, Custom Orders)
- Persistent login with localStorage
- **"Login to Buy"** prompt for guests

###  UI/UX & Animations
- Typing animation on hero section
- Staggered card animations on scroll
- Flip card animations on product cards
- Smooth fade-in sections
- Custom styled dropdowns
- Smooth scroll navbar links

<br />

---

##  Project Structure

```
creamers-bakery/
│
├── public/
│   ├── assets/               # All images
│   └── _redirects            # Netlify routing fix
│
├── src/
│   ├── components/
│   │   ├── section1/         # Hero & Navbar
│   │   ├── section2/         # Menu (Horizontal Scroll)
│   │   ├── section3/         # Bestsellers
│   │   ├── section4/         # Promises & Reviews
│   │   ├── section5/         # Contact
│   │   ├── FadeInSection.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── ReviewItem.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   │
│   └── pages/
│       ├── Home.jsx
│       ├── Login.jsx
│       ├── Signup.jsx
│       ├── MenuPage.jsx
│       ├── ProductDetail.jsx
│       ├── Cart.jsx
│       ├── Checkout.jsx
│       ├── CustomOrders.jsx
│       ├── OrderConfirmation.jsx
│       └── OrderHistory.jsx
│
└── backend/
    ├── models/
    │   ├── User.js
    │   ├── Product.js
    │   ├── Review.js
    │   ├── Order.js
    │   └── CustomOrder.js
    │
    ├── routes/
    │   ├── auth.js
    │   ├── products.js
    │   ├── reviews.js
    │   ├── orders.js
    │   └── customOrders.js
    │
    ├── seed.js
    ├── seedReviews.js
    └── server.js
```

<br />

---

##  Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (Local or Atlas)
- Git

<br />

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/creamers-bakery.git
cd creamers-bakery
```

**2. Install frontend dependencies**
```bash
npm install
```

**3. Install backend dependencies**
```bash
cd backend
npm install
```

**4. Setup environment variables**

Create `backend/.env`:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

**5. Seed the database**
```bash
cd backend
node seed.js
node seedReviews.js
```

**6. Run the application**

Terminal 1 — Backend:
```bash
cd backend
node server.js
```

Terminal 2 — Frontend:
```bash
npm run dev
```

**7. Open in browser**
```
http://localhost:5173
```

<br />

---

##  API Endpoints

###  Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | Login user |

###  Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/bestsellers` | Get bestsellers |
| GET | `/api/products/category/:category` | Get by category |
| GET | `/api/products/:id` | Get single product |

###  Reviews
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reviews/all` | Get all reviews |
| GET | `/api/reviews/product/:id` | Get product reviews |
| POST | `/api/reviews` | Submit a review |

###  Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Place new order |
| GET | `/api/orders/user/:userId` | Get user orders |
| GET | `/api/orders/:orderId` | Get single order |

###  Custom Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/custom-orders` | Submit custom order |
| GET | `/api/custom-orders` | Get all custom orders |

<br />

---

##  Developer

**Ritu Prasad**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-linkedin)

<br />

---

##  License

This is a personal project built for portfolio and learning purposes.

<br />

---

<p align="center">
  Made with ❤️ by Ritu Prasad
</p>

<p align="center">
  ⭐ If you like this project, give it a star on GitHub!
</p>
