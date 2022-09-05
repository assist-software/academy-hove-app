import { notificationStatus, notificationTypes } from 'features/notifications/models/notifications-models'
import { Dialog } from 'primereact/dialog'

interface Props {
  editModal: notificationTypes | null
  closeModal: () => void
  setSetting: ({ setting, value }: { setting: notificationTypes; value: notificationStatus }) => void
}

export const NotificationsSetModal = ({ editModal, closeModal, setSetting }: Props) => {
  return (
    <Dialog header='Header' visible={!!editModal} style={{ width: '50vw' }} onHide={closeModal}>
      <p></p>
    </Dialog>
  )
}
