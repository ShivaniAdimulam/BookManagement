# BookManagement

# Introduction
This is a simple Book management system(Backend APIs)built using Node.js. It allows admin to login and to perform CRUD (Create, Read, Update, Delete) operations for books.Logout functionality for admin is also there in the project.All apis are secured with auth middleware.

# Features
Create, Read, Update, and Delete Books.

Create ,Login and Logout Admin.

# Getting Started
Follow these steps to get the project up and running:

# Prerequisites
Node.js installed on your machine

npm package manager

# Installation
Clone the repository to your local machine:
git clone https://github.com/ShivaniAdimulam/BookManagement.git

Note:- Project is on master branch ,please select master branch after cloning.



# To Install backend dependencies:

npm install


# Usage
# To Start the backend server:

npx nodemon server.js 

Open your Postman Web/Desktop application and Hit all the below apis using mentioned endpoints,request body data(if required) and auth token.

# To Set the Postman variables
Set variables in postman collection as follow:
1)URL
  Variable Name = url  
  
  Value = https://bookmanagement-production.up.railway.app       (This is Live server base url)
  
  Or
  
  Value = http://localhost:4000       (This is local server url ,if in case You run this project on local desk then You can use this url for running the APIs)

 2)Auth Token
   Variable Name= token
   Pass token as a value for this variable,You will get this token after running login api (login api endPoint is "/admin/login")

# All API's Info

#1)Login Api


Enter the login credetntials to get loggedin : Email: adimulamshivani@gmail.com  and Password: shivani@100

# Configuration
You can configure various settings in the project by modifying the corresponding .env file.

# Acknowledgments
Thank you to the Node.js community for providing the tools and resources necessary to build this project.
