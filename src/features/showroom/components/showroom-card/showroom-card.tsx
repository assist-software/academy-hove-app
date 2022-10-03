import { FC, useState } from 'react'
import styles from 'features/showroom/styles/showroom-thumbnail.module.scss'
import activeFavorite from 'features/showroom/assets/favourites_icon_active.svg'
import inactiveFavorite from 'features/showroom/assets/favourites_icon_inactive.svg'
import { Button } from 'primereact/button'
import { CARD_BUTTONS } from 'features/showroom/constants/showroom-constants'
import { IProperty } from 'features/showroom/models/showroom-models'
import { Link } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constants'

export const ShowroomCard: FC<IProperty> = ({ ...props }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(props.property.isFavorite)

  return (
    <>
      <div className={!props.isGrid ? styles.cardContainer : styles.cardContainerGrid}>
        <img
          src={isFavorite ? activeFavorite : inactiveFavorite}
          className={!props.isGrid ? styles.cardFavorite : styles.cardFavoriteGrid}
          alt='Favorite'
          onClick={() => setIsFavorite(!isFavorite)}
        />
        <div>
          <img src={props.property.image} alt='Property' className={styles.cardImage} />
        </div>
        <div className={styles.cardDescription}>
          <div className={styles.cardImportant}>
            <Link to={`${PAGES_PATHS.LISTING}/${props.property.id}`}>
              <h1>{props.property.title}</h1>
            </Link>
            <p>{props.property.location}</p>
          </div>
          {props.isGrid && <div>{props.property.shortDescription}</div>}
          <h1>{props.property.price} lei</h1>
        </div>
      </div>
      {props.isGrid && props.role > 0 && (
        <div className={styles.cardButtons}>
          {props.role === 2 && <Button>{CARD_BUTTONS.BUTTON_APPROVED}</Button>}
          <Button className='p-button-danger p-button-text'>{CARD_BUTTONS.BUTTON_DELETE}</Button>
          <Button className='p-button-info p-button-text'>{CARD_BUTTONS.BUTTON_EDIT}</Button>
        </div>
      )}
    </>
  )
}
