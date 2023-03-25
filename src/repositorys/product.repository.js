import { prisma } from '../services/prisma'

export const createProduct = async (data) => {
  return await prisma.product.create({
    data,
  })
}

export const getProduct = async () => {
  return await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      path: true,
      price: true,
      offer: true,
      Category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  })
}

export const updateProduct = async (data) => {
  return await prisma.product.update({
    where: { id: data.id },
    data,
  })
}

export const deleteProduct = async (id) => {
  return await prisma.product.delete({
    where: { id },
  })
}
