const v1 = require('./api/v1/index')

module.exports = (router) => {
    v1(router)
    return router
}