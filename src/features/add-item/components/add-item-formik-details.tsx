import { Formik, Form } from 'formik'
import styles from 'features/add-item/styles/add-item.module.scss'
import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { PriceValidation } from '../schemas/add-item-price-validation'
import { Button } from 'primereact/button'
import { IAddDetails } from '../models/IAddItem'

export const AddItemFormikDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  const onCategoryyChange = (e: { value: any }) => {
    setSelectedCategory(e.value)
  }
  const category = [{ name: 'Latest' }, { name: 'Big Houses' }, { name: 'Small Houses' }]

  const onSubmit = async () => {}
  const [value1, setValue1] = useState<string>('')
  const [value2, setValue2] = useState<string>('')

  return (
    <>
      <Formik
        initialValues={{ details_title: '', details_category: 'Latest', details_price: '' }}
        onSubmit={onSubmit}
        validationSchema={PriceValidation}>
        <Form>
          <div className={styles.detailsContainer}>
            <div className={styles.leftContainer}>
              <h4>Details</h4>
              <div className={styles.subtitleStyle}>Be as thorough as you can.</div>
            </div>
            <div className={styles.rightTitleContainer}>
              <div className={styles.addTitleContainer}>
                <label className={styles.formsTitleStyles}>Title</label>
                <InputText
                  className={styles.titleInput}
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                  placeholder='Add title'
                />
              </div>
              <div className={styles.selectCategoryContainer}>
                <label className={styles.formsTitleStyles}>Category</label>
                <Dropdown
                  className={styles.pDropdown}
                  value={selectedCategory}
                  options={category}
                  onChange={onCategoryyChange}
                  optionLabel='name'
                  placeholder='Select category'
                />
              </div>
              <div className={styles.addPriceContainer}>
                <label className={styles.formsTitleStyles}>Price</label>
                <div>
                  <InputText className={styles.priceInput} value={value2} onChange={(e) => setValue2(e.target.value)} />
                  <label className={styles.formsTitleStyles}>lei</label>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  )
}
