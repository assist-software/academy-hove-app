import { useNavigate, useParams } from 'react-router-dom'

import { Image } from 'primereact/image'
import classnames from 'classnames/bind'

import { StepperProfilePhoto } from 'features/stepper/components/stepper-profile-photo/stepper-profile-photo'
import { ALT_IMG_PROFILE, STEPPER_LABELS, STEPPER_PATH } from 'features/stepper/constants/stepper-constants'
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
  const cx = classnames.bind(style)
  const navigate = useNavigate()
  const param = useParams()
  const profileActiveText = param.action === STEPPER_PATH.PROFILE && style.stepperNavigationActiveText
  const securityActiveText = param.action === STEPPER_PATH.SECURITY && style.stepperNavigationActiveText
  const notificationActiveText = param.action === STEPPER_PATH.NOTIFICATION && style.stepperNavigationActiveText
  const messagesActiveText = param.action === STEPPER_PATH.MESSAGES && style.stepperNavigationActiveText
  const profileIcon = param.action === STEPPER_PATH.PROFILE ? profileActive : profile
  const securityIcon = param.action === STEPPER_PATH.SECURITY ? securityActive : security
  const notificationIcon = param.action === STEPPER_PATH.NOTIFICATION ? notificationActive : notification
  const messagesIcon = param.action === STEPPER_PATH.MESSAGES ? messagesActive : messages

  const handleChangeAccountNavigation = (navigateLink: string): void => {
    navigate(`/account/${navigateLink}`)
  }

  const getCurrentAccountComponent = (): JSX.Element => {
    switch (param.action) {
      case STEPPER_PATH.PROFILE:
        return <div>profile</div>
      case STEPPER_PATH.SECURITY:
        return <div>security</div>
      case STEPPER_PATH.NOTIFICATION:
        return <div>notification</div>
      case STEPPER_PATH.MESSAGES:
        return <div>messages</div>
      default:
        return <div>profile</div>
    }
  }

  return (
    <div className={style.stepperNavigation}>
      <div className={style.stepperNavigationWrapper}>
        <StepperProfilePhoto />
        <div
          className={style.stepperNavigationCategory}
          onClick={() => handleChangeAccountNavigation(STEPPER_PATH.PROFILE)}>
          <Image src={profileIcon} alt={ALT_IMG_PROFILE.PROFILE} />
          <p className={cx(profileActiveText)}>{STEPPER_LABELS.PROFILE}</p>
        </div>
        <div
          className={style.stepperNavigationCategory}
          onClick={() => handleChangeAccountNavigation(STEPPER_PATH.SECURITY)}>
          <Image src={securityIcon} alt={ALT_IMG_PROFILE.PROFILE} />
          <p className={cx(securityActiveText)}>{STEPPER_LABELS.SECURITY}</p>
        </div>
        <div
          className={style.stepperNavigationCategory}
          onClick={() => handleChangeAccountNavigation(STEPPER_PATH.NOTIFICATION)}>
          <Image src={notificationIcon} alt={ALT_IMG_PROFILE.NOTIFICATION} />
          <p className={cx(notificationActiveText)}>{STEPPER_LABELS.NOTIFICATION}</p>
        </div>
        <div
          className={style.stepperNavigationCategory}
          onClick={() => handleChangeAccountNavigation(STEPPER_PATH.MESSAGES)}>
          <Image src={messagesIcon} alt={ALT_IMG_PROFILE.MESSAGES} />
          <p className={cx(messagesActiveText)}>{STEPPER_LABELS.MESSAGES}</p>
        </div>
        <div className={style.stepperNavigationLogout}>
          <Image src={logout} alt={ALT_IMG_PROFILE.LOGOUT} />
          <p>{STEPPER_LABELS.LOGOUT}</p>
        </div>
      </div>
      <div>{getCurrentAccountComponent()}</div>
    </div>
  )
}
