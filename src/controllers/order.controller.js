import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getUserOrder,
  updateStatusOrder,
} from '../repositorys/order.repository'

export const store = async (req, res) => {
  try {
    const userId = req.userId
    const { product } = req.body

    if (!product.length) {
      return res.status(404).json({ error: 'Product not found' })
    }

    const order = await createOrder({
      userId,
      product,
      status: 'Pedido Realizado',
    })
    return res.status(201).json(order)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const updateStatus = async (req, res) => {
  if (!req.userAdmin) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { id } = req.params
  const { status } = req.body
  try {
    const order = await updateStatusOrder({ status, id })
    return res.status(200).json(order)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const index = async (req, res) => {
  try {
    if (!req.userAdmin) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    const orders = await getAllOrders()
    return res.status(200).json(orders)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const destroy = async (req, res) => {
  try {
    if (!req.userAdmin) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    const { id } = req.params
    await deleteOrder(id)
    return res.status(204).json()
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const show = async (req, res) => {
  const orderUser = await getUserOrder(req.userId)
  return res.status(200).json(orderUser)
}
