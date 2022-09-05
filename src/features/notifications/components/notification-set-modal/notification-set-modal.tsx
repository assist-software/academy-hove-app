import { Dialog } from 'primereact/dialog'
import { InputSwitch } from 'primereact/inputswitch'

import { notificationStatus, notificationTypes } from 'features/notifications/models/notifications-models'
import { descriptionLookUpObj, nameLookUpObj } from 'features/notifications/constants/notifications-constants'

import style from './notification-set-modal.module.scss'

interface Props {
  editModal: notificationTypes | null
  closeModal: () => void
  setSetting: (value: notificationStatus) => void
  currentSettings: notificationStatus
}

export const NotificationsSetModal = ({ editModal, closeModal, setSetting, currentSettings }: Props) => {
  const header = !!editModal ? nameLookUpObj[editModal] : ''
  return (
    <Dialog
      className={style.notificationSettingDialog}
      header={header}
      visible={!!editModal}
      style={{ width: '50vw' }}
      onHide={closeModal}>
      {!!editModal && <p>{descriptionLookUpObj[editModal]}</p>}
      <div className={style.notificationSettingDialogItem}>
        <p>E-Mail</p>
        <InputSwitch
          checked={currentSettings?.email}
          onChange={() => setSetting({ ...currentSettings, email: !currentSettings?.email })}
        />
      </div>
      <div className={style.notificationSettingDialogItem}>
        <p>SMS</p>
        <InputSwitch checked={() => setSetting({ ...currentSettings, sms: !currentSettings?.sms })} />
      </div>
    </Dialog>
  )
}
