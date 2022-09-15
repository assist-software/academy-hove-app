import { doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useEffectOnce } from 'react-use'

import { AUTH_PAGES, PAGES_PATHS, PLACEHOLDER_USER_DATA } from 'common/constants/constants'
import { db } from 'common/services/firebase-service'
import { useStore } from 'store/store'
import { UserIDDoc } from 'features/auth/models/firestore-models'

export const AuthStateHandler = () => {
  const { notificationsStore, authStore } = useStore()

  const navigator = useNavigate()

  useEffectOnce(() => {
    const auth = getAuth()

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (AUTH_PAGES.includes(document.location.pathname)) navigator(PAGES_PATHS.HOME, { replace: true })

        authStore.setUserID(user.uid)

        //Just checks if the doc exists and creates it if not, but it should be allready created in the signUp flow
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)

        if (!docSnap.exists()) {
          setDoc(docRef, PLACEHOLDER_USER_DATA)
        }

        // load data and distribute it in all the required stores

        const userData = docSnap.data() as UserIDDoc // the data should exist because it was created a few lines of code above

        const {
          discountNotifications,
          messagesNotifications,
          newListingsNotifications,
          newsNotification,
          priceChangeNotifications,
        } = userData

        notificationsStore.setStoreData({
          discountNotifications,
          messagesNotifications,
          newListingsNotifications,
          newsNotification,
          priceChangeNotifications,
        })
      } else {
        if (!AUTH_PAGES.includes(document.location.pathname)) navigator(PAGES_PATHS.LOG_IN, { replace: true })
      }
    })
  })
  return <></>
}
