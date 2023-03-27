import { prisma } from '../services/prisma'

export const loginUser = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  })
}
