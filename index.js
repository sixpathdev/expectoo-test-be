const fs = require('fs')
const express = require('express')
const csv = require('csv-parser')
const multer = require('multer')
const cors = require('cors')
const Book = require('./models/book.model')
const upload = multer({ dest: './public/data/uploads/' })
const dbconnection = require('./config/connection')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).json({ data: 'Api works!' })
})

app.post('/upload-csv', upload.single('csvfile'), (req, res) => {
  const results = []
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (data) => {
      results.push(data)
    })
    .on('end', () => {
      console.log(results)
      const bookdata = Book.bulkCreate(results)
      return res
        .status(201)
        .json({ staus: 'success', data: bookdata, message: 'data saved' })
    })
})

app.get('/records', async (req, res) => {
  const records = await Book.findAll()
  return res
    .status(200)
    .json({ staus: 'success', data: records })
})

const connectDb = async () => {
  try {
    await dbconnection.authenticate()
    console.log('Connection established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
const PORT = process.env.PORT || 5500
app.listen(PORT, () => {
  connectDb()
  console.log('Server running')
})
