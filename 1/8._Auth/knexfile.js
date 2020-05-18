// Update with your config settings.
const credentials = require("./config/mysqlCredentials.js");

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: credentials.database,
      user: credentials.user,
      password: credentials.password,
      insecureAuth : true
    }
  },

};