import * as Yup from 'yup'

export const PriceValidation = () => {
  const validationSchemaPrice = Yup.object().shape({
    price: Yup.string()
      .required('Price has to be a number.')
      .matches(/^[0-9]*$/, 'Invalid price'),
  })
  return validationSchemaPrice
}
