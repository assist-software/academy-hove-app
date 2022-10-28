import { useState } from 'react'

import * as yup from 'yup'
import { useFormik } from 'formik'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import { InputTextarea } from 'primereact/inputtextarea'
import classNames from 'classnames'

import { Button } from 'common/components/Button/Button'

import { AddNewDescription } from 'features/add-new/components/description/add-new-description'
import { ADD_NEW } from 'features/add-new/constants/add-new-constants'
import { AddNewUpload } from 'features/add-new/components/add-new-upload/add-new-upload'

import styles from './add-new-form.module.scss'

export const Form = () => {
  const [photo, setPhoto] = useState<any>([])

  const handleUploadPhoto = (e: any) => {
    const [fileList] = e.target.files
    setPhoto([...photo, URL.createObjectURL(fileList)])
  }

  const categoryArray = ['test']

  const formik: any = useFormik({
    initialValues: { title: '', category: '', price: 0, details: '', location: '', phone: 0 },
    validationSchema: yup.object().shape({
      title: yup.string().required('Invalid'),
      category: yup.string().required('Invalid'),
      price: yup.number().required('Invalid'),
    }),
    onSubmit: (data) => {
      console.log(data)
      formik.resetForm()
    },
  })

  const isFormFieldValid = (name: any) => !!(formik.touched[name] && formik.errors[name])
  // const getFormErrorMessage = (name: any) => {
  //   return isFormFieldValid(name) && <small className='p-error'>{formik.errors[name]}</small>
  // }

  console.log(formik.values.category)

  return (
    <div className={styles.addNewForm}>
      <form onSubmit={formik.handleSubmit}>
        <AddNewDescription title={ADD_NEW.DETAILS} text={ADD_NEW.DETAILS_DESCRIPTION}>
          <div className={styles.addNewFormInput}>
            <p>Title</p>
            <InputText
              id='title'
              name='title'
              value={formik.values.title}
              onChange={formik.handleChange}
              placeholder='Insert title'
              className={classNames({ 'p-invalid': isFormFieldValid('title') }, styles.addNewFormInput)}
            />
          </div>

          <div className={styles.addNewFormInput}>
            <p>Category</p>
            <Dropdown
              id='category'
              name='category'
              value={formik.values.category}
              onChange={formik.handleChange}
              placeholder='Select a category'
              options={categoryArray}
              className={classNames({ 'p-invalid': isFormFieldValid('category') }, styles.addNewFormInput)}
            />
          </div>
          <div className={styles.addNewFormInput}>
            <p>Price</p>
            <InputNumber
              id='price'
              name='price'
              type='number'
              value={formik.values.price}
              // onChange={formik.handleChange}
              //onChange={(event: any) => formik.handleChange(event.target.name)(parseInt(event.target.value, 10))}
              onChange={(e: any) => {
                formik.handleChange('price', parseInt(e.target.value))
              }}
              placeholder='Insert price'
              className={classNames({ 'p-invalid': isFormFieldValid('price') }, styles.addNewFormInputPrice)}
            />

            <span className={styles.addNewFormSpan}>lei</span>
          </div>
        </AddNewDescription>

        <AddNewDescription title={ADD_NEW.PHOTO} text={ADD_NEW.PHOTO_DESCRIPTION}>
          <div className={styles.test2}>
            {photo.map((elemen: any) => {
              return (
                <div>
                  <img src={elemen} alt='' className={styles.test} />
                </div>
              )
            })}
            <AddNewUpload handleUploadPhoto={handleUploadPhoto} />
          </div>
        </AddNewDescription>

        <AddNewDescription title={ADD_NEW.DESCRIPTION} text={ADD_NEW.DESCRIPTION_TEXT}>
          <div className={styles.addNewFormInput}>
            <p>Title</p>
            <InputTextarea
              id='details'
              name='details'
              autoResize
              placeholder='Insert details'
              value={formik.values.details}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('details') }, styles.addNewFormTextarea)}
            />
            <p>0/100 mandatory characters</p>
          </div>
        </AddNewDescription>

        <AddNewDescription title={ADD_NEW.CONTACT} text={ADD_NEW.CONTACT_DESCRIPTION}>
          <div className={styles.addNewFormInput}>
            <p>Location</p>
            <InputText
              id='location'
              name='location'
              placeholder='Insert location'
              value={formik.values.location}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('location') }, styles.addNewFormInput)}
            />
          </div>
          <div className={styles.addNewFormInput}>
            <p>Phone number</p>
            <InputNumber
              id='phone'
              name='phone'
              type='number'
              placeholder='Insert phone'
              value={formik.values.phone}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('phone') }, styles.addNewFormInputPrice)}
            />
          </div>
        </AddNewDescription>
        <div className={styles.addNewFormButtonWrapper}>
          <Button mode='secondary' children='Preview' className={styles.addNewFormButton} />
          <Button mode='primary' children='Publish' className={styles.addNewFormButton} type='submit' />
        </div>
      </form>
    </div>
  )
}
