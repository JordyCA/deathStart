//** Configuration */
const {apiv1:{version, jedi, userJedi, allUserJedi, newUserJedi, deleteUserJedi, modifyUserJedi}} = require('../../../../config/config')
//** Controllers */
const user = require('../../../../controllers/user')
const routeJedi = `${version}${jedi}`

module.exports = (router) => {
    //** Post request */
    router.route(`${routeJedi}${newUserJedi}`).post((req, res) => { user.setNewUser(req,res)})
    router.route(`${routeJedi}${modifyUserJedi}`).post((req, res) => { user.setUpdateUser(req,res)})
    //** Delete request */
    router.route(`${routeJedi}${deleteUserJedi}`).delete((req,res) => {user.deleteUser(req, res)})
    //** Get request */
    router.route(`${routeJedi}${allUserJedi}`).get((req, res)=> { user.getAllUsers(req, res) })
    router.route(`${routeJedi}${userJedi}`).get((req, res) => {user.getUser(req, res)})
}