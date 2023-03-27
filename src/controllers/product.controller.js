import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from '../repositorys/product.repository'
import {
  productValidation,
  updateProductValidation,
} from '../validations/product.validation'

export const store = async (req, res) => {
  try {
    try {
      await productValidation.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(400).json({ error: err.errors })
    }
    if (!req.userAdmin) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    const { filename: path } = req.file
    const { name, price, offer, categoryId } = req.body

    const product = await createProduct({
      name,
      path,
      price,
      offer,
      categoryId: Number(categoryId),
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
    if (!req.userAdmin) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    try {
      await updateProductValidation.validateSync(req.body, {
        abortEarly: false,
      })
    } catch (err) {
      return res.status(400).json({ error: err.errors })
    }

    const { id } = req.params
    let path
    if (req.file) {
      path = req.file.filename
    }
    const { name, price, offer, categoryId } = req.body
    let categoryIdNumber
    if (categoryId) {
      categoryIdNumber = Number(categoryId)
    }
    const product = await updateProduct({
      id,
      name,
      price,
      offer,
      path,
      categoryId: categoryIdNumber,
    })
    return res.status(200).json(product)
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
    await deleteProduct(id)
    return res.status(204).json()
  } catch (error) {
    return res.status(400).json({ error })
  }
}
