import * as Yup from 'yup'

export const Validation = () => {
  const validationSchemaAddItem = Yup.object().shape({
    title: Yup.string()
      .min(10, 'Title must at least 10 characters long')
      .max(40, 'Title must be less than 40 characters long')
      .required('Title is required'),
    category: Yup.mixed().required('Choose a category'),
    price: Yup.number().required('Insert your price'),
    description: Yup.string().min(100).max(1000).required('Insert a description'),
    location: Yup.string().required('Location is required'),
    phone: Yup.number().required('Phone number is required'),
    file: Yup.mixed().required(),
  })
  return validationSchemaAddItem
}
