import { prisma } from '../services/prisma'

export const createOrder = async (data) => {
  return await prisma.order.create({
    data: {
      status: data.status,
      userId: data.userId,
      orderOnProducts: {
        createMany: {
          data: data.product.map((product) => ({
            productId: product.id,
            quantity: product.quantity,
          })),
        },
      },
    },
    select: {
      id: true,
      status: true,
      User: {
        select: {
          id: true,
          name: true,
        },
      },
      orderOnProducts: {
        select: {
          Product: {
            select: {
              id: true,
              name: true,
              price: true,
              offer: true,
              Category: {
                select: {
                  name: true,
                },
              },
            },
          },
          quantity: true,
        },
      },
    },
  })
}

export const updateStatusOrder = async (data) => {
  return await prisma.order.update({
    where: {
      id: data.id,
    },
    data,
  })
}

export const getAllOrders = async () => {
  return prisma.order.findMany({
    select: {
      id: true,
      status: true,
      created_at: true,
      User: {
        select: {
          id: true,
          name: true,
        },
      },
      orderOnProducts: {
        select: {
          Product: {
            select: {
              id: true,
              name: true,
              path: true,
              price: true,
              offer: true,
              Category: {
                select: {
                  name: true,
                },
              },
            },
          },
          quantity: true,
        },
      },
    },
  })
}

export const deleteOrder = async (id) => {
  return (
    await prisma.orderOnProducts.deleteMany({ where: { orderId: id } }),
    await prisma.order.delete({ where: { id } })
  )
}

export const getUserOrder = async (id) => {
  return await prisma.order.findMany({
    where: {
      userId: id,
    },
    select: {
      id: true,
      created_at: true,
      status: true,
      orderOnProducts: {
        select: {
          Product: {
            select: {
              name: true,
              path: true,
              price: true,
              Category: true,
            },
          },
          quantity: true,
        },
      },
    },
  })
}
