const express = require('express');
const routes = require('./Develop/routes');
const sequelize = require('./Develop/config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => { //dont want to run the server until this is done. returns a promise and then run the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});