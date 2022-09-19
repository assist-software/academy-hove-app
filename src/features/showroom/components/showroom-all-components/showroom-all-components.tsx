import { SHOWROOM_HOUSE_THUMBNAIL } from 'features/showroom/constants/showroom-mock-data'
import { ShowroomPropertyThumbnail } from 'features/showroom/components/showroom-property-thumbnail/showroom-property-thumbnail'

import style from './showroom-all-components.module.scss'

export const ShowroomAllComponents = () => {
  return (
    <div className={style.showroomAllComponents}>
      {SHOWROOM_HOUSE_THUMBNAIL.map((element, index) => {
        return <ShowroomPropertyThumbnail key={index} thumbnail={element} type='grid' role='admin' />
      })}
    </div>
  )
}
