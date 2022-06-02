# Vouch Digital - Backend Developer/Node.js Development Task

This is Nodejs REST API for the assignment given.
The API has 2 Models ie Address and User.

The API is Well Secured. Only Authenticated Users can Access Address Route and Only ADMINs can Use User CRUD Operations.

Use Register Route to Register Yourself to the API and Use Login Route to Login onto the System.

## Routes are explained below :-

### User Route

- **GET** - /user <br>
  Use this Route to Get All the Users Present in the Database.

- **GET** - /user/:id <br>
  Use this Route to Get Specific User Present in the Database by Providing ID in the Parameter.

- **POST** - /user <br>
  Use this Route to Create a User. Insert all the data in the Body when calling this Route.

- **PUT** - /user/:id <br>
  Use this Route to Update A Specific User Present in the Database By providing its ID in the parameter

- **DELETE** - /user/:id <br>
  Use this Route to Delete A Specific User Present in the Database By providing its ID in the parameter

### Address Route

- **GET** - /address <br>
  Use this Route to Get All the Addresses Present in the Database.

- **GET** - /address/:id <br>
  Use this Route to Get Specific Address Present in the Database by Providing ID in the Parameter.

- **POST** - /address <br>
  Use this Route to Create a Address. Insert all the data in the Body when calling this Route.

- **PUT** - /address/:id <br>
  Use this Route to Update A Specific Address Present in the Database By providing its ID in the parameter

- **DELETE** - /address/:id <br>
  Use this Route to Delete A Specific Address Present in the Database By providing its ID in the parameter

### Auth Route

- **POST** - /auth/login <br>
  Use this Route to Login into the System.

- **POST** - /auth/register <br>
  Use this Route to Register into the System.

### Note

To Authenticate use Header with the key _'x-auth-token'_ and pass token as its **value**.

### Install Node Mudules

```
npm install
```

### Run App in Development Mode

```
npm run dev
```

### Run App in Production Mode

```
npm start
```
