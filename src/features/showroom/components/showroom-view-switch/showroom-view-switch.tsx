import { FC } from 'react'

import classnames from 'classnames/bind'
import { Button } from 'primereact/button'

import { SHOWROOM_ACTIVE_VIEW, viewType } from 'features/showroom/constants/showroom-constants'

import styles from './showroom-view-switch.module.scss'

const cx = classnames.bind(styles)
interface Props {
  activeView: viewType
  switchView: (to: viewType) => void
}

export const ShowroomViewSwitch: FC<Props> = ({ activeView, switchView }) => {
  return (
    <div className='flex'>
      <Button
        icon='pi pi-th-large'
        className={cx('p-button-text', 'w-2rem', 'h-2rem', {
          'text-900': activeView === SHOWROOM_ACTIVE_VIEW.GRID,
          'text-500': activeView !== SHOWROOM_ACTIVE_VIEW.GRID,
        })}
        aria-label='Grid'
        onClick={() => switchView(SHOWROOM_ACTIVE_VIEW.GRID as viewType)}
      />
      <Button
        icon='pi pi-bars'
        className={cx('p-button-text', 'w-2rem', 'h-2rem', {
          'text-900': activeView !== SHOWROOM_ACTIVE_VIEW.GRID,
          'text-500': activeView === SHOWROOM_ACTIVE_VIEW.GRID,
        })}
        aria-label='List'
        onClick={() => switchView(SHOWROOM_ACTIVE_VIEW.LIST as keyof typeof SHOWROOM_ACTIVE_VIEW)}
      />
    </div>
  )
}
