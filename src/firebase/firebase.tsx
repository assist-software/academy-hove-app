import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export const firebaseConfig = {
  apiKey: 'AIzaSyAgT3eVILzTUqdblToBJ0NqPVeQBoP14cE',
  authDomain: 'internship-project-6d3bb.firebaseapp.com',
  projectId: 'internship-project-6d3bb',
  storageBucket: 'internship-project-6d3bb.appspot.com',
  messagingSenderId: '398881610788',
  appId: '1:398881610788:web:8ce4eb35f4077539fe8cb1',
  measurementId: 'G-LCWG90MMCV',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
