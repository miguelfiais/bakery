import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from '../repositorys/category.repository'
import { categoryValidation } from '../validations/category.validation'

export const create = async (req, res) => {
  const { name } = req.body
  try {
    try {
      await categoryValidation.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(400).json({ error: err.errors })
    }
    const { filename: path } = req.file
    const category = await createCategory({ name, path })
    return res.status(201).json(category)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const index = async (req, res) => {
  try {
    const categories = await getAllCategories()
    return res.status(200).json(categories)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const update = async (req, res) => {
  try {
    try {
      await categoryValidation.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(400).json({ error: err.errors })
    }

    const { id } = req.params
    let path
    if (req.file) {
      path = req.file.filename
    }
    const { name } = req.body

    const product = await updateCategory({ id: Number(id), name, path })
    return res.status(200).json(product)
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export const destroy = async (req, res) => {
  try {
    const { id } = req.params
    await deleteCategory(Number(id))
    return res.status(204).json()
  } catch (error) {
    return res.status(400).json({ error })
  }
}
