import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../../../../firebase/firebase-config'
import { IProperty1 } from 'features/showroom/models/showroom-models'
import styles from 'features/listings/styles/listing.module.scss'
import { GoogleMaps } from '../google-maps/google-maps'
import { GOOGLE_MAPS_CONTAINER } from 'features/listings/constants/listing-constants'
export const ListingGoogleMaps = () => {
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
      <div className={styles.listingGoogleMapsContainer}>
        <div className={styles.space}>{GOOGLE_MAPS_CONTAINER.LOCATION}</div>
        <div className={styles.space}>{cards[0]?.location}</div>
        <GoogleMaps />
      </div>
      <div className={styles.line}></div>
    </>
  )
}
