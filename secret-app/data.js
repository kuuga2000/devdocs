const SECRET_APP_DOCS = {
    title: "Secret Shop REST API",
    baseUrl: "/api/v1",
    meta: [
        "Gin framework",
        "Static HTML docs",
        "Dark-mode only",
        "Based on current handlers",
    ],
    endpoints: [
        {
            id: "root",
            group: "System",
            method: "GET",
            path: "/",
            title: "API Root",
            description: "Simple root endpoint used to verify that the API process is running.",
            tags: ["system", "health"],
            responses: [
                {
                    status: 200,
                    title: "Success",
                    body: `{
  "message": "secret-shop api running"
}`,
                },
            ],
        },
        {
            id: "healthz",
            group: "System",
            method: "GET",
            path: "/healthz",
            title: "Health Check",
            description: "Checks API health and PostgreSQL connectivity. Returns degraded when the database ping fails.",
            tags: ["system", "database", "health"],
            responses: [
                {
                    status: 200,
                    title: "Healthy",
                    body: `{
  "status": "ok",
  "database": "up"
}`,
                },
                {
                    status: 503,
                    title: "Degraded",
                    body: `{
  "status": "degraded",
  "database": "down",
  "error": "dial tcp ...: connect: connection refused"
}`,
                },
            ],
        },
        {
            id: "auth-register",
            group: "Auth",
            method: "POST",
            path: "/api/v1/auth/register",
            title: "Register Customer",
            description: "Creates a customer account and returns an access token plus customer profile data.",
            tags: ["auth", "customers", "register"],
            requestBody: {
                contentType: "application/json",
                fields: [
                    { name: "email", type: "string", required: true, description: "Customer email address." },
                    { name: "password", type: "string", required: true, description: "Minimum 8 characters." },
                    { name: "firstname", type: "string", required: false, description: "Customer first name." },
                    { name: "lastname", type: "string", required: false, description: "Customer last name." },
                    { name: "phone", type: "string", required: false, description: "Customer phone number." },
                ],
                example: `{
  "email": "alice@example.com",
  "password": "secret123",
  "firstname": "Alice",
  "lastname": "Ng",
  "phone": "+62-812-0000-0000"
}`,
            },
            responses: [
                {
                    status: 201,
                    title: "Created",
                    body: `{
  "data": {
    "accessToken": "jwt-token",
    "customer": {
      "id": 1,
      "email": "alice@example.com",
      "firstname": "Alice",
      "lastname": "Ng",
      "phone": "+62-812-0000-0000",
      "isActive": true
    }
  }
}`,
                },
                {
                    status: 400,
                    title: "Invalid request",
                    body: `{
  "error": "email and password are required"
}`,
                },
                {
                    status: 409,
                    title: "Already exists",
                    body: `{
  "error": "customer already exists"
}`,
                },
            ],
        },
        {
            id: "auth-login",
            group: "Auth",
            method: "POST",
            path: "/api/v1/auth/login",
            title: "Login Customer",
            description: "Authenticates a customer and returns an access token and customer profile.",
            tags: ["auth", "customers", "login"],
            requestBody: {
                contentType: "application/json",
                fields: [
                    { name: "email", type: "string", required: true, description: "Registered customer email." },
                    { name: "password", type: "string", required: true, description: "Customer password." },
                ],
                example: `{
  "email": "alice@example.com",
  "password": "secret123"
}`,
            },
            responses: [
                {
                    status: 200,
                    title: "Success",
                    body: `{
  "data": {
    "accessToken": "jwt-token",
    "customer": {
      "id": 1,
      "email": "alice@example.com",
      "firstname": "Alice",
      "lastname": "Ng",
      "phone": "+62-812-0000-0000",
      "isActive": true,
      "lastLoginAt": "2026-03-12T09:00:00Z"
    }
  }
}`,
                },
                {
                    status: 401,
                    title: "Invalid credentials",
                    body: `{
  "error": "invalid credentials"
}`,
                },
                {
                    status: 403,
                    title: "Inactive customer",
                    body: `{
  "error": "customer is inactive"
}`,
                },
            ],
        },
        {
            id: "products-list",
            group: "Products",
            method: "GET",
            path: "/api/v1/products",
            title: "List Products",
            description: "Returns a paginated product list with optional field projection.",
            tags: ["products", "pagination", "projection"],
            queryParams: [
                { name: "limit", type: "integer", required: false, description: "Positive integer. Default 20, max 100." },
                { name: "offset", type: "integer", required: false, description: "Non-negative integer. Default 0." },
                { name: "fields", type: "string", required: false, description: "Comma-separated subset of: id,name,description,slug,isActive." },
            ],
            responses: [
                {
                    status: 200,
                    title: "Success",
                    body: `{
  "data": [
    {
      "id": 1,
      "name": "Offroad MX Helmet",
      "description": "Off-road motocross helmet with extended chin guard and peak.",
      "slug": "offroad-mx-helmet",
      "isActive": true
    }
  ],
  "meta": {
    "limit": 20,
    "offset": 0,
    "count": 1
  }
}`,
                },
                {
                    status: 400,
                    title: "Invalid query",
                    body: `{
  "error": "limit must be a positive integer"
}`,
                },
            ],
        },
        {
            id: "products-detail",
            group: "Products",
            method: "GET",
            path: "/api/v1/products/:id",
            title: "Get Product By ID",
            description: "Returns one product by numeric ID, with optional field projection.",
            tags: ["products", "detail"],
            pathParams: [
                { name: "id", type: "integer", required: true, description: "Positive numeric product ID." },
            ],
            queryParams: [
                { name: "fields", type: "string", required: false, description: "Comma-separated subset of allowed fields." },
            ],
            responses: [
                {
                    status: 200,
                    title: "Success",
                    body: `{
  "data": {
    "id": 1,
    "name": "Offroad MX Helmet",
    "description": "Off-road motocross helmet with extended chin guard and peak.",
    "slug": "offroad-mx-helmet",
    "isActive": true
  }
}`,
                },
                {
                    status: 400,
                    title: "Invalid ID",
                    body: `{
  "error": "id must be a positive integer"
}`,
                },
                {
                    status: 404,
                    title: "Not found",
                    body: `{
  "error": "product not found"
}`,
                },
            ],
        },
        {
            id: "variant-by-sku",
            group: "Variants",
            method: "GET",
            path: "/api/v1/variants/:sku",
            title: "Get Variant By SKU",
            description: "Returns variant details by SKU plus nested product information.",
            tags: ["variants", "sku", "products"],
            pathParams: [
                { name: "sku", type: "string", required: true, description: "Variant SKU path parameter." },
            ],
            responses: [
                {
                    status: 200,
                    title: "Success",
                    body: `{
  "data": {
    "id": 21,
    "productId": 5,
    "sku": "HELMET-MX-BLK-L",
    "price": 2499000,
    "stock": 7,
    "product": {
      "id": 5,
      "name": "Offroad MX Helmet",
      "description": "Off-road motocross helmet with extended chin guard and peak.",
      "slug": "offroad-mx-helmet",
      "isActive": true
    }
  }
}`,
                },
                {
                    status: 404,
                    title: "Not found",
                    body: `{
  "error": "variant not found"
}`,
                },
            ],
        },
    ],
};
