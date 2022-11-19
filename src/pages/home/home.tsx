import { useEffect } from 'react'

import { observer } from 'mobx-react-lite'
import { useStore } from 'store/store'
import { toJS } from 'mobx'
import { ProgressSpinner } from 'primereact/progressspinner'

import { ERROR, HOME_PAGE_LABELS } from 'common/constants/constants'

import { ShowroomPropertyList } from 'features/showroom/components/showroom-property-list/showroom-property-list'

import styles from './home.module.scss'

export const Home = observer(() => {
  const { showroomStore } = useStore()
  const { properties, setProperties, status } = showroomStore

  useEffect(() => {
    setProperties()
  }, [])

  return (
    <div className={styles.home}>
      <h1>{HOME_PAGE_LABELS.TITLE}</h1>
      <div className={styles.homeCarousel}>
        {status === 'loading' ? (
          <ProgressSpinner />
        ) : status === 'succeeded' ? (
          <>
            <ShowroomPropertyList title={HOME_PAGE_LABELS.LATEST} carouselData={toJS(properties.latest)} />
            <ShowroomPropertyList title={HOME_PAGE_LABELS.BIG} carouselData={toJS(properties.big)} />
            <ShowroomPropertyList title={HOME_PAGE_LABELS.SMALL} carouselData={toJS(properties.small)} />
          </>
        ) : (
          <h2>{ERROR.AXIOS_ERROR}</h2>
        )}
      </div>
    </div>
  )
})
