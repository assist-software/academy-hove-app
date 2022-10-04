import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../../../../firebase/firebase-config'
import { IProperty1 } from 'features/showroom/models/showroom-models'
import styles from 'features/listings/styles/listing.module.scss'
import profilePhoto from 'features/listings/assets/profile_logo.png'
import { Button } from 'primereact/button'
import { DESCRIPTION_CONTAINER, SELLER_CONTAINER } from 'features/listings/constants/listing-constants'

export const ListingDescription = () => {
  const dataCollectionLatest = collection(db, 'Latest')
  const [cards, setCards] = useState<IProperty1[]>([])
  const qLatest = query(dataCollectionLatest, where('id', '==', `${window.location.pathname.split('/')[2]}`))

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

  const handleClickMessage = () => {
    document.getElementsByClassName(`${styles.messageTextArea}`)?.[0].scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <div className={styles.lsitingDescriptionContainer}>
        <div className={styles.descriptionContainer}>
          <div className={styles.space}>{DESCRIPTION_CONTAINER.DESCRIPTION}</div>
          <div className={styles.descriptionStyle}>{cards[0]?.description}</div>
        </div>
        <div className={styles.sellerContainerWithButton}>
          <div className={styles.sellerContainer}>
            <div className={styles.profileImageContainer}>
              <img src={profilePhoto} alt={DESCRIPTION_CONTAINER.ALT} />
            </div>
            <div>
              <h4>{SELLER_CONTAINER.NAME}</h4>
              <p>{SELLER_CONTAINER.JOINED}</p>
              <p>{SELLER_CONTAINER.RESPONSE_RATE}</p>
              <p>{SELLER_CONTAINER.RESPONSE_TIME}</p>
            </div>
          </div>
          <div>
            <Button className={styles.purchaseButton} onClick={handleClickMessage}>
              {DESCRIPTION_CONTAINER.BUTTON_PURCHASE}
            </Button>
            <Button className='p-button-outlined' aria-label='Favorite' icon='pi pi-heart' />
          </div>
        </div>
      </div>
    </>
  )
}
