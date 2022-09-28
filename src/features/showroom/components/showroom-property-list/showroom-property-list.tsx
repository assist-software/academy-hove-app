import classnames from 'classnames/bind'
import { Carousel } from 'primereact/carousel'

import { ShowroomPropertyThumbnail } from 'features/showroom/components/showroom-property-thumbnail/showroom-property-thumbnail'
import { ShowroomSeeEverythingLite } from 'features/showroom/components/showroom-see-everything-lite/showroom-see-everything-lite'
import { SHOWROOM_CAROUSEL_RESPONSIVE_OPTIONS } from 'features/showroom/constants/showroom-constants'
import { SHOWROOM_HOUSE_THUMBNAIL } from 'features/showroom/constants/showroom-mock-data'
import { IPropertyLite } from 'features/showroom/models/showroom-models'

import styles from './showroom-property-list.module.scss'

interface Props {
  title: string
}

const cx = classnames.bind(styles)

const thumbnailTemplate = (property: IPropertyLite) => {
  return <ShowroomPropertyThumbnail type='grid' role='admin' thumbnail={property} />
}

export const ShowroomPropertyList = ({ title }: Props) => {
  const renderHeader = () => {
    return (
      <div className='grid p-3'>
        <div className='col-12 md:col-6 flex justify-content-start'>
          <span className={cx('font-bold', 'line-height-2', 'text-lg ')}>{title}</span>
        </div>
        <div className='col-12 md:col-6 flex flex justify-content-end'>
          {/* TODO: Sa fie un anchor acest see everything */}
          <ShowroomSeeEverythingLite onClickHandler={() => {}} />
        </div>
      </div>
    )
  }

  return (
    <div className={cx(styles.showroomPropertyList)}>
      <Carousel
        value={[...SHOWROOM_HOUSE_THUMBNAIL, ...SHOWROOM_HOUSE_THUMBNAIL, ...SHOWROOM_HOUSE_THUMBNAIL]}
        numVisible={5}
        numScroll={1}
        responsiveOptions={SHOWROOM_CAROUSEL_RESPONSIVE_OPTIONS}
        itemTemplate={thumbnailTemplate}
        header={renderHeader()}
      />
    </div>
  )
}
