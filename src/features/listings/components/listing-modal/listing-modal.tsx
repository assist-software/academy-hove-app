import closeVec from 'features/listings/assets/gobackModal.png'
import styles from 'features/listings/styles/listing-modal.module.scss'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../../../../firebase/firebase-config'
import { IProperty1 } from 'features/showroom/models/showroom-models'
import { useEffect, useState } from 'react'
import shareIcon from 'features/listings/assets/LeftIcon.png'
import heartIcon from 'features/listings/assets/heart.png'
import { IMAGE_ALT_CONTAINER } from 'features/listings/constants/listing-constants'

export const ListingModal = ({ closeModal }: any) => {
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
      <div className={styles.modalBackgroundContainer}>
        <div className={styles.modalContainerSinglePage}>
          <div className={styles.modalExit}>
            <img
              className={styles.closeModalIcon}
              src={closeVec}
              alt='close'
              onClick={() => {
                closeModal(false)
                document.body.style.overflow = 'scroll'
              }}
            />
          </div>
          <div className={styles.modalShareAndFavContainer}>
            <div className={styles.modalShareIconContainer}>
              <img src={shareIcon} alt={IMAGE_ALT_CONTAINER.SHARE} />
              Share
            </div>
            <div className={styles.modalHeartIconContainer}>
              <img src={heartIcon} alt={IMAGE_ALT_CONTAINER.HEART} />
              Save
            </div>
          </div>
          <div className={styles.modalImageContainer}>
            <div className={styles.gridContainer}>
              <div className={styles.gridItem0}>
                <img className={styles.firstImageStyle} src={cards[0]?.image} alt={IMAGE_ALT_CONTAINER.ALT_IMAGE} />
              </div>
              <div className={styles.gridItem1}>
                <img
                  className={styles.secondaryImageStyle}
                  src={cards[0]?.image1}
                  alt={IMAGE_ALT_CONTAINER.ALT_IMAGE}
                />
              </div>
              <div className={styles.gridItem2}>
                <img
                  className={styles.secondaryImageStyle}
                  src={cards[0]?.image2}
                  alt={IMAGE_ALT_CONTAINER.ALT_IMAGE}
                />
              </div>
              <div className={styles.gridItem3}>
                <img className={styles.firstImageStyle} src={cards[0]?.image3} alt={IMAGE_ALT_CONTAINER.ALT_IMAGE} />
              </div>
              <div className={styles.gridItem4}>
                <img
                  className={styles.secondaryImageStyle}
                  src={cards[0]?.image4}
                  alt={IMAGE_ALT_CONTAINER.ALT_IMAGE}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
