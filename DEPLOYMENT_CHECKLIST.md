# Deployment Checklist

- Create MongoDB Atlas cluster and set `MONGODB_URI`.
- Create Cloudinary account and set upload credentials.
- Deploy backend to Render, Railway, Fly.io, or Azure App Service.
- Deploy frontend to Vercel, Netlify, or Azure Static Web Apps.
- Set frontend `VITE_API_BASE_URL` to deployed backend URL.
- Set backend `CLIENT_URL` to deployed frontend URL.
- Keep `.env` files out of Git.
