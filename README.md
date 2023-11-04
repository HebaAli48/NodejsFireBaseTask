# Node.js Firebase Project

This project involves creating a RESTful API using Node.js and Express to interact with Firebase Firestore. Specifically, you will design endpoints for CRUD (Create, Read, Update, Delete) operations on Firestore, focusing on a collection of images.

Additionally, you will create another API for shortening image links and saving the new links on Firebase Firestore. You'll demonstrate your experience using Axios, a popular HTTP client, for this purpose, and you'll make use of the shrtco.de service for shortening links.

Technology Stack

## Technology stack

- Node.js
- Express
- Firebase Firestore
- Axios

## Used Packages

- Multer: Uploading files.
- DotEnv: Environment variables.
- nodemon:

## API Endpoints

### Images API (CRUD Operations)

#### Create Image (POST)

- Endpoint: /images
- Description: Create a new image in Firestore. Accepts image file uploads.

#### Read All Images (GET)

- Endpoint: /images
- Description: Retrieve all images from Firestore.

#### Read Single Image (GET)

- Endpoint: /images/:id
- Description: Retrieve a single image by ID.

#### Update Image (patch)

- Endpoint: /images/:id
- Description: Update an existing image by ID. Accepts image file uploads for replacement.

#### Delete Image (DELETE)

- Endpoint: /images/:id
- Description: Delete an image by ID.

### URL Shortening API

#### Shorten URL (POST)

- Endpoint: /shorturl
- escription: Shorten an image link using the shrtco.de service and save the new link in Firestore.

## Getting Started with project

1. Clone the project to your local machine.
2. Install the required dependencies using npm install.
3. Configure your environment variables in a .env file.
4. Start the server using npm start.

Please make sure to secure your .env file and protect sensitive information.
