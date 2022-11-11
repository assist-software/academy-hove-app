import { FC } from 'react'

import { Image } from 'primereact/image'

import { PROPRETY_ALT_IMG, PROPRETY_BUTTON } from 'features/manage/constants/manage-constants'
import allPhoto from 'features/manage/assets/allPhoto.svg'

import style from './manage-photos.module.scss'

interface IProps {
  photo: string
}

export const ManagePhotos: FC<IProps> = ({ photo }) => {
  return (
    <div className={style.managePhotos}>
      <Image
        className={style.managePhotosGrid1}
        src={photo}
        imageClassName={style.managePhotosGrid1Style}
        alt={PROPRETY_ALT_IMG.IMAGE_HOME}
        preview
      />
      <Image className={style.managePhotosGrid2} src={photo} alt={PROPRETY_ALT_IMG.IMAGE_HOME} width='100%' preview />
      <Image
        className={style.managePhotosGrid3}
        src={photo}
        imageClassName={style.managePhotosGrid3Style}
        alt={PROPRETY_ALT_IMG.IMAGE_HOME}
        preview
      />
      <Image className={style.managePhotosGrid4} src={photo} alt={PROPRETY_ALT_IMG.IMAGE_HOME} width='100%' preview />
      <Image
        className={style.managePhotosGrid5}
        src={photo}
        imageClassName={style.managePhotosGrid5Style}
        alt={PROPRETY_ALT_IMG.IMAGE_HOME}
        preview
      />
      <div className={style.manageAllPhotoButton}>
        <img src={allPhoto} alt={PROPRETY_ALT_IMG.SHOW} />
        <p className={style.manageAllPhoto}>{PROPRETY_BUTTON.ALL_IMG}</p>
      </div>
    </div>
  )
}
