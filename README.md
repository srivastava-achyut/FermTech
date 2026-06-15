<!-- # FermTech

FermTech is a responsive full-stack PWA for Indian farmers. It combines crop disease diagnosis, local-language support, and a marketplace for AI-verified crop listings.

## Low-storage architecture

- Database: MongoDB Atlas through `MONGODB_URI`
- Image storage: Cloudinary through `CLOUDINARY_*`
- AI diagnosis: external AI vision API through `AI_API_URL` and `AI_API_KEY`
- Local app data: only small offline cache in the browser
- No large ML models or datasets are committed to this repo

## Folder Structure

```text
FermTech/
  frontend/       React + Vite PWA
  backend/        Node.js + Express API
  docs/           Setup, deployment, and architecture notes
  .github/        CI workflow
```

## Quick Start on Windows 11

```powershell
npm run install:all
Copy-Item backend\.env.example backend\.env
Copy-Item frontend\.env.example frontend\.env.local
npm run dev
```

Frontend: `http://localhost:5173`

Backend: `http://localhost:5000/api/health` -->


# 🌱 FermTech

FermTech is an AI-powered agricultural marketplace platform that helps farmers detect crop diseases using machine learning and connect directly with buyers through a digital marketplace.

The platform combines AI-based leaf disease detection, crop listing management, admin approval workflows, and buyer order management into a single full-stack application.

---

## 🚀 Features

### Authentication & Authorization

* JWT-based authentication
* Role-based access control
* Farmer, Buyer, and Admin dashboards
* Secure login and registration

### AI Disease Detection

* Upload crop leaf images
* MobileNetV2-based disease classification
* FastAPI AI inference service
* Diagnosis history stored in MongoDB
* Cloudinary image storage

### Farmer Features

* Crop disease diagnosis
* Diagnosis history tracking
* Create crop listings
* View and manage listings

### Admin Features

* Review pending listings
* Approve or reject listings
* Monitor users and platform activity
* Dashboard analytics

### Buyer Features

* Browse approved crop listings
* Place crop orders
* View order history
* Marketplace dashboard

---

## 🏗️ System Architecture

Farmer → AI Disease Detection → Crop Listing
                                    ↓
Admin Approval Workflow
                                    ↓
Buyer Marketplace → Orders → Order History

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* React Router
* Progressive Web App (PWA)

### Backend

* Node.js
* Express.js
* JWT Authentication

### Database

* MongoDB Atlas

### Cloud Storage

* Cloudinary

### AI & Machine Learning

* TensorFlow
* MobileNetV2 Transfer Learning
* FastAPI
* NumPy
* Pillow

---

## 📁 Project Structure

```text
FermTech
├── frontend
│   ├── src
│   └── public
│
├── backend
│   ├── src
│   ├── controllers
│   ├── routes
│   ├── models
│   └── services
│
└── ml-models
    └── cnn-disease-detection
        ├── train.py
        ├── evaluate.py
        ├── requirements.txt
        └── ai-service
            └── app.py
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/FermTech.git
cd FermTech
```

### Install Dependencies

```bash
npm install
npm --prefix backend install
npm --prefix frontend install
```

### Backend Environment

Create:

```text
backend/.env
```

Example:

```env
NODE_ENV=development
PORT=5000

CLIENT_URL=http://localhost:5173

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET
JWT_EXPIRES_IN=7d

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

AI_API_URL=
```

### Frontend Environment

Create:

```text
frontend/.env.local
```

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## ▶️ Run Application

### Backend + Frontend

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```

API Health:

```text
http://localhost:5000/api/health
```

---

## 🤖 AI Model

The disease detection module uses:

* MobileNetV2 Transfer Learning
* TensorFlow/Keras
* FastAPI Inference Service

Current dataset includes:

* Potato___Early_blight
* Potato___Late_blight
* Potato___healthy

Model evaluation achieved approximately:

```text
Test Accuracy: 98.3%
```

---

## 📸 Screenshots

Add screenshots here after deployment:

* Home Page
* Disease Detection
* Diagnosis History
* Farmer Listings
* Admin Approval Dashboard
* Buyer Marketplace
* Order History

---

## 🔮 Future Improvements

* Email OTP Password Reset
* Razorpay Payment Integration
* Marketplace Search & Filters
* Offline PWA Queue
* Multi-crop Disease Detection
* Real-time Notifications
* Production AI Deployment

---

## 👨‍💻 Author

**Achyut Srivastava**

B.Tech CSE, National Institute of Technology Silchar

GitHub: https://github.com/srivastava-achyut

---

## 📄 License

This project is developed for educational and research purposes.

