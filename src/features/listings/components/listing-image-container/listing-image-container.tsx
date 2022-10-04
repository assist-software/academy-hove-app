import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../../../../firebase/firebase-config'
import { IProperty1 } from 'features/showroom/models/showroom-models'
import styles from 'features/listings/styles/listing.module.scss'
import { Button } from 'primereact/button'
import showPhotoIcon from 'features/listings/assets/showPhoto.png'
import { ListingModal } from '../listing-modal/listing-modal'
export const ListingImageContainer = () => {
  const dataCollectionLatest = collection(db, 'Latest')
  const [cards, setCards] = useState<IProperty1[]>([])
  const qLatest = query(dataCollectionLatest, where('id', '==', `${window.location.pathname.split('/')[2]}`))
  const [isModalOpened, setIsModalOpened] = useState(false)

  useEffect(() => {
    getDocs(qLatest)
      .then((snapshot: any) => {
        let info: IProperty1[] = []
        snapshot.docs.forEach((doc: any) => {
          info.push({ ...doc.data(), id: parseInt(doc.id) })
        })
        setCards(info)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const handleClickShowPhoto = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.firstContainerPhoto}>
          <img className={styles.principalImage} src={cards[0]?.image} alt='house' />
        </div>
        <div className={styles.secondContainerPhoto}>
          <img src={cards[0]?.image1} alt='house' />
          <img className={styles.image2} src={cards[0]?.image2} alt='house' />
          <img src={cards[0]?.image3} alt='house' />
          <img className={styles.image4} src={cards[0]?.image4} alt='house' />
        </div>
        <div className={styles.showAllPhotoContainer}>
          <Button
            className={styles.showAllPhotoStyle}
            icon={<img src={showPhotoIcon} alt='points' />}
            label='Show all photos'
            onClick={() => {
              setIsModalOpened(true)
              document.body.style.overflow = 'hidden'
              handleClickShowPhoto()
            }}
          />
        </div>
      </div>
      {isModalOpened && <ListingModal closeModal={setIsModalOpened} />}
    </>
  )
}
