import { v4 as uuidv4 } from 'uuid'

import style from './showroom-all-components.module.scss'
import { ShowroomPropertyThumbnail } from 'features/showroom/components/showroom-property-thumbnail/showroom-property-thumbnail'
import { SHOWROOM_HOUSE_THUMBNAIL } from 'common/constants/mockData'

export const ShowroomAllComponents = () => {
  return (
    <div className={style.pageWrapper}>
      <div className={style.thumbnailWrapper}>
        {SHOWROOM_HOUSE_THUMBNAIL.map((element) => {
          return (
            <div key={uuidv4()}>
              <ShowroomPropertyThumbnail thumbnail={element} type={'list'} role={'admin'} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
