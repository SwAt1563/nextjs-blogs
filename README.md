# Blogs Website

Welcome to the GitHub repository of Blogs, a dynamic and feature-rich blogging platform designed to offer an intuitive, efficient, and engaging user experience. Built with modern technologies, this platform aims to provide a seamless interface for users to create, share, and discover content. Below, you'll find an overview of the technologies used, setup instructions, and other relevant information about the project.

## Technologies Used

- **Framework**: Next.js 14
- **Database**: PostgreSQL hosted on Vercel
- **ORM**: Prisma with Accelerate for caching
- **API**: Apollo GraphQL for handling queries and mutations
- **Authentication**: Auth0
- **Authorization**: Two roles implemented ('User', 'Admin')
- **Styling**: Bootstrap
- **Client Cache**: Apollo Client Cache
- **Image Storage**: AWS S3
- **Data Validation**: Zod
- **UI Loading**: Skeletons for handling loading states

## Features

- **Dynamic Content Management**: Easily create, update, and delete blog posts.
- **Advanced Search Capability**: Utilize URL parameters for bookmarking and easy retrieval of favorite posts.
- **Robust Authentication & Authorization**: Secure login process with Auth0 and role-based access control.
- **Efficient Data Handling**: Prisma ORM for optimized database interactions.
- **Seamless User Experience**: Apollo GraphQL ensures smooth data flow between the frontend and backend.
- **Responsive Design**: Bootstrap for a mobile-friendly and responsive design.
- **Optimized Loading**: Skeleton screens to improve the perceived loading time of pages.

## Getting Started

### Prerequisites

- Node.js (preferably the latest LTS version)
- PostgreSQL database
- An AWS account for S3 bucket setup
- Auth0 account for authentication

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/SwAt1563/nextjs-blogs.git
cd nextjs-blogs
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file at the root of your project and include the following variables:

```env
GRAPHQL_URL="http://localhost:3000/api/graphql"

# when using prisma accelerate
DATABASE_URL=
DIRECT_DATABASE_URL=

NEXT_AWS_S3_BUCKET_NAME=
NEXT_AWS_S3_REGION=
NEXT_AWS_S3_ACCESS_KEY_ID=
NEXT_AWS_S3_SECRET_ACCESS_KEY=


AUTH0_SECRET=
AUTH0_BASE_URL=
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
```

4. **Run the development server:**

```bash
npm run dev
```

Your server should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- Navigate to the website, sign up or log in to start exploring.
- As an **Admin**, you can manage all blog posts.
- As a **User**, you can create, edit, and delete your blog posts.
- Use the search feature to easily find your favorite posts and bookmark them for future reference.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- Next.js Team for the awesome framework.
- Prisma Team for the intuitive ORM.
- Apollo GraphQL for the powerful API management.
- Auth0 for the secure authentication system.
- And all other libraries and frameworks that made this project possible.

---

This README provides a comprehensive guide to getting started with the my Blogs website project. For any additional help or information, feel free to open an issue or submit a pull request. Happy blogging!
