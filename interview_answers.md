# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.

    To start, web serverices nowadays dealing with JSON often use JSON Web Token. These tokens are strings of cryptic text, 
    which can be store on the client-side using session storage or local storage, as seen today. The server can tell the client
    it issued the token. Also, it can read the token and say whay data can be transferred. 

2. What steps can you take in your web apps to keep your data secure?

    As mentioned above, you can use a token to only allow access to the person with said token. You can also implement protected routes.
    Protected routes will check to see if they user has a auth token and only allow permission to that person. The client will make a login request,
    this will then send the server the users information. If the information is matches what is on the server, it will then return a token. 
    Now we can provided two layers of secruity to our application. Using protected routes and auth headers.  

3. Describe how web servers work.

    There can be two meanings to web servers, one a computer that stores the code for a website, or a program that runs on such a computer.
    The actually computer is connected to the internet, it can store the code for different websites across the globe. The server itself will
    also need code to tell it what to do. Its main purpose is to 'serve' the web page(s) it retrives from a project code to users upon request. 

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    Create- POST - is used to send data to a server to create/update a resource. 
    Read- GET - is used to retrieve and request data from a specified resource in a server
    Upade- PUT - is the method we use to change a resource's information. PUT takes a body object and IDs data that needs to be updated. 
    Delete- DELETE - is used to delete or destroy data that is not on the webpage. When calling delete, we are telling the webpage to remove information from somewhere.