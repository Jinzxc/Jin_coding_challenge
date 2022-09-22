# Jin's version of the BU H4I FA22 Challenge

This is a mess of frontend and backend code patched together through sleep deprivation

React code is a development version for testing and examining for educational purposes <br/>
Please do not use this for actual deployment (but you can try). 

Access to database is insecure and can by updated and changed how ever one wants. <br/>
By default the local DB is used. Clone and change local to cloud for Atlas.

To test the website:
  1. Access an instance of MongoDB. Do one of the following:
      * Use LOCAL_URL with [MongoDB Community](https://www.mongodb.com/docs/manual/administration/install-community/)
      * Use CLOUD_URL with MongoDB Altas (ask me for the password I guess)
  2. Run [nodemon](https://www.npmjs.com/package/nodemon) in the backend directory on `server.js` to start the server connection with the DB
  3. Run [npm start](https://docs.npmjs.com/cli/v8/commands/npm-start) in the frontend directory to start the React website
  4. Mess around with the the website (bet you didn't see the second the)
  5. ???
  6. Profit
- Code is equipped with route.rest for testing backend routes ([VSCode's REST Client extenstion](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) helps with this) <br/>
- When testing the website the ```<Task/>``` components are draggable but I didn't go crazy with the implementation<br/>so there are going to be positioning bugs

<br/>
Have fun breaking thing!

[![crocodile](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/OrinocoCrocodile.jpg/440px-OrinocoCrocodile.jpg)](https://www.youtube.com/watch?v=RXn1g0xtUMk)