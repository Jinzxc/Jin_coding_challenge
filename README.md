# Jin's version of the BU H4I FA22 Challenge

React code is a development version for testing and examining for educational purposes only <br/>

Access to database is insecure and can by updated and changed how ever one wants. <br/>
By default the local DB is used. Clone and change local to cloud for Atlas.

To test the website:
  1. Access an instance of MongoDB. Do one of the following:
      * Use LOCAL_URL with [MongoDB Community](https://www.mongodb.com/docs/manual/administration/install-community/)
      * Use CLOUD_URL with MongoDB Altas
  2. Run [nodemon](https://www.npmjs.com/package/nodemon) in the backend directory on `server.js` to start the server connection with the DB
  3. Run [npm start](https://docs.npmjs.com/cli/v8/commands/npm-start) in the frontend directory to start the React website
  
- Code is equipped with route.rest for testing backend routes ([VSCode's REST Client extenstion](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) helps with this) <br/>
- When testing the website the ```<Task/>``` components are draggable but there are positioning bugs.

<br/>

![crocodile](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/OrinocoCrocodile.jpg/440px-OrinocoCrocodile.jpg)
