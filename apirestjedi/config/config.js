module.exports = {
    db : {
        host: 'localhost',
        userName: 'nodeAplication',
        password: 'nodeAplication',
        database: 'JediDataBase'
    }, 
    env : {
        port : 6000,
    }, 
    apiv1 : {
        version: '/api/v1',
        jedi: '/Jedis', 
        userJedi: '/user',
        newUserJedi:'/newUser',
        allUserJedi: '/allUser',
        deleteUserJedi: '/deleteUser',
        modifyUserJedi: '/modifyUser',
    }
}