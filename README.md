# Library Management System API

A backend API for a Library Management System, enabling CRUD operations for books, members, and borrowing activities. Built using **Node.js**, **Express**, **Prisma ORM**, **PostgreSQL**, and **TypeScript**.

## Technology Stack & Packages

-   **Node.js** - Backend runtime
-   **Express** - Web framework for handling routes and middleware
-   **TypeScript** - Type safety and improved developer experience
-   **Prisma ORM** - For database schema, migrations, and querying
-   **PostgreSQL** - Relational database for data storage
-   **UUID** - Unique identifier for each record in all tables

## Features & Endpoints

1. **Book CRUD Operations**

    - `POST /api/books` - Create a new book
    - `GET /api/books` - Retrieve all books
    - `GET /api/books/:bookId` - Retrieve a specific book by ID
    - `PUT /api/books/:bookId` - Update book information
    - `DELETE /api/books/:bookId` - Delete a book

2. **Member CRUD Operations**

    - `POST /api/members` - Register a new library member
    - `GET /api/members` - Retrieve all members
    - `GET /api/members/:memberId` - Retrieve a specific member by ID
    - `PUT /api/members/:memberId` - Update member details
    - `DELETE /api/members/:memberId` - Delete a member

3. **Borrow & Return Books**
    - `POST /api/borrow` - Record a borrowed book
    - `POST /api/return` - Return a borrowed book
    - `GET /api/borrow/overdue` - List all overdue borrowed books

### Error Handling

Each endpoint follows a structured error response:

```json
{
  "success": false,
  "status": <HTTP_STATUS_CODE>,
  "message": "<Error message>"
}
```

### Overdue Book Calculation

Books not returned within 14 days are marked as overdue.

## Setup Instructions

1.  **Clone the Repository**

    ```bash
    git clone [repository_url]
    cd library-management
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Environment Variables Create a .env file in the project root and add the following:**

    ```makefile
    DATABASE_URL="your_postgresql_database_url"
    ```

4.  **Initialize Prisma and Migrate Database**

    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Run the Application**

    ```bash
    npm run dev
    ```

### Key Features & Functionality

-   Full CRUD support for book and member management.
-   Borrow and return tracking for books.
-   Overdue book reporting, with 14-day borrowing policy.
-   Robust error handling for all endpoints.
-   Known Issues/Bugs
-   [List any unresolved issues or bugs here, or remove this section if none]

## Live URL

[Insert live deployment URL here]
