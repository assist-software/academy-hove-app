import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  title: yup.string().required('Invalid'),
  category: yup.string().required('Invalid'),
  price: yup.number().required('Invalid'),
  details: yup
    .string()
    .transform((o, c) => (o === '' ? null : c))
    .min(100, 'This value must be minimum of 100 characters.')
    .required('Invalid'),
  location: yup.string().required('Invalid'),
  phone: yup.string().required('Invalid'),
  file: yup.array().min(3).required('Invalid'),
})
