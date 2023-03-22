import { store } from '../controllers/user.controller'
import { loginStore } from '../controllers/session.controller'

const userRoutes = (app) => {
  app.post('/user', store)
  app.post('/login', loginStore)
}

export default userRoutes
