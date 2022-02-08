require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL //ternary operator
  ? new Sequelize(process.env.JAWSDB_URL) //does it have a jaws db file?
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, { //if not do this
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
