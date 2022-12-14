import { observer } from 'mobx-react-lite'
import { useStore } from 'store/store'

import { NotificationsSetModal } from 'features/notifications/components/notification-set-modal/notification-set-modal'
import { NAME_LOOK_UP_OBJ } from 'features/notifications/constants/notifications-constants'
import { notificationStatus, notificationTypes } from 'features/notifications/models/notifications-models'

import styles from './notification-form.module.scss'

export const NotificationsForm = observer(() => {
  const { notificationsStore } = useStore()
  const { notificationSettings, setEditModal, editModal, setSetting, editModalData } = notificationsStore

  return (
    <>
      <div className={styles.notificationForm}>
        <h1>Notifications</h1>
        {Object.entries(notificationSettings).map(([key, value]) => {
          const notificationKey = key as notificationTypes
          const notificationValue = value as notificationStatus

          const bothOff = !(notificationValue.email || notificationValue.sms)
          const bothOn = notificationValue.email && notificationValue.sms

          const settingValue = `${notificationValue.email && 'E-Mail'}${bothOn && ','}${notificationValue.sms && 'SMS'}`

          return (
            <div className={styles.notificationFormSetting}>
              <div>
                <p className={styles.notificationFormSettingName}>{NAME_LOOK_UP_OBJ[notificationKey]}</p>
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
      <NotificationsSetModal
        currentSettings={editModalData}
        editModal={editModal}
        closeModal={() => setEditModal(null)}
        setSetting={(value: notificationStatus) => {
          if (editModal) setSetting({ setting: editModal, value })
        }}
      />
    </>
  )
})
