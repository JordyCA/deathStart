//** Dependences */
const mysql = require('mysql')
//** Config Files */
const { db:{host, userName, password, database}} = require('../../config/config')

const connection = mysql.createConnection({
    host: host,
    user: userName,
    password: password, 
    database: database
});

connection.connect( error => {
    if (error) throw error

    console.log("Complete conection")
})

module.exports = connection