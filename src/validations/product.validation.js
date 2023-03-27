import * as Yup from 'yup'

export const productValidation = Yup.object({
  name: Yup.string().required(),
  price: Yup.number().required(),
  offer: Yup.boolean(),
  categoryId: Yup.number().required(),
})

export const updateProductValidation = Yup.object({
  name: Yup.string(),
  price: Yup.number(),
  offer: Yup.boolean(),
  categoryId: Yup.number(),
})
