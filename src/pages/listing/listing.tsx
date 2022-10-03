import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../../firebase/firebase-config'
import { IProperty1 } from 'features/showroom/models/showroom-models'

export const Listing = () => {
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
        console.log('123123', info)
        setCards(info)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])
  console.log('cards', cards)
  return <div>{cards[0]?.title}</div>
}
