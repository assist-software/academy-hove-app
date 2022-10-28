import { ManagePhotos } from 'features/manage/components/manage-photos/manage-photos'
import proprety from 'features/manage/assets/proprety.svg'

import style from './manage.module.scss'

export const Manage = () => {
  return (
    <div className={style.results}>
      <ManagePhotos photo={proprety} />
    </div>
  )
}
