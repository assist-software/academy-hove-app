import { useState } from 'react'

import { ProfilePage } from 'features/profile/profile-page'

import style from './page-user.module.scss'

// import { StepperNavigation } from 'features/stepper/components/stepper-navigation/stepper-navigation'
// import { StepperProfilePhoto } from 'features/stepper/components/stepper-profile-photo/stepper-profile-photo'

export const PageUser = () => {
  const [currentPage] = useState<string>('profile')

  const getCurrentProfileComponent = (): JSX.Element => {
    switch (currentPage) {
      case 'profile':
        return <ProfilePage />
      case 'security':
        return <ProfilePage />
      case 'notification':
        return <ProfilePage />
      case 'messages':
        return <ProfilePage />
      default:
        return <ProfilePage />
    }
  }

  return (
    <div className={style.pageUser}>
      <div className={style.pageUserStepper}>
        {/* <StepperProfilePhoto />
        <StepperNavigation /> */}
      </div>
      <div className={style.pageUserContent}>{getCurrentProfileComponent()}</div>
    </div>
  )
}
