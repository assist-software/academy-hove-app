import { useState } from 'react'

import avatar from 'features/stepper/assets/avatat.png'
import edit from 'features/stepper/assets/edit.svg'
import { ALT_IMG_PROFILE } from 'features/stepper/constants/stepper-constants'

import style from './stepper-profile-photo.module.scss'

export const StepperProfilePhoto = () => {
  const [photo, setPhoto] = useState<string>()

  const handleChangeProfilePhoto = (e: any): void => {
    const [fileList] = e.target.files
    setPhoto(URL.createObjectURL(fileList))
    console.log('Send to backend')
  }

  return (
    <div className={style.stepperProfilePhoto}>
      <img className={style.stepprUserPhoto} src={photo ? photo : avatar} alt={ALT_IMG_PROFILE.PHOTO} />
      <div>
        <img className={style.stepperChangeAvatar} src={edit} alt={ALT_IMG_PROFILE.EDIT_PHOTO} />
        <input
          tabIndex={0}
          onChange={handleChangeProfilePhoto}
          className={style.stepperInputUpload}
          accept='image/png, image/jpeg'
          type='file'
        />
      </div>
    </div>
  )
}
