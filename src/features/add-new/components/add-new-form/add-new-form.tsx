import { ChangeEvent } from 'react'

import { nanoid } from 'nanoid'
import { useFormik } from 'formik'
import { InputMask } from 'primereact/inputmask'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import { InputTextarea } from 'primereact/inputtextarea'
import classNames from 'classnames'

import { Button } from 'common/components/Button/Button'

import { AddNewDescription } from 'features/add-new/components/add-new-description/add-new-description'
import {
  ADD_NEW,
  ADD_NEW_ALT_IMG,
  ADD_NEW_BUTTON_LABEL,
  ADD_NEW_LABEL,
  ADD_NEW_PLACEHOLDER,
} from 'features/add-new/constants/add-new-constants'
import { AddNewUpload } from 'features/add-new/components/add-new-upload/add-new-upload'
import { IDataForm } from 'features/add-new/models/add-new-models'
import { validationSchema } from 'features/add-new/schema/add-new-schema'
import { categoryArray } from 'features/add-new/constants/add-new-mock-data'

import styles from './add-new-form.module.scss'

export const AddNewForm = () => {
  const formik: any = useFormik({
    initialValues: { title: '', category: '', price: null, details: '', location: '', phone: null, file: [] },
    validationSchema: validationSchema,
    onSubmit: (data: IDataForm) => {
      console.log(data)
      formik.resetForm()
    },
  })

  const isFormFieldValid = (name: string) => !!(formik.touched[name] && formik.errors[name])

  const handleUploadPhoto = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    const [fileList]: any = target.files
    formik.setFieldValue('file', [...formik.values.file, URL.createObjectURL(fileList)])
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <AddNewDescription title={ADD_NEW.DETAILS} text={ADD_NEW.DETAILS_DESCRIPTION}>
          <div className={styles.addNewFormInput}>
            <p>{ADD_NEW_LABEL.TITLE}</p>
            <InputText
              id='title'
              name='title'
              value={formik.values.title}
              onChange={formik.handleChange}
              placeholder={ADD_NEW_PLACEHOLDER.TITLE}
              className={classNames({ 'p-invalid': isFormFieldValid('title') }, styles.addNewFormInput)}
            />
          </div>
          <div className={styles.addNewFormInput}>
            <p>{ADD_NEW_LABEL.CATEGORY}</p>
            <Dropdown
              id='category'
              name='category'
              options={categoryArray}
              value={formik.values.category}
              onChange={formik.handleChange}
              placeholder={ADD_NEW_PLACEHOLDER.CATEGORY}
              className={classNames({ 'p-invalid': isFormFieldValid('category') }, styles.addNewFormInput)}
            />
          </div>
          <div className={styles.addNewFormInput}>
            <p>{ADD_NEW_LABEL.PRICE}</p>
            <InputNumber
              id='price'
              name='price'
              useGrouping
              value={formik.values.price}
              onChange={(e) => formik.setFieldValue('price', e.value)}
              placeholder={ADD_NEW_PLACEHOLDER.PRICE}
              className={classNames({ 'p-invalid': isFormFieldValid('price') }, styles.addNewFormInputPrice)}
            />
            <span className={styles.addNewFormSpan}>{ADD_NEW_LABEL.LEI}</span>
          </div>
        </AddNewDescription>

        <AddNewDescription title={ADD_NEW.PHOTO} text={ADD_NEW.PHOTO_DESCRIPTION}>
          <div className={styles.addNewFormAllPhoto}>
            {formik.values.file.map((element: string) => {
              return (
                <div key={nanoid()}>
                  <img src={element} alt={ADD_NEW_ALT_IMG.ADD_PHOTO} className={styles.addNewFormPhoto} />
                </div>
              )
            })}
            <AddNewUpload handleUploadPhoto={handleUploadPhoto} validation={isFormFieldValid('file')} />
          </div>
        </AddNewDescription>

        <AddNewDescription title={ADD_NEW.DESCRIPTION} text={ADD_NEW.DESCRIPTION_TEXT}>
          <div className={styles.addNewFormInput}>
            <p>{ADD_NEW_LABEL.DETAILS}</p>
            <InputTextarea
              id='details'
              name='details'
              autoResize
              placeholder={ADD_NEW_PLACEHOLDER.DETAILS}
              value={formik.values.details}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('details') }, styles.addNewFormTextarea)}
            />
            <p>
              {formik.values.details.length}
              {ADD_NEW_LABEL.CHARACTERS}
            </p>
          </div>
        </AddNewDescription>

        <AddNewDescription title={ADD_NEW.CONTACT} text={ADD_NEW.CONTACT_DESCRIPTION}>
          <div className={styles.addNewFormInput}>
            <p>{ADD_NEW_LABEL.LOCATION}</p>
            <InputText
              id='location'
              name='location'
              placeholder={ADD_NEW_PLACEHOLDER.LOCATION}
              value={formik.values.location}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('location') }, styles.addNewFormInput)}
            />
          </div>
          <div className={styles.addNewFormInput}>
            <p>{ADD_NEW_LABEL.NUMBER}</p>
            <InputMask
              id='phone'
              name='phone'
              mask='(999) 999-9999'
              placeholder={ADD_NEW_PLACEHOLDER.NUMBER}
              value={formik.values.phone}
              onChange={formik.handleChange}
              className={classNames({ 'p-invalid': isFormFieldValid('phone') }, styles.addNewFormInputPrice)}
            />
          </div>
        </AddNewDescription>

        <div className={styles.addNewFormButtonWrapper}>
          <Button mode='secondary' children={ADD_NEW_BUTTON_LABEL.PREVIEW} className={styles.addNewFormButton} />
          <Button
            mode='primary'
            children={ADD_NEW_BUTTON_LABEL.PUBLISH}
            className={styles.addNewFormButton}
            type='submit'
          />
        </div>
      </form>
    </div>
  )
}
