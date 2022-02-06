// DONE - GIVEN a functional Express.js API
// DONE - WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
// DONE - THEN I am able to connect to a database using Sequelize
// DONE - WHEN I enter schema and seed commands
// DONE - THEN a development database is created and is seeded with test data
// DONE - WHEN I enter the command to invoke the application
// DONE - THEN my server is started and the Sequelize models are synced to the MySQL database
// WHEN I open API GET routes in Insomnia for categories, products, or tags
// THEN the data for each of these routes is displayed in a formatted JSON
// WHEN I test API POST, PUT, and DELETE routes in Insomnia
// THEN I am able to successfully create, update, and delete data in my database

const express = require('express');
const routes = require('./Develop/routes');
const sequelize = require('./Develop/config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => { //WHAT DOES WRAPPING THIS IN SEQUELIZE DO
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});