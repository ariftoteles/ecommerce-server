# Ecomerce CMS Server
This app has : 
* RESTful endpoint for Ecomerce CMS Server
* JSON formatted response

&nbsp;

## Endpoints for User
### login for admin
### POST /login

> Post User Login

_Request Body_
```
{
    "email": "admin@gmail.com",
    "password": "iniadmin"
}
```

_Response (200 - OK)_
```
{
    "access_token": "<generated by system>",
    "username": "admin"
}
```
_Response (400 Bad) Request_
```
{
    "message": [
        "Email must be filled",
        "Email not valid",
        "Password must be filled",
        "Password minimum 6 characters"
    ]
}
```

_Response (401 Bad - Unautorized)_
```
{
    "message": [
        "Email not registered",
        "Invalid Email/password"
    ]
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
### register for new customer
### POST /customer/register

> Post User Register

_Request Body_
```
{
  "username": "superman"
  "email": "superman@gmail.com",
  "password": "password123"
}
```

_Response (201 - OK)_
```
{
    "id": 2,
    "email": "superman@gmail.com"
    "username": "superman",
    "role": "customer"
}
```
_Response (400 Bad) Request_
```
{
    "message": [
      "Username must be filled",
      "Username must be unique",
      "Email must be filled",
      "Email must be unique",
      "Email not valid",
      "Password must be filled",
      "Password minimum 6 characters"
    ]
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
### login for customer
### POST /customer/login

> Post User Login

_Request Body_
```
{
    "email": "superman@gmail.com",
    "password": "password123"
}
```

_Response (200 - OK)_
```
{
    "access_token": "<generated by system>",
    "username": "superman"
}
```
_Response (400 Bad) Request_
```
{
    "message": [
        "Email must be filled",
        "Email not valid",
        "Password must be filled",
        "Password minimum 6 characters"
    ]
}
```

_Response (401 Bad - Unautorized)_
```
{
    "message": [
        "Email not registered",
        "Invalid Email/password"
    ]
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```

## Endpoints for Products
### GET /products

> Get all task list

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
[
  {
    "id": 22,
    "name": "Adidas Runner",
    "image_url": "https://picsum.photos/seed/picsum/200/300",
    "price": 1000000,
    "stock": 12,
    "description": "Lorem ipsum dolor sit amet",
    "UserId": 1,
    "CategoryId": 1,
    "createdAt": "2021-01-23T04:25:00.610Z",
    "updatedAt": "2021-01-23T05:33:50.194Z",
    "Category": {
      "id": 1,
      "name": "sepatu",
      "UserId": 1,
      "createdAt": "2021-01-23T05:33:43.662Z",
      "updatedAt": "2021-01-23T05:33:43.662Z"
    }
  }
]
```
_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided"
  ]
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### POST /products

> Create new task

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Body_
```
{
  "name": "Nike",
  "image_url": "https://assets.adidas.com/images.jpg",
  "price": 100000,
  "stock": 10,
  "description": "Sepatu terbaik pokoknya",
  "CategoryId": 18
}
```

_Response (201 - Created)_
```
{
  "id": 26,
  "name": "Nike",
  "image_url": "https://assets.adidas.com/images.jpg",
  "price": 100000,
  "stock": 10,
  "description": "Sepatu terbaik pokoknya",
  "CategoryId": 18,
  "UserId": 1,
  "updatedAt": "2021-01-23T07:12:28.569Z",
  "createdAt": "2021-01-23T07:12:28.569Z"
}
```

_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided",
    "Name must be filled",
    "Image url must be filled",
    "Price must be filled",
    "Price must be filled by number",
    "Price must greater than equal 0",
    "Stock must greater than equal 0",
    "Stock must be filled",
    "Stock must be filled by absolute number",
    "Category must be filled"
  ]
}
```
_Response (401 - Unauthorized)_
```
{
  "message": "User not authorized"
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### GET /products/:id

> Get task by id

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Params_
```
id = [integer]
```

_Response (200 - OK)_
```
{
  "id": 26,
  "name": "Nike",
  "image_url": "https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg",
  "price": 100000,
  "stock": 10,
  "description": "Sepatu terbaik pokoknya",
  "UserId": 1,
  "CategoryId": 18,
  "createdAt": "2021-01-23T07:12:28.569Z",
  "updatedAt": "2021-01-23T07:12:28.569Z",
  "Category": {
    "id": 18,
    "name": "adas",
    "UserId": 1,
    "createdAt": "2021-01-23T05:33:43.662Z",
    "updatedAt": "2021-01-23T05:33:43.662Z"
  }
}
```
_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided"
  ]
}
```
_Response (401 - Unauthorized)_
```
{
  "message": "User not authorized"
}
```
_Response (404 - Not Found)_
```
{
  "message": "Data not found"
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### PUT /products/:id

> Edit task value

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Params_
```
id = [integer]
```
_Request Body_
```
{
  "name": "Adidas",
  "image_url": "https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg",
  "price": 3000000,
  "stock": 12,
  "description": "Ini ternyata sepatu adidas",
  "CategoryId": 18
}
```

_Response (200 - OK)_
```
{
    "id": 26,
    "name": "Adidas",
    "image_url": "https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg",
    "price": 3000000,
    "stock": 12,
    "description": "Ini ternyata sepatu adidas",
    "UserId": 1,
    "CategoryId": 18,
    "createdAt": "2021-01-23T07:12:28.569Z",
    "updatedAt": "2021-01-23T07:22:23.113Z"
}
```
_Response (401 - Unauthorized)_
```
{
  "message": "User not authorized"
}
```

_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided",
    "Name must be filled",
    "Image url must be filled",
    "Price must be filled",
    "Price must be filled by number",
    "Price must greater than equal 0",
    "Stock must greater than equal 0",
    "Stock must be filled",
    "Stock must be filled by absolute number",
    "Category must be filled"
  ]
}
```
_Response (404 - Not Found)_
```
{
  "message": "Data not found"
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### DELETE /products/:id

> Delete task

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Params_
```
id = [integer]
```
_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
  message: "Success delete product"
}
```
_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided"
  ]
}
```
_Response (401 - Unauthorized)_
```
{
  "message": "User not authorized"
}
```
_Response (404 - Not Found)_
```
{
  "message": "Data not found"
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
## Endpoints for Category
### GET /categories

> Get all categories list

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
[
  {
    "id": 18,
    "name": "sepatu",
    "UserId": 1,
    "createdAt": "2021-01-23T05:33:43.662Z",
    "updatedAt": "2021-01-23T05:33:43.662Z",
    "Products": [
      {
        "id": 26,
        "name": "Adidas",
        "image_url": "https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg",
        "price": 3000000,
        "stock": 12,
        "description": "Ini ternyata sepatu adidas",
        "UserId": 1,
        "CategoryId": 18,
        "createdAt": "2021-01-23T07:12:28.569Z",
        "updatedAt": "2021-01-23T07:22:23.113Z"
      },
      {
        "id": 25,
        "name": "Nike",
        "image_url": "https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg",
        "price": 100000,
        "stock": 10,
        "description": "Ini sepatu mantap",
        "UserId": 1,
        "CategoryId": 18,
        "createdAt": "2021-01-23T07:12:01.932Z",
        "updatedAt": "2021-01-23T07:12:01.932Z"
      }
    ]
  }
]
```
_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided"
  ]
}
```

_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
### Get categories for customer
### GET /customer/categories

> Get all categories list

_Request Headers_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
[
  {
    "id": 1,
    "name": "sepatu",
    "UserId": 1,
    "createdAt": "2021-01-23T05:33:43.662Z",
    "updatedAt": "2021-01-23T05:33:43.662Z",
    "Products": [
      {
        "id": 26,
        "name": "Adidas",
        "image_url": "https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg",
        "price": 3000000,
        "stock": 12,
        "description": "Ini ternyata sepatu adidas",
        "UserId": 1,
        "CategoryId": 18,
        "createdAt": "2021-01-23T07:12:28.569Z",
        "updatedAt": "2021-01-23T07:22:23.113Z"
      },
      {
        "id": 25,
        "name": "Nike",
        "image_url": "https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg",
        "price": 100000,
        "stock": 10,
        "description": "Ini sepatu mantap",
        "UserId": 1,
        "CategoryId": 18,
        "createdAt": "2021-01-23T07:12:01.932Z",
        "updatedAt": "2021-01-23T07:12:01.932Z"
      }
    ]
  },
  {
    "id": 2,
    "name": "fashion",
    "UserId": 1,
    "createdAt": "2021-01-26T12:19:29.121Z",
    "updatedAt": "2021-01-26T12:19:29.121Z",
    "Products": [
      {
        "id": 19,
        "name": "Nike F",
        "image_url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2581a86f-135d-4a65-b387-e501ee7e68de/pro-rayguns-basketball-cap-JlVm5p.jpg",
        "price": 120000,
        "stock": 31,
        "description": "sdasdsa",
        "UserId": 1,
        "CategoryId": 2,
        "createdAt": "2021-01-27T15:12:02.061Z",
        "updatedAt": "2021-01-27T15:57:20.961Z"
      },
      {
        "id": 18,
        "name": "Nike F",
        "image_url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cdc65a45-cedf-4651-9145-48c7bd2367e2/rayguns-basketball-t-shirt-TkXfhN.jpg",
        "price": 500000,
        "stock": 21,
        "description": "sadassa",
        "UserId": 1,
        "CategoryId": 2,
        "createdAt": "2021-01-27T15:11:41.604Z",
        "updatedAt": "2021-01-27T15:57:20.939Z"
      }
    ]
  }
]
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
### Get categories by id for customer
### GET /customer/categories/:id

> Get all categories list

_Request Headers_
```
not needed
```
_Request Params_
```
id = [integer]
```
_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
  "id": 1,
  "name": "sepatu",
  "UserId": 1,
  "createdAt": "2021-01-23T05:33:43.662Z",
  "updatedAt": "2021-01-23T05:33:43.662Z",
  "Products": [
    {
      "id": 26,
      "name": "Adidas",
      "image_url": "https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg",
      "price": 3000000,
      "stock": 12,
      "description": "Ini ternyata sepatu adidas",
      "UserId": 1,
      "CategoryId": 18,
      "createdAt": "2021-01-23T07:12:28.569Z",
      "updatedAt": "2021-01-23T07:22:23.113Z"
    },
    {
      "id": 25,
      "name": "Nike",
      "image_url": "https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg",
      "price": 100000,
      "stock": 10,
      "description": "Ini sepatu mantap",
      "UserId": 1,
      "CategoryId": 18,
      "createdAt": "2021-01-23T07:12:01.932Z",
      "updatedAt": "2021-01-23T07:12:01.932Z"
    }
  ]
}
```
_Response (404 - Not Found)_
```
{
  "message": "Data not found"
}
```

_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### POST /categories

> Create new category

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Body_
```
{
  "name": "Sepatu"
}
```

_Response (201 - Created)_
```
{
  "id": 23,
  "name": "sepatu",
  "UserId": 1,
  "updatedAt": "2021-01-23T07:29:34.185Z",
  "createdAt": "2021-01-23T07:29:34.185Z"
}
```

_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided",
    "Category Name must be filled",
    "Category name must be unique"
  ]
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### DELETE /categories/:id

> Delete task

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Params_
```
id = [integer]
```
_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
  "message": "Success delete category"
}
```
_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided"
  ]
}
```
_Response (401 - Unauthorized)_
```
{
  "message": "User not authorized"
}
```
_Response (404 - Not Found)_
```
{
  "message": "Data not found"
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
## Endpoints for Banner
### GET /banners

> Get all banners list

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
[
  {
    "id": 3,
    "title": "Banner 2",
    "status": true,
    "image_url": "https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2021/1/19/01a3786a-0c1a-4fe3-add4-ea4a93c47b00.jpg.webp",
    "UserId": 1,
    "createdAt": "2021-01-23T07:34:04.783Z",
    "updatedAt": "2021-01-23T07:34:04.783Z"
  },
  {
    "id": 1,
    "title": "Promo apa aja",
    "status": false,
    "image_url": "https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2021/1/22/94270c72-80ae-4059-a68a-e113586e567c.jpg.webp",
    "UserId": 1,
    "createdAt": "2021-01-23T04:25:32.627Z",
    "updatedAt": "2021-01-23T05:31:43.625Z"
  }
]
```
_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided"
  ]
}
```

_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### Get banners for customer
### GET /customer/banners

> Get all banners list

_Request Headers_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
[
  {
    "id": 3,
    "title": "Banner 2",
    "status": true,
    "image_url": "https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2021/1/19/01a3786a-0c1a-4fe3-add4-ea4a93c47b00.jpg.webp",
    "UserId": 1,
    "createdAt": "2021-01-23T07:34:04.783Z",
    "updatedAt": "2021-01-23T07:34:04.783Z"
  },
  {
    "id": 1,
    "title": "Promo apa aja",
    "status": false,
    "image_url": "https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2021/1/22/94270c72-80ae-4059-a68a-e113586e567c.jpg.webp",
    "UserId": 1,
    "createdAt": "2021-01-23T04:25:32.627Z",
    "updatedAt": "2021-01-23T05:31:43.625Z"
  }
]
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### POST /banners

> Create new banner

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Body_
```
{
  "title": "Banner 2",
  "status": true,
  "image_url": "https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2021/1/19/01a3786a-0c1a-4fe3-add4-ea4a93c47b00.jpg.webp"
}
```

_Response (201 - Created)_
```
{
  "id": 4,
  "title": "Banner 2",
  "status": true,
  "image_url": "https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2021/1/19/01a3786a-0c1a-4fe3-add4-ea4a93c47b00.jpg.webp",
  "UserId": 1,
  "updatedAt": "2021-01-23T07:37:27.160Z",
  "createdAt": "2021-01-23T07:37:27.160Z"
}
```

_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided",
    "Status must be filled by true/false",
    "Title must be filled",
    "Status must be filled",
    "Image url must be filled"
  ]
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### PATCH /banners/:id

