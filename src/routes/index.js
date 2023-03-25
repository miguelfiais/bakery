import categoryRoutes from './category.routes'
import productRoutes from './product.routes'
import userRoutes from './user.routes'

const routes = (app) => {
  userRoutes(app)
  productRoutes(app)
  categoryRoutes(app)
}

export default routes
