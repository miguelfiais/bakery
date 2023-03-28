import categoryRoutes from './category.routes'
import orderRoutes from './order.routes'
import productRoutes from './product.routes'
import userRoutes from './user.routes'

const routes = (app) => {
  userRoutes(app)
  productRoutes(app)
  categoryRoutes(app)
  orderRoutes(app)
}

export default routes
