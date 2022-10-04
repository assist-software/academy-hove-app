import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../../../../firebase/firebase-config'
import { IProperty1 } from 'features/showroom/models/showroom-models'
import shareLogo from 'features/listings/assets/LeftIcon.png'
import styles from 'features/listings/styles/listing.module.scss'
import { IMAGE_ALT_CONTAINER } from 'features/listings/constants/listing-constants'

export const ListingTitleHeader = () => {
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

  return (
    <>
      <div className={styles.listingHeaderContainer}>
        <div>
          <div className={styles.titleStyle}>{cards[0]?.title}</div>
          <div className={styles.priceStyle}>{cards[0]?.price}</div>
        </div>
        <div className={styles.shareButtonContainer}>
          <div>
            <img src={shareLogo} alt='Share' />
          </div>
          <div className={styles.shareButtonStyle}>{IMAGE_ALT_CONTAINER.SHARE}</div>
        </div>
      </div>
    </>
  )
}
