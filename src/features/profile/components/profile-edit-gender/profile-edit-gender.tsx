import commonStyle from '../../style/profile-style.module.scss'

import { Dropdown, DropdownChangeParams } from 'primereact/dropdown'
import { useState } from 'react'
import { Button } from 'common/components/Button/Button'
import { ProfileInputLabels, ProfilePlaceholder } from 'features/profile/constants/profile-constants'

export const ProfileEditGender = () => {
  const [copyGender, setCopyGender] = useState<string>('Male')
  const citySelectItems = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ]

  const handleChangeGender = (e: DropdownChangeParams) => {
    setCopyGender(e.target.value)
  }

  const handleSubmit = () => {
    console.log('Send to backend')
  }

  return (
    <div className={commonStyle.profileContent}>
      <div className={commonStyle.profileLabel}>
        <p>{ProfileInputLabels.gender}</p>
        <Dropdown
          value={copyGender}
          options={citySelectItems}
          onChange={handleChangeGender}
          placeholder={ProfilePlaceholder.gender}
          required={true}
        />
      </div>
      <Button mode='primary' children='Save' onClick={handleSubmit} className={commonStyle.buttonStyle} />
    </div>
  )
}
