import { Carousel } from 'primereact/carousel'
import { ShowroomCard } from 'features/showroom/components/showroom-card/showroom-card'
import { FC, useEffect, useState } from 'react'
import { db } from '../../../../firebase/firebase-config'
import { CAROUSEL_HEADERS } from 'features/showroom/constants/showroom-constants'
import rightArrow from 'features/showroom/assets/arrowRight.png'
import styles from 'features/showroom/styles/showroom-thumbnail.module.scss'
import { IProperty, IProperty1 } from 'features/showroom/models/showroom-models'
import { collection, getDocs, query, where } from '@firebase/firestore'
import {
  HANDLE_SET_SHOWROOM_BIG_HOUSES,
  HANDLE_SET_SHOWROOM_LATEST,
  HANDLE_SET_SHOWROOM_SMALL_HOUSES,
} from 'features/showroom/state/reducers/showroom-slice'
import { useAppDispatch, useAppSelector } from 'state'
import { useNavigate } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constants'

export const ShowroomCarousel: FC<IProperty> = () => {
  const dataCollectionLatest = collection(db, 'Latest')

  const [cardLatest, setCardLatest] = useState<IProperty1[]>([])
  const [cardBigHouses, setCardBigHouses] = useState<IProperty1[]>([])
  const [cardSmallHouses, setCardSmallHouses] = useState<IProperty1[]>([])
  const dispatch = useAppDispatch()
  const { latest } = useAppSelector((state) => state.showroom)
  console.log('latest', latest)
  const navigate = useNavigate()

  const qLatest = query(dataCollectionLatest, where('type', '==', 'Latest'))
  const qBigHouses = query(dataCollectionLatest, where('type', '==', 'Big Houses'))
  const qSmallHouses = query(dataCollectionLatest, where('type', '==', 'Small Houses'))

  useEffect(() => {
    getDocs(qLatest)
      .then((snapshot: any) => {
        let info: IProperty1[] = []
        snapshot.docs.forEach((doc: any) => {
          info.push({ ...doc.data() })
        })
        setCardLatest(info)
        dispatch(HANDLE_SET_SHOWROOM_LATEST(info))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])
  useEffect(() => {
    getDocs(qBigHouses)
      .then((snapshot: any) => {
        let info: IProperty1[] = []
        snapshot.docs.forEach((doc: any) => {
          info.push({ ...doc.data() })
        })
        setCardBigHouses(info)
        dispatch(HANDLE_SET_SHOWROOM_BIG_HOUSES(info))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])
  useEffect(() => {
    getDocs(qSmallHouses)
      .then((snapshot: any) => {
        let info: IProperty1[] = []
        snapshot.docs.forEach((doc: any) => {
          info.push({ ...doc.data() })
        })
        setCardSmallHouses(info)
        dispatch(HANDLE_SET_SHOWROOM_SMALL_HOUSES(info))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1,
    },
  ]

  const thumbnailTemplate = (property: any) => {
    return <ShowroomCard isGrid={false} role={0} property={property} />
  }

  return (
    <div>
      <div className='card'>
        <div className={styles.carouselSeeEverithingLatest}>
          <h5 onClick={() => navigate(`${PAGES_PATHS.SEE_EVERITHING}/${PAGES_PATHS.LATEST} `)}>
            {CAROUSEL_HEADERS.SEE_EVERITHING}
          </h5>
          <div>
            <img src={rightArrow} alt='arrowRight' />
          </div>
        </div>
        <Carousel
          id='latest'
          value={cardLatest}
          numVisible={4}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={thumbnailTemplate}
          header={<h3>{CAROUSEL_HEADERS.LATEST}</h3>}
          indicatorsContentClassName={styles.ceva}
        />
      </div>
      <div className='card'>
        <div className={styles.carouselSeeEverithingBigHouses}>
          <h5 onClick={() => navigate(`${PAGES_PATHS.SEE_EVERITHING}/${PAGES_PATHS.BIG_HOUSES} `)}>
            {CAROUSEL_HEADERS.SEE_EVERITHING}
          </h5>
          <div>
            <img src={rightArrow} alt='arrowRight' />
          </div>
        </div>
        <Carousel
          id='bigHouses'
          value={cardBigHouses}
          numVisible={4}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={thumbnailTemplate}
          header={<h3>{CAROUSEL_HEADERS.BIG_HOUSES}</h3>}
          indicatorsContentClassName={styles.ceva}
        />
      </div>
      <div className='card'>
        <div className={styles.carouselSeeEverithingSmallHouses}>
          <h5 onClick={() => navigate(`${PAGES_PATHS.SEE_EVERITHING}/${PAGES_PATHS.SMALL_HOUSES} `)}>
            {CAROUSEL_HEADERS.SEE_EVERITHING}
          </h5>
          <div>
            <img src={rightArrow} alt='arrowRight' />
          </div>
        </div>
        <Carousel
          id='smallHouses'
          value={cardSmallHouses}
          numVisible={4}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={thumbnailTemplate}
          indicatorsContentClassName={styles.ceva}
          header={<h3>{CAROUSEL_HEADERS.SMALL_HOUSES}</h3>}
        />
      </div>
    </div>
  )
}
