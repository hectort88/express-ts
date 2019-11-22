require('dotenv').config()
import path from 'path'
import cors from 'cors'
import csrf from 'csurf'
import express from 'express'
import nunjucks from 'nunjucks'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import webRouter from './routes/web'
import apiRouter from './routes/api'

const app = express()
const port = process.env.PORT || 3000

// API handler
app.use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json())
app.use('/api', cors(), apiRouter)

// Static Files
app.use('/public', express.static(path.join(__dirname, '../public')))

// Nunjucks as render engine
nunjucks.configure('views', {
  autoescape: true,
  express: app,
})

// Web routes with csrf support
app.use(cookieParser())
app.use(csrf({ cookie: true }))
app.use(webRouter)

app.listen(port, () => { console.log(`Server running on port ${port}`) })