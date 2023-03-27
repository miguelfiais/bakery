import * as Yup from 'yup'

export const categoryValidation = Yup.object({
  name: Yup.string().required(),
})

export const updateCategoryValidation = Yup.object({
  name: Yup.string(),
})
