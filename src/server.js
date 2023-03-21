import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ message: 'Hello Word' })
})

app.listen('3000', () => {
  console.log('Server started')
})
