import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sessionValidation } from '../validations/user.validation'
import { loginUser } from '../repositorys/user.repository'

export const loginStore = async (req, res) => {
  const { email, password } = req.body

  if (!(await sessionValidation.isValid(req.body))) {
    return res
      .status(400)
      .json({ error: 'Make sure your password or email ar correct' })
  }
  const user = await loginUser(email)

  if (!user) {
    return res
      .status(400)
      .json({ error: 'Make sure your password or email ar correct' })
  }
  if (!(await bcrypt.compare(password, user.password))) {
    return res
      .status(400)
      .json({ error: 'Make sure your password or email ar correct' })
  }
  return res.status(200).json({
    id: user.id,
    name: user.name,
    email: user.email,
    admin: user.admin,
    token: jwt.sign({ id: user.id }, '287f232621e638f680e03cb6d743a02d', {
      expiresIn: '5d',
    }),
  })
}
