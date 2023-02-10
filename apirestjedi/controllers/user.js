const { request } = require('express')

const user = require('../models/user')


module.exports = {
    //** Get request */
    getUser : (request, response) => {
        const { id } = request.query
        if ( id ) {
            user.getUser( id, (error, data) => {
                return response.status(200).json({data : data})
            })
        } else {
            return response.status(406).json({error : "Hace falta información" })
        }
    },
    getAllUsers: (request, response) => {
        user.getAllUsers((error, data) => {
            if (error) {
                return response.status(500).send(`Ocurrió un error con petición ${error.message || ''}`)
            }
            return response.status(200).json({data : data })
        })
    },
    //** Post request */
    setNewUser: (request, response) => {
        try {
            const { nombre, apellido_paterno, apellido_materno, estilo_batalla} = request.body;
            if (nombre && apellido_paterno && apellido_materno && estilo_batalla) {
                user.setNewUser( request.body, (error, data) => {
                    if (error) {
                        return response.status(500).send(`Ocurrió un error con petición ${error.message || ''}`)
                    }
                    return response.status(202).json({data : { message : "La información se guardo correctamente."} })

                })
            } else {
                return response.status(406).json({error : "Hace falta información" })
            }
        } catch (error) {
            return response.status(500).send(`Ocurrió un error con petición ${error.message || ''}`)
        }

    },
    setUpdateUser : (request, response) => {
        try {
            const { id, nombre, apellido_paterno, apellido_materno, estilo_batalla} = request.body;
            if (id && (nombre || apellido_paterno || apellido_materno || estilo_batalla)) {
                user.setUpdateUser( request.body, (error, data) => {
                    if (error) {
                        return response.status(500).send(`Ocurrió un error con petición ${error.message || ''}`)
                    }
                    return response.status(202).json({data : { message : "La información se guardo correctamente."} })

                })
            } else {
                return response.status(406).json({error : "Hace falta información" })
            }
        } catch (error) {
            return response.status(500).send(`Ocurrió un error con petición ${error.message || ''}`)
        }
    }
    
    ,
    //** Delete request */
    deleteUser: (request , response) => {
        try {
            const { id } = request.body
            if ( id ) {
                user.setDeleteUserLogic(id, (error, data) => {
                    if (error) {
                        return response.status(500).send(`Ocurrió un error con petición ${error.message || ''}`)
                    }
                    return response.status(202).json({data : {message: "Se dio de baja al usuario."}})
                })
            } else {
                return response.status(406).json({error : "Hace falta información" })
            }
        } catch (error) {
            return response.status(500).send(`Ocurrió un error con petición ${error.message || ''}`)
        }
    }
}