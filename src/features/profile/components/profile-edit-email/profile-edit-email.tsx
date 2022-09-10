import classnames from 'classnames/bind'

import commonStyle from '../../style/profile-style.module.scss'
import { ProfileInputLabels, ProfilePlaceholder } from 'features/profile/constants/profile-constants'
import { Button } from 'common/components/Button/Button'
import { InputText } from 'primereact/inputtext'
import { ChangeEvent, useEffect, useState } from 'react'

export const ProfileEditEmail = () => {
  const [copyEmail, setCopyEmail] = useState<string>('costescuadrian@outlook.com')
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const cx = classnames.bind(commonStyle)
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
    <div className={commonStyle.profileContent}>
      <div className={commonStyle.profileLabel}>
        <p>{ProfileInputLabels.email}</p>
        <InputText
          placeholder={ProfilePlaceholder.email}
          value={copyEmail}
          onChange={handleChangeEmail}
          className={cx(isDisabled && 'p-invalid')}
        />
      </div>
      <Button mode='primary' children='Save' onClick={handleSubmit} className={commonStyle.buttonStyle} />
    </div>
  )
}
