//** Dependences  */
const express = require('express')
const router = express.Router()
const app = express()
const bodyParser = require('body-parser')
//** Config */
const {env: {port}} = require('./config/config')
//** Routes */
const routes = require('./routes/index')

app.use(bodyParser.json())
app.use(routes(router))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

