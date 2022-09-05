import { nameLookUpObj } from 'features/notifications/constants/notifications-constants'
import { notificationStatus, notificationTypes } from 'features/notifications/models/notifications-models'
import { observer } from 'mobx-react-lite'
import { useStore } from 'store/store'
import { NotificationsSetModal } from '../notification-set-modal/notification-set-modal'

import styles from './notification-form.module.scss'

export const NotificationsForm = observer(() => {
  const { notificationsStore } = useStore()
  const { notificationSettings, setEditModal, editModal, setSetting } = notificationsStore

  return (
    <>
      {' '}
      <div className={styles.notificationForm}>
        <h1>Notifications</h1>
        {Object.entries(notificationSettings).map(([key, value]) => {
          const notificationKey = key as notificationTypes
          const notificationValue = value as notificationStatus

          const bothOff = !(notificationValue.email || notificationValue.sms)
          const bothOn = notificationValue.email && notificationValue.sms

          const settingValue = `${notificationValue.email && 'Email'}${bothOn && ','}${notificationValue.sms && 'SMS'}`

          return (
            <div className={styles.notificationFormSetting}>
              <div>
                <p className={styles.notificationFormSettingName}>{nameLookUpObj[notificationKey]}</p>
                <p className={styles.notificationFormSettingValue}>{bothOff ? 'Off' : settingValue}</p>
              </div>
              <div>
                {/** TODO : Update this after the buttons are merged into main */}
                <button
                  onClick={() => {
                    setEditModal(notificationKey)
                  }}>
                  Edit
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <NotificationsSetModal editModal={editModal} closeModal={() => setEditModal(null)} setSetting={setSetting} />
    </>
  )
})
