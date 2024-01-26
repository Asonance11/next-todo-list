# Next.js Todo List with Authentication

This is a simple full-stack Todo List application built using Next.js and NextAuth for authentication. The project is created to help me practice Next.js framework and NextAuth(AuthJS) for implementing user authentication.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Asonance11/next-todo-list
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Setting up Authentication

1. Update `.env.local` file with your authentication credentials:

   ```env
   DATABASE_URL=your-database-url
   AUTH_SECRET=your-auth-secret
   NEXT_AUTH_JWT_SECRET=yout-jwt-secret
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. Visit [http://localhost:3000](http://localhost:3000) in your browser to see the Todo List app with authentication.

## Usage

1. Register or log in using the authentication provider you configured.

2. Add and edit tasks in the Todo List.

3. Log out when done.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building web applications.
- [NextAuth(Auth.js)](https://authjs.dev/) - Authentication library for Next.js applications.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. We appreciate your feedback and support.
