# Barcelove

Welcome to Barcelove! This project is an interactive web application designed to help you explore and fall in love with the beautiful city of Barcelona. Whether you're a local or a tourist, Barcelove provides you with personalized itineraries, user reviews, and detailed maps to make your experience in Barcelona unforgettable.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Interactive Maps**: Navigate through Barcelona with detailed and interactive maps.
- **Local Attractions**: Discover top attractions, restaurants, and hidden gems.
- **User Reviews**: Read and write reviews for various places in Barcelona.
- **Personalized Itineraries**: Create, save, and share custom travel itineraries.
- **Real-time Updates**: Stay updated with the latest events and activities.

## Technologies Used

- **Frontend**: 
  - React
  - HTML
  - CSS
- **Backend**: 
  - Node.js
  - Express
- **Database**: 
  - MongoDB
- **Version Control**: 
  - Git
- **Design**: 
  - Figma

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/DiscoJordan/Barcelove.git

2. Run `npm i` from `./client` and `./server` folders to install all dependencies:
   ```bash
   cd server
   npm i
   cd ..
   cd client
   npm i

   
- In `./server`, create `.env` file with following variables (you can use local database) :

  - MONGO (database link)
  - JWT_SECRET (jwt secret)
  - CLOUD_NAME (Cloudinary Cloud name )
  - API_KEY (Cloudinary API key)
  - API_SECRET (Cloudinary API secret)
  - NODEMAILER_EMAIL (email)
  - NODEMAILER_PASSWORD( For nodemailer password you need to generate an application password in your google account (assuming that we are using gmail) https://support.google.com/mail/answer/185833?hl=en)
  - DESTINATION_EMAIL

 - In `./client`, create `.env` file with following variables :

   - REACT_APP_CLOUD_NAME (Cloudinary Cloud name )
   - REACT_APP_UPLOAD_PRESET (Cloudinary Cloud upload preset )
   - REACT_APP_GOOGLE_MAP (Google map api key)

 
    
- Run `./client` with `npm start` and `./server` with `nodemon`
