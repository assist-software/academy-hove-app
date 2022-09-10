import { useState } from 'react'
import classnames from 'classnames/bind'

import style from './stepper-navigation.module.scss'
import { AltImgProfile, STEPPER_LABELS } from 'features/stepper/constants/stepper-constants'
import profile from '../../assets/profile.svg'
import profileActive from '../../assets/profileActive.svg'
import security from '../../assets/security.svg'
import securityActive from '../../assets/securityActive.svg'
import notification from '../../assets/notification.svg'
import notificationActive from '../../assets/notificationActive.svg'
import messages from '../../assets/messages.svg'
import messagesActive from '../../assets/messagesActive.svg'
import logout from '../../assets/logout.svg'

export const StepperNavigation = () => {
  const [currentPage, setCurrentPage] = useState<string>(STEPPER_LABELS.profile)
  const cx = classnames.bind(style)
  const profileActiveText = currentPage === STEPPER_LABELS.profile && style.activeText
  const securityActiveText = currentPage === STEPPER_LABELS.security && style.activeText
  const notificationActiveText = currentPage === STEPPER_LABELS.notification && style.activeText
  const messagesActiveText = currentPage === STEPPER_LABELS.messages && style.activeText
  const profileIcon = currentPage === STEPPER_LABELS.profile ? profileActive : profile
  const securityIcon = currentPage === STEPPER_LABELS.security ? securityActive : security
  const notificationIcon = currentPage === STEPPER_LABELS.notification ? notificationActive : notification
  const messagesIcon = currentPage === STEPPER_LABELS.messages ? messagesActive : messages

  return (
    <div className={style.stepper}>
      <div className={style.stepperCategory} onClick={() => setCurrentPage(STEPPER_LABELS.profile)}>
        <img src={profileIcon} alt={AltImgProfile.profile} />
        <p className={cx(profileActiveText)}>{STEPPER_LABELS.profile}</p>
      </div>
      <div className={style.stepperCategory} onClick={() => setCurrentPage(STEPPER_LABELS.security)}>
        <img src={securityIcon} alt={AltImgProfile.profile} />
        <p className={cx(securityActiveText)}>{STEPPER_LABELS.security}</p>
      </div>
      <div className={style.stepperCategory} onClick={() => setCurrentPage(STEPPER_LABELS.notification)}>
        <img src={notificationIcon} alt={AltImgProfile.notification} />
        <p className={cx(notificationActiveText)}>{STEPPER_LABELS.notification}</p>
      </div>
      <div className={style.stepperCategory} onClick={() => setCurrentPage(STEPPER_LABELS.messages)}>
        <img src={messagesIcon} alt={AltImgProfile.messages} />
        <p className={cx(messagesActiveText)}>{STEPPER_LABELS.messages}</p>
      </div>
      <div className={style.stepperCategoryLogout}>
        <img src={logout} alt={AltImgProfile.logout} />
        <p>{STEPPER_LABELS.logout}</p>
      </div>
    </div>
  )
}
