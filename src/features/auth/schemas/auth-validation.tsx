import * as Yup from 'yup'

export const AuthValidation = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('This field is mandatory'),
    password: Yup.string()
      .required('No password provided.')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Invalid password'),
  })
  return validationSchema
}

export const AuthEmailValidation = () => {
  const validationSchemaEmail = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('This field is mandatory'),
  })
  return validationSchemaEmail
}

export const AuthPasswordValidation = () => {
  const validationSchemaEmail = Yup.object().shape({
    password: Yup.string()
      .required('No password provided.')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Invalid password'),
  })
  return validationSchemaEmail
}
