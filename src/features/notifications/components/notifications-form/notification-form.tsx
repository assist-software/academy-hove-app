import { observer } from 'mobx-react-lite'
import { useStore } from 'store/store'

import { notificationStatus, notificationTypes } from 'features/notifications/models/notifications-models'
import { nameLookUpObj } from 'features/notifications/constants/notifications-constants'
import { NotificationsSetModal } from '../notification-set-modal/notification-set-modal'
import { Divider } from 'common/components/Divider/Divider'
import { Button } from 'common/components/Button/Button'

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

          const settingValue = `${notificationValue.email ? 'E-Mail' : ''}${bothOn ? ', ' : ''}${
            notificationValue.sms ? 'SMS' : ''
          }`

          return (
            <>
              <div className={styles.notificationFormSetting}>
                <div>
                  <p className={styles.notificationFormSettingName}>{nameLookUpObj[notificationKey]}</p>
                  <p className={styles.notificationFormSettingValue}>{bothOff ? 'Off' : settingValue}</p>
                </div>

                <Button
                  onClick={() => {
                    setEditModal(notificationKey)
                  }}
                  mode='tertiary'
                  className={styles.notificationFormEditBtn}>
                  Edit
                </Button>
              </div>
              <Divider className={styles.notificationFormDivider} />
            </>
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
