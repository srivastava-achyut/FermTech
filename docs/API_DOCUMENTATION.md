# API Documentation

Base URL: `/api`

## Health

- `GET /health`

## Auth

- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me`

## Disease

- `POST /disease/diagnose`
- `GET /disease/history`

## Listings

- `GET /listings`
- `GET /listings/mine`
- `POST /listings`
- `PATCH /listings/:id/status`

## Orders

- `GET /orders`
- `POST /orders`

## Dashboards

- `GET /farmer/dashboard`
- `GET /buyer/dashboard`
- `GET /admin/dashboard`
- `GET /admin/users`
- `GET /admin/analytics`
