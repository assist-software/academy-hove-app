import { ChangeEvent, useEffect, useState } from 'react'

import classnames from 'classnames/bind'
import { InputText } from 'primereact/inputtext'

import { Button } from 'common/components/Button/Button'

import { PROFILE_INPUTS_LABELS, PROFILE_PLACEHOLDER } from 'features/profile/constants/profile-constants'

import styles from './profile-edit-name.module.scss'

export const ProfileEditName = () => {
  const [copyFirstName, setCopyFirstName] = useState<string>('James')
  const [copyLastName, setCopyLastName] = useState<string>('Milner')
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const cx = classnames.bind(styles)

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
    <div className={styles.editNameContent}>
      <div className={styles.editNameForm}>
        <div className={styles.editNameInput}>
          <p>{PROFILE_INPUTS_LABELS.FIRST_NAME}</p>
          <InputText
            placeholder={PROFILE_PLACEHOLDER.FIRST_NAME}
            value={copyFirstName}
            onChange={handleFirstName}
            className={cx(!copyFirstName && 'p-invalid')}
          />
        </div>
        <div className={styles.editNameInput}>
          <p>{PROFILE_INPUTS_LABELS.LAST_NAME}</p>
          <InputText
            placeholder={PROFILE_PLACEHOLDER.LAST_NAME}
            value={copyLastName}
            onChange={handleLastName}
            className={cx(!copyLastName && 'p-invalid')}
          />
        </div>
      </div>
      <Button mode='primary' children='Save' onClick={handleSubmit} disabled={isDisabled} style={{ width: '117px' }} />
    </div>
  )
}
