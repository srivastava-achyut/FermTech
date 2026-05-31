# FermTech

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

Backend: `http://localhost:5000/api/health`
