import express from 'express'
import session from 'express-session'
import parser from 'body-parser'
import routes from './routes.js'
import {resetDatabase} from './databaseUtils.js'

resetDatabase()

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(parser.urlencoded({ extended: true }))
app.use(session({
    name: 'AIA nodejs',
    secret: 'To be, or not to be, that is the question',
    resave: false,
    saveUninitialized: false,
}))

app.use('/', routes)

app.listen(5000)