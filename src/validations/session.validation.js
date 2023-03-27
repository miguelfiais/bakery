import * as Yup from 'yup'

export const sessionValidation = Yup.object({
  email: Yup.string().required(),
  password: Yup.string().required(),
})
