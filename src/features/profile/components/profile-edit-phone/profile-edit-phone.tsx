import { useEffect, useState } from 'react'

import classNames from 'classnames'
import { InputMask, InputMaskChangeParams } from 'primereact/inputmask'

import { Button } from 'common/components/Button/Button'

import { PROFILE_INPUTS_LABELS } from 'features/profile/constants/profile-constants'
import { ProfileLabel } from 'features/profile/components/profile-label/profile-label'

export const ProfileEditPhone = () => {
  const [copyPhone, setCopyPhone] = useState<string>('+40747854493')
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  useEffect(() => {
    if (copyPhone) {
      setIsDisabled(false)
    } else {
      return setIsDisabled(true)
    }
  }, [copyPhone])

  const handleChangePhone = (e: InputMaskChangeParams) => {
    console.log(e)
    setCopyPhone(e.target.value)
  }

  const handleSubmit = () => {
    console.log('Send to backend')
  }

  return (
    <ProfileLabel>
      <p>{PROFILE_INPUTS_LABELS.PHONE}</p>
      <InputMask
        mask='+99 999 999 999'
        value={copyPhone}
        onChange={handleChangePhone}
        className={classNames(isDisabled && 'p-invalid')}
      />
      <div>
        <Button
          mode='primary'
          children='Save'
          disabled={isDisabled}
          onClick={handleSubmit}
          style={{ width: '117px' }}
        />
      </div>
    </ProfileLabel>
  )
}
