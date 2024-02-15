## Blog Application
This project aims to develop a personal blog application using Next.js and Prisma as the ORM for database management. The application allows users to create, view, and delete articles with a seamless integration between the user interface and the persistent data layer.

## Features
# Home Page
Display a list of articles from the database on the home page.
Each article should show its title, publication date, and a snippet of the content.
# Article Detail Page
Enable users to view the complete details of an article by clicking on it.
The detail page should display the title, full content of the article, and the publication date.
# Article Creation
Implement a feature for users to create a new article.
Allow users to enter the title and content of the article.
Store newly created articles in the database using Prisma.
# Article Deletion
Provide the ability to delete an article.
Ensure that the deletion is synchronized with the database.
## Technical Constraints
Use Next.js for building the application.
Employ Prisma for the ORM and database management (choose a database compatible with Prisma).
Implement Next.js routing features for navigation.
Utilize React's state management hooks for data manipulation.
## Getting Started
To get started with the development environment and dependencies, please follow these steps:

Clone the repository: git clone <repository-url>
Navigate to the project directory: cd <project-directory>
Install dependencies: npm install
Configure the database connection in the Prisma configuration file.
Start the development server: npm run dev
Visit http://localhost:3000 to interact with the blog application.
Feel free to modify the project based on your specific requirements and design preferences. Happy coding!


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
