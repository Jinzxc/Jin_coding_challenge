# Jin's version of the BU H4I Challenge

This is a mess of frontend and backend code patched together through sleep deprivation

React code is a development version for testing and examining for educational purposes <br/>
Please do not use this for actual deployment (but you can try). 

Access to database is insecure and does not check for credentials (there aren't even credential checks in the code).

To test the website:
  1. start a running local instance of MongoDB ([MongoDB Community download](https://www.mongodb.com/docs/manual/administration/install-community/))
  2. run [nodemon](https://www.npmjs.com/package/nodemon) in the backend directory on `server.js` to start the DB in the background
  3. run [npm start](https://docs.npmjs.com/cli/v8/commands/npm-start) in the frontend directory to start the React website
  4. Mess around with the the website (bet you didn't see the second the)
  5. ???
  6. Profit
- Code is equipped with route.rest for testing backend routes ([VSCode's REST Client extenstion](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) helps with this) <br/>
- When testing the website the ```<Task/>``` components are draggable but I didn't go crazy with the implementation <br/> so there are going to be positioning bugs

<br/>
Have fun breaking thing!

[![crocodile](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/OrinocoCrocodile.jpg/440px-OrinocoCrocodile.jpg)](https://www.youtube.com/watch?v=RXn1g0xtUMk)
