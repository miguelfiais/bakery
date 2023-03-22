import { createUser } from '../repositorys/user.repository'
import bcrypt from 'bcrypt'
import { prisma } from '../services/prisma'
import { userValidation } from '../validations/user.validation'

export const store = async (req, res) => {
  try {
    try {
      await userValidation.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(400).json({ error: err.errors })
    }

    const { name, email, password } = req.body
    const hashPassword = await bcrypt.hash(password, 10)

    const userExist = await prisma.user.findUnique({
      where: { email },
    })

    if (userExist) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const user = await createUser({ name, email, password: hashPassword })

    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error })
  }
}
