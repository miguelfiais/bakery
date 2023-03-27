import multer from 'multer'
import storage from '../config/multer'
import {
  create,
  destroy,
  index,
  update,
} from '../controllers/category.controller'
import { authMiddlewares } from '../middlewares/auth'

const upload = multer({ storage })

const categoryRoutes = (app) => {
  app.post('/category', upload.single('file'), authMiddlewares, create)
  app.get('/category', index)
  app.put('/category/:id', upload.single('file'), authMiddlewares, update)
  app.delete('/category/:id', authMiddlewares, destroy)
}

export default categoryRoutes
