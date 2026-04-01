---
title: "Secret App"
description: "API documentation for the Secret App service."
summary: ""
date: 2026-04-01T00:00:00+07:00
lastmod: 2026-04-01T00:00:00+07:00
draft: false
weight: 110
toc: true
params:
  seo:
    title: ""
    description: ""
    canonical: ""
    robots: ""
---

## Overview

Secret App exposes a Gin-based JSON API under `/api/v1`.

- Base path: `/api/v1`
- Auth: bearer token for `/me` endpoints
- Format: `application/json`

## Authentication

Protected endpoints require this header:

```http
Authorization: Bearer <accessToken>
```

The access token is returned by the login and register endpoints.

## Public Endpoints

### `GET /`

Service welcome check.

```json
{
  "message": "secret-shop api running"
}
```

### `GET /healthz`

Returns service and database health.

Success response:

```json
{
  "status": "ok",
  "database": "up"
}
```

Degraded response:

```json
{
  "status": "degraded",
  "database": "down",
  "error": "..."
}
```

## Auth Endpoints

### `POST /api/v1/auth/register`

Create a new customer account.

Request body:

```json
{
  "email": "alice@example.com",
  "password": "supersecret123",
  "firstname": "Alice",
  "lastname": "Nguyen",
  "phone": "+1-555-0100"
}
```

Success response: `201 Created`

```json
{
  "data": {
    "accessToken": "jwt-token",
    "customer": {
      "id": 1,
      "email": "alice@example.com",
      "firstname": "Alice",
      "lastname": "Nguyen",
      "phone": "+1-555-0100",
      "isActive": true
    }
  }
}
```

Common errors:

- `400` invalid JSON body
- `400` missing `email` or `password`
- `400` password shorter than 8 characters
- `409` customer already exists

### `POST /api/v1/auth/login`

Authenticate an existing customer.

Request body:

```json
{
  "email": "alice@example.com",
  "password": "supersecret123"
}
```

Success response: `200 OK`

```json
{
  "data": {
    "accessToken": "jwt-token",
    "customer": {
      "id": 1,
      "email": "alice@example.com",
      "firstname": "Alice",
      "lastname": "Nguyen",
      "phone": "+1-555-0100",
      "isActive": true,
      "lastLoginAt": "2026-04-01T12:00:00Z"
    }
  }
}
```

Common errors:

- `400` invalid JSON body
- `400` missing `email` or `password`
- `401` invalid credentials
- `403` customer is inactive

## Me Endpoints

These routes require `Authorization: Bearer <accessToken>`.

### `GET /api/v1/me`

Returns the current authenticated customer.

Success response:

```json
{
  "data": {
    "id": 1,
    "email": "alice@example.com",
    "firstname": "Alice",
    "lastname": "Nguyen",
    "phone": "+1-555-0100",
    "isActive": true,
    "lastLoginAt": "2026-04-01T12:00:00Z"
  }
}
```

Common errors:

- `401` missing authorization header
- `401` invalid authorization header
- `401` invalid token
- `403` customer is inactive
- `404` customer not found

### `PATCH /api/v1/me`

Update profile fields.

Request body:

```json
{
  "firstname": "Alice",
  "lastname": "Chen",
  "phone": "+1-555-0101"
}
```

Success response:

```json
{
  "data": {
    "id": 1,
    "email": "alice@example.com",
    "firstname": "Alice",
    "lastname": "Chen",
    "phone": "+1-555-0101",
    "isActive": true
  }
}
```

### `PATCH /api/v1/me/password`

Change the current customer password.

Request body:

```json
{
  "currentPassword": "supersecret123",
  "newPassword": "newsecret456"
}
```

Success response:

```json
{
  "data": {
    "message": "password updated"
  }
}
```

Common errors:

- `400` invalid JSON body
- `400` missing `currentPassword` or `newPassword`
- `400` new password shorter than 8 characters
- `401` current password is incorrect
- `403` customer is inactive
- `404` customer not found

## Product Endpoints

### `GET /api/v1/products`

List products with optional pagination and field projection.

Query parameters:

- `limit`: positive integer, default `20`, max `100`
- `offset`: non-negative integer, default `0`
- `fields`: comma-separated subset of `id,name,description,slug,isActive`

Example:

```http
GET /api/v1/products?limit=10&offset=0&fields=id,name,slug
```

Success response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Starter Kit",
      "slug": "starter-kit"
    }
  ],
  "meta": {
    "limit": 10,
    "offset": 0,
    "count": 1
  }
}
```

Common errors:

- `400` invalid `limit`
- `400` invalid `offset`
- `400` invalid `fields`

### `GET /api/v1/products/:id`

Return one product by numeric ID.

Example:

```http
GET /api/v1/products/1?fields=id,name,description,slug,isActive
```

Success response:

```json
{
  "data": {
    "id": 1,
    "name": "Starter Kit",
    "description": "Example product",
    "slug": "starter-kit",
    "isActive": true
  }
}
```

Common errors:

- `400` id must be a positive integer
- `400` invalid `fields`
- `404` product not found

## Variant Endpoint

### `GET /api/v1/variants/:sku`

Return a variant and its related product using SKU.

Example:

```http
GET /api/v1/variants/SKU-001
```

Success response:

```json
{
  "data": {
    "id": 10,
    "productId": 1,
    "sku": "SKU-001",
    "price": 1999,
    "stock": 8,
    "product": {
      "id": 1,
      "name": "Starter Kit",
      "description": "Example product",
      "slug": "starter-kit",
      "isActive": true
    }
  }
}
```

Common errors:

- `400` missing SKU
- `404` variant not found

## Notes

- All responses are JSON.
- Most successful payloads are wrapped in `data`.
- Product list responses include a `meta` object for pagination.
