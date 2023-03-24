import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from '../repositorys/product.repository'
import { productValidation } from '../validations/product.validation'

export const store = async (req, res) => {
  try {
    try {
      await productValidation.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(400).json({ error: err.errors })
    }

    const { filename: path } = req.file
    const { name, price, offer } = req.body

    const product = await createProduct({
      name,
      path,
      price,
      offer,
    })

    return res.status(201).json(product)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const index = async (req, res) => {
  try {
    const product = await getProduct()
    return res.status(200).json(product)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const update = async (req, res) => {
  try {
    try {
      await productValidation.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(400).json({ error: err.errors })
    }

    const { id } = req.params
    let path
    if (req.file) {
      path = req.file.filename
    }
    const { name, price, offer } = req.body

    const product = await updateProduct({ id, name, price, offer, path })
    return res.status(200).json(product)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const destroy = async (req, res) => {
  try {
    const { id } = req.params
    await deleteProduct(id)
    return res.status(204).json()
  } catch (error) {
    return res.status(400).json({ error })
  }
}
