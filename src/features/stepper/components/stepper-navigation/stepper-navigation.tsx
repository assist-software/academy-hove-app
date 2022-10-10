import { useState } from 'react'

import classnames from 'classnames/bind'

import { ALT_IMG_PROFILE, STEPPER_LABELS } from 'features/stepper/constants/stepper-constants'
import profile from 'features/stepper/assets/profile.svg'
import profileActive from 'features/stepper/assets/profileActive.svg'
import security from 'features/stepper/assets/security.svg'
import securityActive from 'features/stepper/assets/securityActive.svg'
import notification from 'features/stepper/assets/notification.svg'
import notificationActive from 'features/stepper/assets/notificationActive.svg'
import messages from 'features/stepper/assets/messages.svg'
import messagesActive from 'features/stepper/assets/messagesActive.svg'
import logout from 'features/stepper/assets/logout.svg'

import style from './stepper-navigation.module.scss'

export const StepperNavigation = () => {
  const [currentPage, setCurrentPage] = useState<string>(STEPPER_LABELS.PROFILE)
  const cx = classnames.bind(style)
  const profileActiveText = currentPage === STEPPER_LABELS.PROFILE && style.stepperActiveText
  const securityActiveText = currentPage === STEPPER_LABELS.SECURITY && style.stepperActiveText
  const notificationActiveText = currentPage === STEPPER_LABELS.NOTIFICATION && style.stepperActiveText
  const messagesActiveText = currentPage === STEPPER_LABELS.MESSAGES && style.stepperActiveText
  const profileIcon = currentPage === STEPPER_LABELS.PROFILE ? profileActive : profile
  const securityIcon = currentPage === STEPPER_LABELS.SECURITY ? securityActive : security
  const notificationIcon = currentPage === STEPPER_LABELS.NOTIFICATION ? notificationActive : notification
  const messagesIcon = currentPage === STEPPER_LABELS.MESSAGES ? messagesActive : messages

  return (
    <div className={style.stepper}>
      <div className={style.stepperCategory} onClick={() => setCurrentPage(STEPPER_LABELS.PROFILE)}>
        <img src={profileIcon} alt={ALT_IMG_PROFILE.PROFILE} />
        <p className={cx(profileActiveText)}>{STEPPER_LABELS.PROFILE}</p>
      </div>
      <div className={style.stepperCategory} onClick={() => setCurrentPage(STEPPER_LABELS.SECURITY)}>
        <img src={securityIcon} alt={ALT_IMG_PROFILE.PROFILE} />
        <p className={cx(securityActiveText)}>{STEPPER_LABELS.SECURITY}</p>
      </div>
      <div className={style.stepperCategory} onClick={() => setCurrentPage(STEPPER_LABELS.NOTIFICATION)}>
        <img src={notificationIcon} alt={ALT_IMG_PROFILE.NOTIFICATION} />
        <p className={cx(notificationActiveText)}>{STEPPER_LABELS.NOTIFICATION}</p>
      </div>
      <div className={style.stepperCategory} onClick={() => setCurrentPage(STEPPER_LABELS.MESSAGES)}>
        <img src={messagesIcon} alt={ALT_IMG_PROFILE.MESSAGES} />
        <p className={cx(messagesActiveText)}>{STEPPER_LABELS.MESSAGES}</p>
      </div>
      <div className={style.stepperCategoryLogout}>
        <img src={logout} alt={ALT_IMG_PROFILE.LOGOUT} />
        <p>{STEPPER_LABELS.LOGOUT}</p>
      </div>
    </div>
  )
}
