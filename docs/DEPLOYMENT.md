# Deployment

## Backend

1. Push this repo to GitHub.
2. Create a backend service on Render, Railway, Fly.io, or Azure.
3. Set build command:

```bash
npm install --prefix backend
```

4. Set start command:

```bash
npm --prefix backend start
```

5. Add environment variables from `backend/.env.example`.

## Frontend

1. Create a Vercel/Netlify project for `frontend`.
2. Set build command:

```bash
npm run build
```

3. Set output directory:

```text
dist
```

4. Set `VITE_API_BASE_URL` to the deployed backend URL plus `/api`.
