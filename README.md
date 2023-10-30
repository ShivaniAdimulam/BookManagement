# BookManagement

# Introduction
This is an elegant, backend Book Management System developed using Node.js. It provides an intuitive interface for administrators/users, allowing them to seamlessly perform CRUD operations (Create, Read, Update, Delete) for books. The system also incorporates a secure authentication mechanism, safeguarding all APIs with an authentication middleware. In addition, it includes a user-friendly logout feature for administrators/users.

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

# 1)Login Api
  
   - To login the user use this api
   
   - End Point is /admin/login
   
   - Use HTTP Post method
   
   - In request body pass data --> { "email":"admin@gmail.com", "password":"admin123"}
   
 Note: Enter the login credetntials to get loggedin : email: admin@gmail.com  and password: admin123  Or You can create your new admin using admin/addAdmin api

# 2) Add Book Api
   
   - Use this Api to add new book.

   - End Point is /book/addBook
   
   - Use HTTP Post method
   
   - In request body pass data --> { "title":"Data structure and algo", "author":"ABC", "summary":"This book is related to data struture and algorithm" }

   - Please pass Authorization token with the api request ,Token type is Bearer token,While passing token in postman please select Bearer token as authorizaton token type.(Pass the token which we will get in above login api response)

# 3) Get Books List

   - Purpose of this api is To get all non deleted books list.
  
   - End Point is /book/getBooksList
   
   - Use HTTP Get method
  
   - Please pass Authorization token with the api request ,Token type is Bearer token,While passing token in postman please select Bearer token as authorizaton token type.(Pass the token which we will get in above login api response)

# 4) Get Book Details by id

   - We can use this api to get the details of book by passing its _id.
   
   - End Point is /book/getBookDetailsById
   
   - Please pass bookId as a query params.

   - Use HTTP Get Method.

   - For example --> {{url}}/book/getBookDetailsById?bookId=653fb38e89d90af2a0a2fa37

   - Please pass Authorization token with the api request ,Token type is Bearer token,While passing token in postman please select Bearer token as authorizaton token type.(Pass the token which we will get in above login api response)

# 5) Update Book Details

  - To update book details we can use this api.

  - End point is /book/updateBook

  - Use HTTP Put Method.

  - In request body pass data --> { "bookId":"653fb38e89d90af2a0a2fa37","title":"Data structure and algo", "author":"ABC", "summary":"This book is related to data struture and algorithm" }

  - Please pass Authorization token with the api request ,Token type is Bearer token,While passing token in postman please select Bearer token as authorizaton token type.(Pass the token which we will get in above login api response)

# 6) Delete Book

   - We can use this api To delete the book.

   - End Point is /book/deleteBook

   - Use HTTP Put Method (I used Put method here as i am performing soft deletion, I am changing book document's isdeleted key's value to true)

   - In request body pass bookId ---> { "bookId":"653fb38e89d90af2a0a2fa37"}

   - Please pass Authorization token with the api request ,Token type is Bearer token,While passing token in postman please select Bearer token as authorizaton token type.(Pass the token which we will get in above login api response)

# 7) Logout Api

  - To logout the user/admin we can use this api.

  - End point for this api is /book/deleteBook

  - Use HTTP Put Method.

  - Please pass Authorization token with the api request ,Token type is Bearer token,While passing token in postman please select Bearer token as authorizaton token type.(Pass the token which we will get in above login api response)

# Deployment Process

 I deployed my project using the railway.app platform and leveraged GitHub for the deployment process. To ensure a smooth deployment, I included all the necessary environment variables from my .env file and specified the start command within the project deployment settings.

Once the deployment was successfully completed, I obtained a unique URL (i.e https://bookmanagement-production.up.railway.app) generated by the railway.app platform for my project. This URL served as the base address for accessing my application. I was able to effortlessly execute all of my APIs by utilizing this URL, ensuring that my project functioned as expected.
# Configuration
You can configure various settings in the project by modifying the corresponding .env file.

# Acknowledgments
Thank you to the Node.js community for providing the tools and resources necessary to build this project.
