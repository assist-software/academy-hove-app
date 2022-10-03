import style from './results-photos.module.scss'
import proprety from '../../assets/proprety.svg'
import allPhoto from '../../assets/allPhoto.svg'
import { Image } from 'primereact/image'
import { PROPRETY_ALT_IMG, PROPRETY_BUTTON } from 'features/results/constants/results-constants'

export const PropretyPhotos = () => {
  return (
    <div className={style.proprety}>
      <Image
        className={style.grid1}
        src={proprety}
        imageClassName={style.grid1Style}
        alt={PROPRETY_ALT_IMG.IMAGE_HOME}
        preview
      />
      <Image className={style.grid2} src={proprety} alt={PROPRETY_ALT_IMG.IMAGE_HOME} width='100%' preview />
      <Image
        className={style.grid3}
        src={proprety}
        imageClassName={style.grid3Style}
        alt={PROPRETY_ALT_IMG.IMAGE_HOME}
        preview
      />
      <Image className={style.grid4} src={proprety} alt={PROPRETY_ALT_IMG.IMAGE_HOME} width='100%' preview />
      <Image
        className={style.grid5}
        src={proprety}
        imageClassName={style.grid5Style}
        alt={PROPRETY_ALT_IMG.IMAGE_HOME}
        preview
      />
      <div className={style.allPhotoButton}>
        <img src={allPhoto} alt={PROPRETY_ALT_IMG.SHOW} />
        <p className={style.allPhoto}>{PROPRETY_BUTTON.ALL_IMG}</p>
      </div>
    </div>
  )
}
