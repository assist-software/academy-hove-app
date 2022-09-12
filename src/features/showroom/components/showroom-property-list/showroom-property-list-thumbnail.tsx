import { IPropertyLite } from 'features/showroom/models/showroom-models'
import thumbnailImage from '../../assets/thnumbnail.jpg'
import favoriteInactive from '../../assets/favoriteInactive.svg'
import favoriteActive from '../../assets/favoriteActive.svg'
import styles from './showroom-property-list.module.scss'
import { AltImgShowroom } from 'features/showroom/constants/showroom-constants'

export const thumbnailTemplate = (product: IPropertyLite) => {
  return (
    <div className={styles.showroomCard}>
      <div className={styles.showroomCardHeader}>
        <img alt='Property' src={thumbnailImage} className={styles.showroomCardImage} />
        <img
          src={product.favorite ? favoriteActive : favoriteInactive}
          alt={AltImgShowroom.favorite}
          className={styles.showroomCardFavorite}
        />
        <div className={styles.showroomCardBody}>
          <p className={styles.showroomCardProperty}>{product.property}</p>
          <p className={styles.showroomCardLocation}>{product.location}</p>
          <p className={styles.showroomCardPrice}>{product.price}</p>
        </div>
      </div>
    </div>
  )
}
