import classNames from 'classnames'
import { useEffect } from 'react'

import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constants'

import { ReactComponent as NotificationIcon } from '../../assets/notification-icon.svg'
import { ReactComponent as SecurityIcon } from '../../assets/security-icon.svg'
import { ReactComponent as ProfileIcon } from '../../assets/profile-icon.svg'
import { ReactComponent as MessageIcon } from '../../assets/message-icon.svg'
import { ReactComponent as LogoutIcon } from '../../assets/logout-icon.svg'
import userIcon from '../../assets/user-img.svg'

import style from './settings-page.module.scss'
import { useStore } from 'store/store'

export const SettingsPage = () => {
  const { authStore } = useStore()
  const { handleLogout } = authStore

  const pages = [PAGES_PATHS.PROFILE, PAGES_PATHS.SECURITY, PAGES_PATHS.NOTIFICATIONS, PAGES_PATHS.MESSAGES]

  const location = useLocation()
  const navigator = useNavigate()

  useEffect(() => {
    let subpathArr = location.pathname.split('/')
    let subpath = subpathArr[subpathArr.length - 1]
    if (!pages.includes(subpath)) navigator(pages[0])
  }, [location.pathname])

  const getClassName = (navData: { isActive: boolean }) => {
    return classNames(style.settingsPageTab, { [style.settingsPageTabActive]: navData.isActive })
  }

  return (
    <div className={style.settingsPage}>
      <div className={style.settingsPageNavBar}>
        <img alt={'profile pic'} src={userIcon} />
        <NavLink to={`${PAGES_PATHS.SETTINGS}${PAGES_PATHS.PROFILE}`} className={getClassName}>
          <ProfileIcon className={style.settingsPageIcon} /> <span className={style.settingsPageTabText}>Profile</span>
        </NavLink>
        <NavLink to={`${PAGES_PATHS.SETTINGS}${PAGES_PATHS.SECURITY}`} className={getClassName}>
          <SecurityIcon className={style.settingsPageIcon} />
          <span className={style.settingsPageTabText}>Login & security</span>
        </NavLink>
        <NavLink to={`${PAGES_PATHS.SETTINGS}${PAGES_PATHS.NOTIFICATIONS}`} className={getClassName}>
          <NotificationIcon className={style.settingsPageIcon} />
          <span className={style.settingsPageTabText}>Notifications</span>
        </NavLink>
        <NavLink to={`${PAGES_PATHS.SETTINGS}${PAGES_PATHS.MESSAGES}`} className={getClassName}>
          <MessageIcon className={style.settingsPageIcon} />
          <span className={style.settingsPageTabText}>Messages</span>
        </NavLink>
        <div className={style.settingsPageLogout} onClick={handleLogout}>
          <LogoutIcon className={style.settingsPageIcon} />
          <span className={style.settingsPageTabText}>Logout</span>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
