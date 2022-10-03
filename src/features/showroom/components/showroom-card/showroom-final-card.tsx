import styles from 'features/showroom/styles/showroom-thumbnail.module.scss'
import { Button } from 'primereact/button'

export interface ICard {
  text: string
}

export const ShowroomFinalCard = () => {
  return (
    <div className={styles.finalCardContainer}>
      <div className={styles.finalCard}>
        <Button icon='pi pi-user' className='p-button-rounded p-button-info' aria-label='User' />
        <h4>See everything</h4>
      </div>
    </div>
  )
}
