import multer from 'multer'
import storage from '../config/multer'
import {
  create,
  destroy,
  index,
  update,
} from '../controllers/category.controller'

const upload = multer({ storage })

const categoryRoutes = (app) => {
  app.post('/category', upload.single('file'), create)
  app.get('/category', index)
  app.put('/category/:id', upload.single('file'), update)
  app.delete('/category/:id', destroy)
}

export default categoryRoutes
