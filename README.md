# Communities
Web application for managing obligations and duties of the members of a community.

# Set up
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Copy `.env.example` file into `.env` file and fill the environment variables.
4. Push Prisma schema to database using `npm run db:push`
5. Run the application in development mode using `npm run dev`

# Folder structure
In this section will be described the chosen folder structure for the development of this project. It will explain folder organization for `src` and its sub directories.

- `app`: This is the core application folder. It applies `app router` rules from **Next js**. Each folder represents a page or api route of the application. Page directories usually will contain `components`, `hooks` and `queries` subdirectories; which are used for organize page only components, custom hooks and queries respectively.
- `components`: This will contain **shared and reusable ui components**. It has an `ui` sub directory which is dedicates only for `shadcn-ui`  installable components. Then, the components which are not inside `ui`; are custom reusable components which are used in multiple pages and application modules.
- `hooks`: This will contain **shared and reusable custom hooks**. These are hooks which are used across multiple pages and accomplish generic behaviors.
- `lib`: Utilities folder for helper functions.
- `server`: Provides infrastructure configuration for resources used in server, like **database, mailing, authentication, etc**.
- `shared`: It organizes shared schemas and types that will be used by frontend and backend. Usually used for validation schemas, payloads and responses between client and server.
- `styles`: Styling folder with base configuration for `shadcn-ui` and `tailwindcss`.
- `env.js` file: It contains the schema validation for **environment variables**. It should be modified if new environment variables are added or existing variables are modified.