> Edit banner status

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Params_
```
id = [integer]
```
_Request Body_
```
{
  "status": "false",
}
```

_Response (200 - OK)_
```
{
    "id": 4,
    "title": "Banner 2",
    "status": false,
    "image_url": "https://ecs7-p.tokopedia.net/img/cache/1208/NsjrJu/2021/1/19/01a3786a-0c1a-4fe3-add4-ea4a93c47b00.jpg.webp",
    "UserId": 1,
    "createdAt": "2021-01-23T07:37:27.160Z",
    "updatedAt": "2021-01-23T07:42:38.540Z"
}
```
_Response (401 - Unauthorized)_
```
{
  "message": "User not authorized"
}
```

_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided",
    "Status must be filled by true/false",
    "Status must be filled"
  ]
}
```
_Response (404 - Not Found)_
```
{
  "message": "Data not found"
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### DELETE /banners/:id

> Delete banner

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Params_
```
id = [integer]
```
_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
  message: "Success delete banner"
}
```
_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided"
  ]
}
```
_Response (401 - Unauthorized)_
```
{
  "message": "User not authorized"
}
```
_Response (404 - Not Found)_
```
{
  "message": "Data not found"
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
## Endpoints for Carts
### GET /carts

> Get all carts list

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
[
  {
    "id": 198,
    "UserId": 3,
    "ProductId": 16,
    "quantity": 1,
    "checkout": true,
    "createdAt": "2021-01-27T16:19:21.277Z",
    "updatedAt": "2021-01-27T16:21:28.490Z",
    "Product": {
      "id": 16,
      "name": "Adidas 2",
      "image_url": "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/1abd9fe198c34c538482aaf701632ff1_9366/Terrex_Free_Hiker_Parley_Hiking_Shoes_Black_EF2344_01_standard.jpg",
      "price": 3000000,
      "stock": 5,
      "description": "Sepatu mantap",
      "UserId": 1,
      "CategoryId": 1,
      "createdAt": "2021-01-27T15:10:46.844Z",
      "updatedAt": "2021-01-27T17:06:08.291Z"
    }
  },
  {
    "id": 199,
    "UserId": 3,
    "ProductId": 20,
    "quantity": 1,
    "checkout": false,
    "createdAt": "2021-01-27T16:19:21.796Z",
    "updatedAt": "2021-01-27T16:21:28.513Z",
    "Product": {
      "id": 20,
      "name": "Adidas 4",
      "image_url": "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/3ae212fd39474d459222ac6b011d8a42_9366/NMD_R1_Primeknit_Shoes_Grey_G57939_01_standard.jpg",
      "price": 3000000,
      "stock": 4,
      "description": "Sepatu keren",
      "UserId": 1,
      "CategoryId": 1,
      "createdAt": "2021-01-27T15:47:46.530Z",
      "updatedAt": "2021-01-27T17:06:08.339Z"
    }
  }
]
```
_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided"
  ]
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### POST /carts

