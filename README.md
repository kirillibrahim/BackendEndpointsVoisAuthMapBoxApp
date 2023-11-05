# Backend Task Documentation for _VOIS Frontend Task
This documentation provides an overview of the backend task, including endpoints, requirements, and setup instructions for the Node.js backend application.

## Endpoints

The backend application provides the following endpoints:

### User Registration

- **URL:** `/api/register`
- **Method:** POST
- **Description:** Allows users to register with a name, email, and password.
- **Request Body:** JSON object containing user details.
- **Sample Request:**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "your_password_here"
  }
  ```
- **Responses:**
  - 201 Created: User registered successfully.
  - 400 Bad Request: User already exists.
- **Sample Response (Success):**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

### User Login

- **URL:** `/api/login`
- **Method:** POST
- **Description:** Allows users to log in using their email and password.
- **Request Body:** JSON object containing user's email and password.
- **Sample Request:**
  ```json
  {
    "email": "johndoe@example.com",
    "password": "your_password_here"
  }
  ```
- **Responses:**
  - 200 OK: Login successful.
  - 401 Unauthorized: Invalid credentials.
- **Sample Response (Success):**
  ```json
  {
    "message": "Login successful"
  }
  ```

### User Data

- **URL:** `/api/users`
- **Method:** GET
- **Description:** Retrieves a list of users.
- **Sample Response (Success):**
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com"
    }
    // Add more users
  ]
  ```

### Polygon Data

- **URL:** `/api/polygons`
- **Method:** GET
- **Description:** Retrieves a list of polygons for use in the dropdown list.
- **Sample Response (Success):**
  ```json
  [
    {
      "id": "1",
      "reg_name": "Polygon 1"
    },
    {
      "id": "2",
      "reg_name": "Polygon 2"
    },
    {
      "id": "3",
      "reg_name": "Polygon 3"
    }
    // Add more polygons as needed
  ]
  ```

### Get Single Polygon

- **URL:** `/polygon/:id`
- **Method:** GET
- **Description:** Retrieves details of a single polygon by its ID.
- **Sample Response (Success):**
  ```json
  {
    "id": "1",
    "reg_name": "Polygon 1"
  }
  ```

## Requirements

- The backend is implemented using Node.js and Express.js.
- Endpoints are documented and working as described.
- The server uses CORS for enabling cross-origin requests.
- The project uses TypeScript for type safety.
- The backend stores user data in memory (for demonstration purposes).

## Setup Instructions

To run the backend server, follow these steps:

1. Clone the repository from GitHub.
2. Install project dependencies using `npm install`.
3. Run the following command `npx tsc`.
4. Start the server with `node ./dist/app`.
4. The backend will be accessible at `http://localhost:3000`.

