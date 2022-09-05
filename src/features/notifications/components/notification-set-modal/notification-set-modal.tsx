import { Dialog } from 'primereact/dialog'
import { InputSwitch } from 'primereact/inputswitch'

import { notificationStatus, notificationTypes } from 'features/notifications/models/notifications-models'
import { descriptionLookUpObj, nameLookUpObj } from 'features/notifications/constants/notifications-constants'

interface Props {
  editModal: notificationTypes | null
  closeModal: () => void
  setSetting: (value: notificationStatus) => void
  currentSettings: notificationStatus
}

export const NotificationsSetModal = ({ editModal, closeModal, setSetting, currentSettings }: Props) => {
  const header = !!editModal ? nameLookUpObj[editModal] : ''
  return (
    <Dialog header={header} visible={!!editModal} style={{ width: '50vw' }} onHide={closeModal}>
      {!!editModal && <p>{descriptionLookUpObj[editModal]}</p>}
      <div>
        E-Mail
        <InputSwitch
          checked={currentSettings?.email}
          onChange={() => setSetting({ ...currentSettings, email: !currentSettings?.email })}
        />
      </div>
      <div>
        SMS
        <InputSwitch checked={() => setSetting({ ...currentSettings, sms: !currentSettings?.sms })} />
      </div>
    </Dialog>
  )
}
