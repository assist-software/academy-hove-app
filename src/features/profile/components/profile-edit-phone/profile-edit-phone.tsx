import classnames from 'classnames/bind'

import commonStyle from '../../style/profile-style.module.scss'
import { InputMask, InputMaskChangeParams } from 'primereact/inputmask'
import { useEffect, useState } from 'react'
import { Button } from 'common/components/Button/Button'
import { ProfileInputLabels } from 'features/profile/constants/profile-constants'

export const ProfileEditPhone = () => {
  const [copyPhone, setCopyPhone] = useState<string>('+40747854493')
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const cx = classnames.bind(commonStyle)

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
    <div className={commonStyle.profileContent}>
      <div className={commonStyle.profileLabel}>
        <p>{ProfileInputLabels.phone}</p>
        <InputMask
          mask='+99 999 999 999'
          value={copyPhone}
          onChange={handleChangePhone}
          className={cx(isDisabled && 'p-invalid')}
        />
      </div>

      <Button
        mode='primary'
        children='Save'
        disabled={isDisabled}
        onClick={handleSubmit}
        className={commonStyle.buttonStyle}
      />
    </div>
  )
}
