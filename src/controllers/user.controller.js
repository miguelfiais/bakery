import { createUser } from '../repositorys/user.repository'

export const create = async (req, res) => {
  try {
    const user = await createUser(req.body)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error })
  }
}
