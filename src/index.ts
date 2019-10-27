require('dotenv').config()
import path from 'path'
import csrf from 'csurf'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import webRouter from './routes/web'
import apiRouter from './routes/api'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', apiRouter)
app.use('/public', express.static(path.join(__dirname, '../public')))

// Web routes
app.use(cookieParser())
app.use(csrf({ cookie: true }))
app.use(webRouter)

app.listen(port, () => { console.log(`Server running on port ${port}`) })