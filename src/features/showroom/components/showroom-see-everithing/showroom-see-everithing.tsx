import { ShowroomHeader } from 'features/header/showroom-header'
import { ShowroomSeeEverithingHead } from '../showroom-see-everithing-head/showroom-see-everithing-head'
import styles from 'features/showroom/styles/showroom-thumbnail.module.scss'

export const ShowroomSeeEverything = () => {
  return (
    <div>
      <ShowroomHeader />
      <div className={styles.ShowroomSeeEverythingContainer}>
        <ShowroomSeeEverithingHead />
      </div>
      <div></div>
    </div>
  )
}
