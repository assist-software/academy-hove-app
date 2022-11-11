import { ChangeEvent, FC } from 'react'

import classNames from 'classnames'

import addIcon from 'features/add-new/assets/add.svg'

import styles from './add-new-upload.module.scss'

interface IProps {
  handleUploadPhoto: (e: ChangeEvent) => void
  validation: boolean
}

export const AddNewUpload: FC<IProps> = ({ handleUploadPhoto, validation }) => {
  return (
    <div className={classNames(styles.addNewUpload, validation && styles.addNewUploadError)}>
      <img src={addIcon} alt='' className={styles.addNewUploadIcon} />
      <input
        id='file'
        name='file'
        tabIndex={0}
        onChange={handleUploadPhoto}
        className={styles.addNewUploadInput}
        accept='image/png, image/jpeg'
        type='file'
      />
    </div>
  )
}
