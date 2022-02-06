require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL //ternary operator
  ? new Sequelize(process.env.JAWSDB_URL) //does it have a jaws db file?
  : new Sequelize('ecommerce_db', 'root', 'CrayolaBubble15!', { //if not do this
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
