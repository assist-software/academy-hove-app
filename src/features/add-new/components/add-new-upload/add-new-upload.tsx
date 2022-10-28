import addIcon from 'features/add-new/assets/add.svg'

import styles from './add-new-upload.module.scss'

export const AddNewUpload = ({ handleUploadPhoto }: any) => {
  return (
    <div className={styles.addNewUpload}>
      <img src={addIcon} alt='' className={styles.addNewUploadIcon} />
      <input
        tabIndex={0}
        onChange={handleUploadPhoto}
        className={styles.addNewUploadInput}
        accept='image/png, image/jpeg'
        type='file'
      />
    </div>
  )
}
