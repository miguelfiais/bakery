import { prisma } from '../services/prisma'

export const createCategory = async (data) => {
  return await prisma.category.create({
    data,
  })
}

export const getAllCategories = async () => {
  return await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      path: true,
      product: {
        select: {
          id: true,
          name: true,
          path: true,
          offer: true,
        },
      },
    },
  })
}

export const updateCategory = async (data) => {
  return await prisma.category.update({
    where: { id: data.id },
    data,
  })
}

export const deleteCategory = async (id) => {
  return await prisma.category.delete({
    where: { id },
  })
}
