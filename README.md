# Todo Application

A simple and intuitive Todo application built with **Next.js**, featuring robust user **authentication powered by Clerk** and **data persistence managed by MongoDB**.

## Features

  * **User Authentication:** Secure user authentication and management provided by Clerk, allowing users to sign up, log in, and manage their accounts seamlessly.
  * **Create Todos:** Easily add new todo items to keep track of your tasks.
  * **Mark as Complete:** Mark todo items as complete once you're done with them.
  * **Delete Todos:** Remove unwanted todo items from your list.
  * **Persistent Storage:** All your todo data is securely stored and retrieved from a **MongoDB database**, ensuring your tasks are saved across sessions.
  * **Responsive Design:** A user-friendly interface that works well on various devices.

## Technologies Used

  * **Next.js:** A React framework for building server-side rendered and static web applications.
  * **Clerk:** For comprehensive user authentication and authorization.
  * **MongoDB:** A NoSQL database for storing todo items and user data.
  * **Mongoose:** (Likely used for MongoDB interactions) An elegant MongoDB object modeling for Node.js.
  * **Tailwind CSS:** (Potentially used for styling) A utility-first CSS framework for rapidly building custom designs.

-----

## Deployment

The Todo application is deployed and accessible at:

[https://todo-app-ivory-eta-81.vercel.app/](https://todo-app-ivory-eta-81.vercel.app/)

-----

## Getting Started (For Developers)

To set up and run this project locally, follow these steps:

### Prerequisites

  * Node.js (LTS recommended)
  * npm or yarn
  * A Clerk account (for API keys)
  * A MongoDB Atlas account or a local MongoDB instance (for database connection string)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd todo-application
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**

    Create a `.env.local` file in the root of your project and add the following:

    ```
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_your_clerk_publishable_key
    CLERK_SECRET_KEY=sk_your_clerk_secret_key
    MONGODB_URI=your_mongodb_connection_string
    ```

      * Replace `pk_your_clerk_publishable_key` and `sk_your_clerk_secret_key` with your actual Clerk API keys. You can find these in your Clerk dashboard.
      * Replace `your_mongodb_connection_string` with your MongoDB connection URI.

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the application.

-----

## Project Structure (Example)

```
.
├── public/
├── app/                    # Next.js App Router
│      ├── (auth)/             # Authentication routes (e.g., sign-in, sign-up)
│      ├── api/                # API routes
│      └── page.tsx            # Main application page
│── components/             # Reusable React components
│── lib/
│── mongodb.ts          # MongoDB connection setup
│── utils.ts            # Utility functions
│── models/
│         └── Todo.ts             # Mongoose Todo schema
├── .env.local
├── next.config.js
├── package.json
└── README.md
```
