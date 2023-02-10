//** Dependences */
const mysql = require('mysql')
//** Config */
const mySqlConnection = require('../utils/databases/db')


module.exports =  {
    getUser: (id, result) => {
        const query = "SELECT * FROM user WHERE id = ?"
        mySqlConnection.query( query, [id], (error, results) => {
            if (error) result(error, null)
            result(null,results)
        })
    },
    getAllUsers : ( result ) =>  {
        const query = 'SELECT * FROM user WHERE is_activo = 1;'
        mySqlConnection.query(query, (error, results) => {
            if (error) return result(error, null) 
            return result(null, results)
        })
    },
    setNewUser: ({nombre, apellido_paterno, apellido_materno, estilo_batalla}, result) => {
        const post = {
            nombre: nombre, 
            apellido_paterno: apellido_paterno,
            apellido_materno: apellido_materno, 
            estilo_batalla_id: estilo_batalla
        }
        mySqlConnection.query('INSERT INTO user SET ? ', post, (error, results) => {
            if (error) result(error,null)
            return result(null, results)
        })
    }, 
    setDeleteUserLogic : (id, result) => {
        const query = 'UPDATE user SET is_activo = ?, update_date = ? WHERE id = ?'
        const CURRENT_TIMESTAMP = mysql.raw('CURRENT_TIMESTAMP()');
        mySqlConnection.query(query, [0, CURRENT_TIMESTAMP, parseInt(id)], (error, results) => {
            if (error) result(error,null)
            return result(null, results)
        })

    },
    setUpdateUser: (user, result) => {
        const { id, nombre, apellido_paterno, apellido_materno, estilo_batalla} = user
        const CURRENT_TIMESTAMP = mysql.raw('CURRENT_TIMESTAMP()');
        let query = 'UPDATE user SET '
        const dataArray = []

        query += ' update_date = ? '
        dataArray.push(CURRENT_TIMESTAMP)

        if (nombre) {
            query += ',nombre = ? '
            dataArray.push(nombre)
        }
        if (apellido_paterno) {
            query += ',apellido_paterno = ? '
            dataArray.push(apellido_paterno)
        }
        if (apellido_materno) {
            query += ',apellido_materno = ? '
            dataArray.push(apellido_materno)
        }
        if (estilo_batalla) {
            query += ',estilo_batalla_id = ? '
            dataArray.push(estilo_batalla)
        }
        query += 'WHERE id = ? '
        dataArray.push(id)

        console.log(query)
        console.log(dataArray)

        mySqlConnection.query(query, dataArray, (error, results) => {
            if (error) result(error,null)
            return result(null, results)
        })
    }

    
}