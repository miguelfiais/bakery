import {
  destroy,
  index,
  show,
  store,
  updateStatus,
} from '../controllers/order.controller'
import { authMiddlewares } from '../middlewares/auth'

const orderRoutes = (app) => {
  app.post('/orders', authMiddlewares, store)
  app.patch('/orders/:id', authMiddlewares, updateStatus)
  app.get('/orders', authMiddlewares, index)
  app.delete('/orders/:id', authMiddlewares, destroy)
  app.get('/orders/user', authMiddlewares, show)
}

export default orderRoutes
