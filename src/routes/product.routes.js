import multer from 'multer'
import storage from '../config/multer'
import {
  destroy,
  index,
  store,
  update,
} from '../controllers/product.controller'
import { authMiddlewares } from '../middlewares/auth'

const upload = multer({ storage })

const productRoutes = (app) => {
  app.get('/products', index)
  app.post('/products', upload.single('file'), authMiddlewares, store)
  app.put('/products/:id', upload.single('file'), authMiddlewares, update)
  app.delete('/products/:id', authMiddlewares, destroy)
}

export default productRoutes
