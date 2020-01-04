require('dotenv').config()
import path from 'path'
import express from 'express'
import nunjucks from 'nunjucks'
import bodyParser from 'body-parser'
import webRouter from './routes/web'
import apiRouter from './routes/api'

const app = express()
const port = process.env.PORT || 3000

// API handler
app.use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json())
app.use('/api', apiRouter)

// Static Files
app.use('/public', express.static(path.join(__dirname, '../public')))

// Nunjucks as render engine
nunjucks.configure('views', {
  autoescape: true,
  express: app,
})

// Web routes
app.use(webRouter)

app.listen(port, () => { console.log(`Server running on port ${port}`) })