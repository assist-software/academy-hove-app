import { AddItemFormikDetails } from 'features/add-item/components/add-item-formik-details'
import { ShowroomHeader } from 'features/header/showroom-header'
import styles from 'pages/add-item/add-item-page.module.scss'
export const AddItemPage = () => {
  return (
    <>
      <ShowroomHeader />
      <div className={styles.addItemPageContainer}>
        <h2>Add new</h2>
        <AddItemFormikDetails />
      </div>
    </>
  )
}
