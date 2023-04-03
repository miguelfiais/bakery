import express from 'express'
import routes from './routes'
import cors from 'cors'
import { resolve } from 'path'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/image', express.static(resolve(__dirname, '../', 'uploads')))
routes(app)

app.listen('3000', () => {
  console.log('Server started')
})
