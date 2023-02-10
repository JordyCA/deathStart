const users = require('./jedis/users')

module.exports = (router) => {
    users(router)
    return router
}