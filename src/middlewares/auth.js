import jwt from 'jsonwebtoken'

export const authMiddlewares = (req, res, next) => {
  const authToken = req.headers.authorization
  if (!authToken) {
    return res.status(401).json({ error: 'Token not provieded' })
  }
  const token = authToken.split(' ')[1]
  try {
    jwt.verify(token, '287f232621e638f680e03cb6d743a02d', (error, decoded) => {
      if (error) {
        throw new Error()
      }
      return next()
    })
  } catch (error) {
    return res.status(401).json({ error: 'Token is invalid' })
  }
}
