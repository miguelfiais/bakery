import * as Yup from 'yup'

export const productValidation = Yup.object({
  name: Yup.string().required(),
  price: Yup.number().required(),
  offer: Yup.boolean(),
})
