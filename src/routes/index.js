import productRoutes from './product.routes'
import userRoutes from './user.routes'

const routes = (app) => {
  userRoutes(app)
  productRoutes(app)
}

export default routes
