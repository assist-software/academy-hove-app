import { ChangeEvent, useEffect, useState } from 'react'

import { InputText } from 'primereact/inputtext'
import classNames from 'classnames'

import { Button } from 'common/components/Button/Button'

import { PROFILE_INPUTS_LABELS, PROFILE_PLACEHOLDER } from 'features/profile/constants/profile-constants'
import { ProfileLabel } from 'features/profile/components/profile-label/profile-label'

export const ProfileEditEmail = () => {
  const [copyEmail, setCopyEmail] = useState<string>('costescuadrian@outlook.com')
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const regx = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

  useEffect(() => {
    if (regx.test(copyEmail)) {
      setIsDisabled(false)
    } else {
      return setIsDisabled(true)
    }
  }, [copyEmail])

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setCopyEmail(e.target.value)
  }

  const handleSubmit = () => {
    console.log('Send to backend')
  }

  return (
    <ProfileLabel>
      <p>{PROFILE_INPUTS_LABELS.EMAIL}</p>
      <InputText
        placeholder={PROFILE_PLACEHOLDER.EMAIL}
        value={copyEmail}
        onChange={handleChangeEmail}
        className={classNames(isDisabled && 'p-invalid')}
      />
      <div>
        <Button mode='primary' children='Save' onClick={handleSubmit} style={{ width: '117px' }} />
      </div>
    </ProfileLabel>
  )
}
