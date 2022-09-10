import style from './stepper-profile-photo.module.scss'

import avatar from '../../assets/avatat.png'
import edit from '../../assets/edit.svg'
import { AltImgProfile } from 'features/stepper/constants/stepper-constants'
import { useState } from 'react'

export const StepperProfilePhoto = () => {
  const [photo, setPhoto] = useState<string>()

  const handleChangeProfilePhoto = (e: any): void => {
    const [fileList] = e.target.files
    setPhoto(URL.createObjectURL(fileList))
    console.log('Send to backend')
  }

  return (
    <div className={style.pageUserAvatar}>
      <img className={style.userPhoto} src={photo ? photo : avatar} alt={AltImgProfile.photo} />
      <div>
        <img className={style.changeAvatar} src={edit} alt={AltImgProfile.editPhoto} />
        <input
          tabIndex={0}
          onChange={handleChangeProfilePhoto}
          className={style.inputUploadProfilePhoto}
          accept='image/png, image/jpeg'
          type='file'
        />
      </div>
    </div>
  )
}
