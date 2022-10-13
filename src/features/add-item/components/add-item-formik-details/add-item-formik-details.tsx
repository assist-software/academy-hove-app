import { Formik, Form } from 'formik'
import styles from 'features/add-item/styles/add-item.module.scss'
import { useRef, useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Validation } from '../../schemas/add-item-price-validation'
import { Button } from 'primereact/button'
import { InputTextarea } from 'primereact/inputtextarea'
import { AddImage } from '../add-image/add-image'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../../firebase/firebase-config'
import { IAddItem } from 'features/add-item/models/IAddItem'
import { storage } from '../../../../firebase/firebase-config'
import { ref, uploadBytes, uploadString } from 'firebase/storage'
import { v4 } from 'uuid'
import { FormikHelpers } from 'formik'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

import {
  BUTTON_LABEL,
  CONTACT_CONSTANTS,
  DESCRIPTION_CONSTANTS,
  DETAILS_CONSTANTS,
  PLACEHOLDER,
} from 'features/add-item/constants/add-item-constants'

export const AddItemFormikDetails = () => {
  const category = [{ name: 'Latest' }, { name: 'Big Houses' }, { name: 'Small Houses' }]
  const [textAreaCount, ChangeTextAreaCount] = useState<number>(0)
  const [image, setImage] = useState<{ image: File; index: number }>()
  const initialArray = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]
  const navigate = useNavigate()

  const [setArray, setSetArray] = useState<(Blob | undefined)[]>(initialArray)

  const onSubmit = (values: IAddItem) => {
    try {
      const docRef = addDoc(collection(db, 'Latest'), {
        title: values.title,
        type: values.category.name,
        price: values.price,
        description: values.description,
        location: values.location,
        phone: values.phone,
        image: setArray[0],
        id: nanoid(),
      })
      console.log('docRef', docRef)
      uploadImage(values.title)

      console.log(docRef)
      return navigate('/')
    } catch (err: any) {
      return err
    }
  }

  const uploadImage = (title: string) => {
    const imageRef = ref(storage, `images/${title + v4()}`)
    setArray.map((elem: any) => {
      if (elem) {
        uploadString(imageRef, elem, 'data_url')
          .then(() => {
            console.log('Upload', elem)
          })
          .catch((err) => {
            console.log('err', err)
          })
      }
    })
  }

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          category: { name: '' },
          price: '',
          description: '',
          location: '',
          phone: '',
          file: null,
        }}
        onSubmit={onSubmit}
        validationSchema={Validation}>
        {({ errors, touched, values, setFieldValue }) => {
          return (
            <>
              <Form>
                <div className={styles.detailsContainer}>
                  <div className={styles.leftContainer}>
                    <h4>{DETAILS_CONSTANTS.DETAILS_TITLE}</h4>
                    <div className={styles.subtitleStyle}>{DETAILS_CONSTANTS.DETAILS_SUBTITLE}</div>
                  </div>
                  <div className={styles.rightTitleContainer}>
                    <div className={styles.addTitleContainer}>
                      <label className={styles.formsTitleStyles}>{DETAILS_CONSTANTS.TITLE}</label>
                      <InputText
                        className={touched.title && errors.title ? styles.errorInput : styles.titleInput}
                        value={values.title}
                        onChange={(e) => setFieldValue('title', e.target.value)}
                        placeholder={PLACEHOLDER.ADD_TITLE}
                      />
                      <span className={styles.errorMessage}>{touched.title && errors?.title}</span>
                    </div>
                    <div className={styles.selectCategoryContainer}>
                      <label className={styles.formsTitleStyles}>{DETAILS_CONSTANTS.CATEGORY}</label>
                      <Dropdown
                        className={touched.category && errors.category ? styles.errorpDropdown : styles.pDropdown}
                        value={values.category}
                        options={category}
                        onChange={(e) => {
                          console.log(e.target.value)
                          setFieldValue('category', e.target.value)
                        }}
                        optionLabel='name'
                        placeholder={PLACEHOLDER.SELECT_CATEGORY}
                      />
                      <span className={styles.errorMessage}>{touched?.category?.name && errors?.category?.name}</span>
                    </div>
                    <div className={styles.addPriceContainer}>
                      <label className={styles.formsTitleStyles}>{DETAILS_CONSTANTS.PRICE}</label>
                      <div>
                        <InputText
                          className={touched.price && errors.price ? styles.priceInputError : styles.priceInput}
                          value={values.price}
                          onChange={(e) => setFieldValue('price', e.target.value)}
                        />
                        <label className={styles.formsTitleStyles}>{DETAILS_CONSTANTS.CURRENCY}</label>
                      </div>
                      <span className={styles.errorMessage}>{touched.price && errors?.price}</span>
                    </div>
                  </div>
                </div>
                <AddImage
                  image={image}
                  setImage={setImage}
                  setArray={setArray}
                  setSetArray={setSetArray}
                  setFieldValue={setFieldValue}
                  errors={errors.file}
                  touched={touched.file}
                />

                <div className={styles.descriptionContainer}>
                  <div className={styles.leftContainerDescription}>
                    <h4>{DESCRIPTION_CONSTANTS.DESCRIPTION_TITLE}</h4>
                    <div className={styles.subtitleStyle}>{DESCRIPTION_CONSTANTS.DESCRIPTION_SUBTITLE} </div>
                  </div>
                  <div className={styles.addDescriptionContainer}>
                    <label className={styles.formsTitleStyles}>{DESCRIPTION_CONSTANTS.DESCRIPTION_DETAILS}</label>
                    <InputTextarea
                      className={
                        touched.description && errors.description ? styles.textAreaStyleError : styles.textAreaStyle
                      }
                      value={values.description}
                      onChange={(e) => {
                        setFieldValue('description', e.target.value)
                        ChangeTextAreaCount(e.target.value.length)
                      }}
                      rows={5}
                      cols={30}
                      autoResize
                      placeholder={PLACEHOLDER.DESCRIPTION}
                    />
                    <p
                      className={
                        touched.description && errors.description ? styles.subtitleStyleError : styles.subtitleStyle
                      }>
                      {textAreaCount}
                      {DESCRIPTION_CONSTANTS.DESCRIPTION_MANDATORY}
                    </p>
                    <span className={styles.errorMessage}>{touched.description && errors?.description}</span>
                  </div>
                </div>
                <div className={styles.detailsContainer}>
                  <div className={styles.leftContainer}>
                    <h4>{CONTACT_CONSTANTS.CONTACT_TITLE}</h4>
                    <div className={styles.subtitleStyle}>{CONTACT_CONSTANTS.CONTACT_SUBTITLE}</div>
                  </div>
                  <div className={styles.rightTitleContainer}>
                    <div className={styles.addTitleContainer}>
                      <label className={styles.formsTitleStyles}>{CONTACT_CONSTANTS.LOCATION}</label>
                      <InputText
                        className={
                          touched.location && errors.location ? styles.locationInputError : styles.locationInput
                        }
                        value={values.location}
                        onChange={(e) => setFieldValue('location', e.target.value)}
                      />
                      <span className={styles.errorMessage}>{touched.location && errors?.location}</span>
                    </div>

                    <div className={styles.addPriceContainer}>
                      <label className={styles.formsTitleStyles}>{CONTACT_CONSTANTS.PHONE_NUMBER}</label>
                      <div>
                        <InputText
                          className={touched.phone && errors.phone ? styles.phoneInputError : styles.phoneInput}
                          value={values.phone}
                          onChange={(e) => setFieldValue('phone', e.target.value)}
                        />
                        <span className={styles.errorMessage}>{touched.phone && errors?.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.addItemButtonContainer}>
                  <Button className={styles.previewButtonStyle} label={BUTTON_LABEL.BUTTON_PREVIEW} />
                  <Button className={styles.publishButtonStyle} label={BUTTON_LABEL.BUTTON_PUBLISH} type='submit' />
                </div>
              </Form>
            </>
          )
        }}
      </Formik>
    </>
  )
}
