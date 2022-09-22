import { RecentLoginInterface } from 'features/security/models/security-recent-login-model'
import { SecurityFormText } from 'features/security/constants/security-i18'
import { getFormattedDate } from 'features/security/utils/security-date-to-date_str'
import { SecurityItemHolder } from 'features/security/components/security-item-holder/security-item-holder'
import { ReactComponent as DesktopIcon } from 'features/security/assets/laptop-icon.svg'
import { ReactComponent as MobileIcon } from 'features/security/assets/mobile-icon.svg'

import style from './security-recent-login.module.scss'

export const SecurityRecentLogin = ({ id, deviceType, os, browser, location, date }: RecentLoginInterface) => {
  const correctIcon = { mobile: <MobileIcon />, desktop: <DesktopIcon /> }

  const handleLogOutFromDevice = (id: string) => {}

  return (
    <div className={style.securityRecentLogin}>
      <SecurityItemHolder
        description={`${location} - ${getFormattedDate(date)}`}
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
