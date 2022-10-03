import { Dropdown } from 'primereact/dropdown'
import { useEffect, useState } from 'react'
import gridLogo from 'pages/home/assets/GridRowBase.png'
import gridOffLogo from 'pages/home/assets/GridRowBase1.png'
import { nanoid } from 'nanoid'
import styles from 'features/showroom/styles/showroom-thumbnail.module.scss'
import { useAppSelector } from 'state'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { IProperty1 } from 'features/showroom/models/showroom-models'
import { db } from '../../../../firebase/firebase-config'
import { ShowroomCard } from '../showroom-card/showroom-card'

export const ShowroomSeeEverithingHead = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  const [selectedPrice, setSelectedPrice] = useState<any>(null)
  const [selectedOrder, setSelectedOrder] = useState<any>(null)
  const [isGrid, setIsGrid] = useState<boolean>(false)
  const { latest } = useAppSelector((state) => state.showroom)
  const dataCollectionLatest = collection(db, 'Latest')
  const qLatest = query(dataCollectionLatest, where('type', '==', 'latest'))
  const qBigHouses = query(dataCollectionLatest, where('type', '==', 'Big_Houses'))
  const qSmallHouses = query(dataCollectionLatest, where('type', '==', 'Small_Houses'))
  const [cards, setCards] = useState<IProperty1[]>([])

  const page = window.location.pathname.split('/')[2]

  useEffect(() => {
    if (page === 'latest') {
      getDocs(qLatest)
        .then((snapshot: any) => {
          let info: IProperty1[] = []
          snapshot.docs.forEach((doc: any) => {
            info.push({ ...doc.data() })
          })
          console.log('123123', info)
          setCards(info)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } else if (page === 'big-houses') {
      getDocs(qBigHouses)
        .then((snapshot: any) => {
          let info: IProperty1[] = []
          snapshot.docs.forEach((doc: any) => {
            info.push({ ...doc.data() })
          })
          console.log('123123', info)
          setCards(info)
        })
        .catch((err) => {
          console.log(err.message)
        })
    } else if (page === 'small-houses') {
      getDocs(qSmallHouses)
        .then((snapshot: any) => {
          let info: IProperty1[] = []
          snapshot.docs.forEach((doc: any) => {
            info.push({ ...doc.data() })
          })
          console.log('123123', info)
          setCards(info)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }, [page])

  const onClickIsGrid = () => {
    setIsGrid(false)
  }
  const onClickIsNotGrid = () => {
    setIsGrid(true)
  }

  const onCategoryyChange = (e: { value: any }) => {
    setSelectedCategory(e.value)
  }
  const onPriceChange = (e: { value: any }) => {
    setSelectedPrice(e.value)
  }
  const onOrderChange = (e: { value: any }) => {
    setSelectedOrder(e.value)
  }

  const category = [{ name: 'Suceava' }, { name: 'Botosani' }, { name: 'Botosani' }]
  const price = [{ name: '0-10,000' }, { name: '10,000-20,000' }, { name: '20,000 - 30,000' }]
  const order = [{ name: 'Most popular' }, { name: 'Price: Low to High' }, { name: 'Price: High to Low' }]

  console.log('latest', latest)

  return (
    <>
      <div className={styles.ShowroomHeaderContainer}>
        <div className={styles.ShowroomHeaderContainer}>
          <div>Filter by:</div>
          <Dropdown
            value={selectedCategory}
            options={category}
            onChange={onCategoryyChange}
            optionLabel='name'
            placeholder='Category'
          />
          <Dropdown
            value={selectedPrice}
            options={price}
            onChange={onPriceChange}
            optionLabel='name'
            placeholder='Price'
          />
        </div>
        <div className={styles.ShowroomHeaderContainer}>
          <div>Order by:</div>
          <Dropdown
            value={selectedOrder}
            options={order}
            onChange={onOrderChange}
            optionLabel='name'
            placeholder='Order by'
          />
          <img src={gridLogo} alt='grid' style={{ cursor: 'pointer' }} onClick={onClickIsGrid} />
          <img src={gridOffLogo} alt='grid' style={{ cursor: 'pointer' }} onClick={onClickIsNotGrid} />
        </div>
      </div>
      <div className={!isGrid ? styles.showroomCardContainer : styles.showroomCardContainerGrid}>
        {cards?.map((elem) => (
          <ShowroomCard property={elem} isGrid={isGrid} role={0} key={nanoid()} />
        ))}
      </div>
    </>
  )
}
