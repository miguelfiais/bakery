import multer from 'multer'
import storage from '../config/multer'
import {
  destroy,
  index,
  store,
  update,
} from '../controllers/product.controller'

const upload = multer({ storage })

const productRoutes = (app) => {
  app.post('/products', upload.single('file'), store)
  app.get('/products', index)
  app.put('/products/:id', upload.single('file'), update)
  app.delete('/products/:id', destroy)
}

export default productRoutes
