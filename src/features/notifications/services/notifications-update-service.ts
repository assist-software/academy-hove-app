import { INotificationSettings } from '../models/notifications-models'
import { doc, setDoc } from 'firebase/firestore'
import { db } from 'common/services/firebase-service'
import { getAuth } from 'firebase/auth'

export const notificationsUpdateService = async (notificationSettings: INotificationSettings) => {
  const auth = getAuth()
  const userID = auth.currentUser?.uid

  if (!userID) return

  const docRef = doc(db, 'users', userID)

  setDoc(docRef, notificationSettings)
}
