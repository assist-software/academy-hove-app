import React, { FC } from 'react'
import { Carousel } from 'primereact/carousel'
// import { Button } from 'primereact/button'
import './showroom-property-list.module.scss'
import { SHOWROOM_HOUSE_THUMBNAIL } from 'features/showroom/constants/showroom-mock-data'
import { thumbnailTemplate } from './showroom-property-list-thumbnail'
import styles from './showroom-property-list.module.scss'
import { ShowroomSeeEverythingLite } from '../showroom-see-everything-lite/showroom-see-everything-lite'

interface Props {
  title: string
}

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '600px',
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: '480px',
    numVisible: 1,
    numScroll: 1,
  },
]

export const ShowroomPropertyList: FC<Props> = ({ title }) => {
  const renderHeader = () => {
    return (
      <div className={styles.showroomCarouselHeader}>
        <span className={styles.showroomCarouselTitle}>{title}</span>
        <ShowroomSeeEverythingLite onClickHandler={() => {}} />
      </div>
    )
  }

  return (
    <Carousel
      value={[...SHOWROOM_HOUSE_THUMBNAIL, ...SHOWROOM_HOUSE_THUMBNAIL, ...SHOWROOM_HOUSE_THUMBNAIL]}
      numVisible={5}
      numScroll={1}
      responsiveOptions={responsiveOptions}
      itemTemplate={thumbnailTemplate}
      header={renderHeader()}
      indicatorsContentClassName={styles.showroomCardIndicators}
    />
  )
}
