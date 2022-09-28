import { Button } from 'primereact/button'

import style from './showroom-see-everything-lite.module.scss'

interface Props {
  onClickHandler: () => void
}

export const ShowroomSeeEverythingLite = ({ onClickHandler }: Props) => {
  return (
    <Button className={`${style.seeEverything} p-button-link`} onClick={onClickHandler}>
      <span>See everything</span>
      <i className='pi pi-arrow-right' style={{ fontSize: '12px', color: '#0241AE' }} />
    </Button>
  )
}
