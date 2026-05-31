# FermTech Setup Guide

## Requirements

- Windows 11
- Node.js 22 LTS or newer
- MongoDB Atlas account
- Cloudinary account

## Install

```powershell
npm run install:all
Copy-Item backend\.env.example backend\.env
Copy-Item frontend\.env.example frontend\.env.local
```

Fill these first:

- `backend\.env`: `MONGODB_URI`, `JWT_SECRET`, `CLOUDINARY_*`
- `frontend\.env.local`: `VITE_API_BASE_URL=http://localhost:5000/api`

## Run Locally

```powershell
npm run dev
```

Open `http://localhost:5173`.

## Storage Notes

Do not store datasets, `.h5`, `.pt`, or `.onnx` files in the repo. The `.gitignore` already blocks them. Use API-based AI providers for deployment, or store trained models in cloud object storage.
