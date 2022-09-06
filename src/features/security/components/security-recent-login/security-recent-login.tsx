import { RecentLoginInterface } from 'features/security/models/security-recent-login-model'
import { getFormatedDate } from 'features/security/utils/security-date-to-date_str'
import { SecurityItemHolder } from '../security-item-holder/security-item-holder'
import { SecurityFormText } from 'features/security/constants/security-i18'

import { ReactComponent as DesktopIcon } from '../../assets/laptop-icon.svg'
import { ReactComponent as MobileIcon } from '../../assets/mobile-icon.svg'

import style from './security-recent-login.module.scss'

export const SecurityRecentLogin = ({ id, deviceType, os, browser, location, date }: RecentLoginInterface) => {
  const correctIcon = { mobile: <MobileIcon />, desktop: <DesktopIcon /> }

  const handleLogOutFromDevice = (id: string) => {}

  return (
    <div className={style.recentLogin}>
      <SecurityItemHolder
        description={`${location} - ${getFormatedDate(date)}`}
        buttonText={SecurityFormText['logOutDevice']}
        icon={correctIcon[deviceType]}
        title={`${os} - ${browser}`}
        handleButtonClick={() => {
          handleLogOutFromDevice(id)
        }}
      />
    </div>
  )
}
