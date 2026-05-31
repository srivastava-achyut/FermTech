# Architecture

FermTech uses a cloud-first MERN architecture to keep local storage small.

```text
React PWA -> Express API -> MongoDB Atlas
                    |
                    +-> Cloudinary for images
                    +-> External AI API for multimodal diagnosis
                    +-> SMS/email/payment providers as replaceable services
```

## Frontend

- React + Vite
- PWA manifest and service worker
- Role-based routes for farmer, buyer, and admin
- Mobile-first CSS

## Backend

- Express API
- MongoDB Atlas via Mongoose
- JWT authentication
- Cloudinary upload path using memory storage, so files are not saved locally
- AI diagnosis service with API fallback mock for development

## Deployment

- Frontend: Vercel, Netlify, or Azure Static Web Apps
- Backend: Render, Railway, Fly.io, or Azure App Service
- Database: MongoDB Atlas
- Media: Cloudinary
