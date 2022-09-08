import { PAGES_PATHS } from 'common/constants/constants'
import { NavLink, Outlet } from 'react-router-dom'

import { ReactComponent as SecurityIcon } from '../../assets/security-icon.svg'
import { ReactComponent as ProfileIcon } from '../../assets/profile-icon.svg'
import { ReactComponent as MessageIcon } from '../../assets/message-icon.svg'
import { ReactComponent as NotificationIcon } from '../../assets/notification-icon.svg'
import { ReactComponent as LogoutIcon } from '../../assets/logout-icon.svg'

import style from './settings-page.module.scss'

export const SettingsPage = () => {
  return (
    <div className={style.settingsPage}>
      <div className={style.settingsPageNavBar}>
        <img alt={'profile pic'} />
        <NavLink to={`${PAGES_PATHS.SETTINGS}${PAGES_PATHS.PROFILE}`} className={style.settingsPageTab}>
          <ProfileIcon className={style.settingsPageIcon} /> Profile
        </NavLink>
        <NavLink to={`${PAGES_PATHS.SETTINGS}${PAGES_PATHS.SECURITY}`} className={style.settingsPageTab}>
          <SecurityIcon className={style.settingsPageIcon} /> Login & security
        </NavLink>
        <NavLink to={`${PAGES_PATHS.SETTINGS}${PAGES_PATHS.NOTIFICATIONS}`} className={style.settingsPageTab}>
          <NotificationIcon className={style.settingsPageIcon} />
          Notifications
        </NavLink>
        <NavLink to={`${PAGES_PATHS.SETTINGS}${PAGES_PATHS.MESSAGES}`} className={style.settingsPageTab}>
          <MessageIcon className={style.settingsPageIcon} />
          Messages
        </NavLink>
        <div className={style.settingsPageTab}>
          <LogoutIcon className={style.settingsPageIcon} />
          Logout
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
