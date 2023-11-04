# Node.js Firebase Project

This project involves creating a RESTful API using Node.js and Express to interact with Firebase Firestore. Specifically, you will design endpoints for CRUD (Create, Read, Update, Delete) operations on Firestore, focusing on a collection of images.

Additionally, you will create another API for shortening image links and saving the new links on Firebase Firestore. You'll demonstrate your experience using Axios, a popular HTTP client, for this purpose, and you'll make use of the shrtco.de service for shortening links.

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

## images of task
### ImageCollection
![ImageCollection](https://github.com/HebaAli48/ReactFirbaseTask/assets/131808003/d300a43d-5970-4b82-9cdf-4091e37374e8)
![AddImages](https://github.com/HebaAli48/ReactFirbaseTask/assets/131808003/aec8f39b-a681-41ca-bdb8-8fffd7105fb4)
![getAllImages](https://github.com/HebaAli48/ReactFirbaseTask/assets/131808003/c5f686ba-8e8a-4253-a3fe-4de72520ff96)
![updateImg](https://github.com/HebaAli48/ReactFirbaseTask/assets/131808003/9a51ab1c-c651-42a7-bab3-9477b3938901)
![deleteImg](https://github.com/HebaAli48/ReactFirbaseTask/assets/131808003/7e00a17f-b6a5-438e-8e65-584c90d198cb)

### UrlCollection

![UrlCollection](https://github.com/HebaAli48/ReactFirbaseTask/assets/131808003/75c7f89d-cccb-4a19-b991-24aadfc625fb)
![shortingUrl](https://github.com/HebaAli48/ReactFirbaseTask/assets/131808003/ac6d68f8-276f-4be3-aafa-a4d09bbe4825)

#### demo with Url Shorting:
- https://bit.ly/3QjGUUK
