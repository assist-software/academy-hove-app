import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { config } from 'services/config'
export const firebaseConfig = {
  apiKey: `${config.firebase_apiKey}`,
  authDomain: `${config.firebase_authDomain}`,
  projectId: `${config.firebase_projectId}`,
  storageBucket: `${config.firebase_storageBucket}`,
  messagingSenderId: `${config.firebase_messagingSenderId}`,
  appId: `${config.firebase_appId}`,
  measurementId: `${config.firebase_measurementId}`,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
