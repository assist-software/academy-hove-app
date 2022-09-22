import { FC, useState } from 'react'
import styles from 'features/showroom/styles/showroom-thumbnail.module.scss'
import activeFavorite from 'features/showroom/assets/favourites_icon_active.svg'
import inactiveFavorite from 'features/showroom/assets/favourites_icon_inactive.svg'
import { Button } from 'primereact/button'

interface IPropery {
  property: {
    id: number
    title: string
    description: string
    price: string
    image: string
    location: string
    isFavorite: boolean
  }
  isGrid: boolean
  role: number
}
export const ShowroomCard: FC<IPropery> = ({ ...props }) => {
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
            <h1>{props.property.title}</h1>
            <p>{props.property.location}</p>
          </div>
          {props.isGrid && <div>{props.property.description}</div>}
          <h1>{props.property.price} lei</h1>
        </div>
      </div>
      {props.isGrid && props.role > 0 && (
        <div className={styles.cardButtons}>
          {props.role === 2 && <Button>Approve</Button>}
          <Button>Delete</Button>
          <Button>Edit</Button>
        </div>
      )}
    </>
  )
}
