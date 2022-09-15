import { doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useEffectOnce } from 'react-use'

import { AUTH_PAGES, PAGES_PATHS } from 'common/constants/constants'
import { db } from 'common/services/firebase-service'

export const AuthStateHandler = () => {
  const navigator = useNavigate()

  useEffectOnce(() => {
    const auth = getAuth()

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (AUTH_PAGES.includes(document.location.pathname)) navigator(PAGES_PATHS.HOME, { replace: true })

        //Just checks if the doc exists and creates it if not, but it should be allready created in the signUp flow
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)

        if (!docSnap.exists()) {
          setDoc(docRef, {
            imageURL: '',
          })
        }
      } else {
        if (!AUTH_PAGES.includes(document.location.pathname)) navigator(PAGES_PATHS.LOG_IN, { replace: true })
      }
    })
  })
  return <></>
}
