# 🛒 ShoppyCart

A full-featured e-commerce web application built using the MERN stack with real-time chat and secure Stripe payments. Built to scale and designed for seamless user experience.

---

## 🚀 Features

- 🧾 Secure user authentication with JWT and bcrypt.js
- 🛍️ Product browsing, cart, checkout, and order management
- 💳 Stripe payment integration
- 👨‍💼 Admin dashboard for managing products and orders
- 💬 Real-time user chat using Socket.IO
- 📊 Chart.js for interactive admin analytics
- 📱 Responsive and mobile-friendly design

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Stripe API
- Socket.IO

**Dev Tools:**
- Git & GitHub
- Docker (for containerization)






## 📁 Folder Structure

ShoppyCart/
├── e-commerce-frontend/ # Frontend (React)
├── e-commerce-backend/ # Backend (Express + MongoDB)
├── Chat/ # Real-time chat server
└── .gitignore






yaml
## 🔧 Setup Instructions
### 1. Clone the repository

```bash
git clone https://github.com/NikhilSinghwal101/ShoppyCart.git
cd ShoppyCart






2. Environment Variables

📦 e-commerce-backend/.env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret

🖥️ e-commerce-frontend/.env
VITE_API_URL=http://localhost:5000

💬 Chat/.env
PORT=6000






3. Install Dependencies
bash

# Frontend
cd e-commerce-frontend
npm install

# Backend
cd ../e-commerce-backend
npm install

# Chat Server
cd ../Chat
npm install






4. Run the Application
bash

# Frontend
cd e-commerce-frontend
npm run dev

# Backend
cd ../e-commerce-backend
node index.js

# Chat
cd ../Chat
node server.js
