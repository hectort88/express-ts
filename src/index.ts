require('dotenv').config()
import path from 'path'
import express from 'express'
import router from './router'

const app = express()
const port = process.env.PORT || 3000

app.use('/public', express.static(path.join(__dirname, '../public')))
app.use(router)

app.listen(port, () => { console.log(`Server running on port ${port}`) })