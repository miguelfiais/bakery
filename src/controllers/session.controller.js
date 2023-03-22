import { prisma } from '../services/prisma'
import bcrypt from 'bcrypt'
import { sessionValidation } from '../validations/user.validation'

export const loginStore = async (req, res) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!(await sessionValidation.isValid(req.body))) {
    return res
      .status(400)
      .json({ error: 'Make sure your password or email ar correct' })
  }
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
  return res.status(200).json({ name: user.name, email: user.email })
}