> Add new carts

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```
_Request Body_
```
{
  "productId": 18,
  "quantity": 1
}
```
If this cart doesn't exists or this cart already exists but checkout is true, this request will be create a new cart
_Response (201 - Created)_
```
{
  "checkout": false,
  "id": 209,
  "ProductId": 18,
  "UserId": 3,
  "quantity": 1,
  "updatedAt": "2021-01-28T02:12:06.121Z",
  "createdAt": "2021-01-28T02:12:06.121Z"
}
```
If this cart already exists and checkout is false, this request will be update the cart
_Response (200 - Ok)_
```
{
  "checkout": false,
  "id": 209,
  "ProductId": 18,
  "UserId": 3,
  "quantity": 2,
  "updatedAt": "2021-01-28T02:12:06.121Z",
  "createdAt": "2021-01-28T02:12:06.121Z"
}
```
_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided",
    "Quantity minimum is 1",
    "Not enough stock"
  ]
}
```
_Response (404 - Not Found)_
```
{
  "message": "Data not found"
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### PATCH /carts/:id

> Edit task value

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Params_
```
id = [integer]
```
_Request Body_
```
{
  "quantity": 1,
}
```

_Response (200 - OK)_
```
{
  "id": 209,
  "UserId": 3,
  "ProductId": 18,
  "quantity": 4,
  "checkout": false,
  "createdAt": "2021-01-28T02:12:06.121Z",
  "updatedAt": "2021-01-28T02:31:39.372Z"
}
```
_Response (401 - Unauthorized)_
```
{
  "message": "User not authorized"
}
```

_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided",
    "Not enough stock"
  ]
}
```
_Response (404 - Not Found)_
```
{
  "message": "Data not found"
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### DELETE /carts/:id

> Delete carts

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```

_Request Params_
```
id = [integer]
```
_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
  message: "Success delete cart"
}
```
_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided"
  ]
}
```
_Response (401 - Unauthorized)_
```
{
  "message": "User not authorized"
}
```
_Response (404 - Not Found)_
```
{
  "message": "Data not found"
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---
### PUT /carts

> Update status checkout and update product stock

_Request Headers_
```
{
  "access_token": "<user access token>"
}
```
_Request Body_
```
not needed
```
_Response (200 - OK)_
```
{
  "message": "Success checkout"
}
```
_Response (400 - Bad Request)_
```
{
  "message": [
    "jwt must be provided",
    "Not enough stock"
  ]
}
```
_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
---