import { INotificationSettings } from '../models/notifications-models'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from 'common/services/firebase-service'
import { getAuth } from 'firebase/auth'

export const notificationsUpdateService = async (notificationSettings: INotificationSettings) => {
  const auth = getAuth()
  const userID = auth.currentUser?.uid

  console.log(notificationSettings)

  if (!userID) return

  const docRef = doc(db, 'users', userID)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    setDoc(docRef, notificationSettings)
  }
}
