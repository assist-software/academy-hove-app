import classnames from 'classnames/bind'

import style from './profile-edit-name.module.scss'
import commonStyle from '../../style/profile-style.module.scss'
import { Button } from 'common/components/Button/Button'
import { InputText } from 'primereact/inputtext'
import { ChangeEvent, useEffect, useState } from 'react'
import { ProfileInputLabels, ProfilePlaceholder } from 'features/profile/constants/profile-constants'

export const ProfileEditName = () => {
  const [copyFirstName, setCopyFirstName] = useState<string>('James')
  const [copyLastName, setCopyLastName] = useState<string>('Milner')
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const cx = classnames.bind(style)

  useEffect(() => {
    if (copyFirstName !== '' && copyLastName !== '') {
      setIsDisabled(false)
    } else {
      return setIsDisabled(true)
    }
  }, [copyFirstName, copyLastName])

  const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setCopyFirstName(e.target.value)
  }

  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setCopyLastName(e.target.value)
  }

  const handleSubmit = () => {
    console.log('Send to backend')
  }

  return (
    <div className={commonStyle.profileContent}>
      <div className={style.editNameForm}>
        <div className={style.editNameInput}>
          <p>{ProfileInputLabels.firstName}</p>
          <InputText
            placeholder={ProfilePlaceholder.firstName}
            value={copyFirstName}
            onChange={handleFirstName}
            className={cx(!copyFirstName && 'p-invalid')}
          />
        </div>
        <div className={style.editNameInput}>
          <p>{ProfileInputLabels.lastName}</p>
          <InputText
            placeholder={ProfilePlaceholder.lastName}
            value={copyLastName}
            onChange={handleLastName}
            className={cx(!copyLastName && 'p-invalid')}
          />
        </div>
      </div>
      <Button
        mode='primary'
        children='Save'
        onClick={handleSubmit}
        disabled={isDisabled}
        className={commonStyle.buttonStyle}
      />
    </div>
  )
}
