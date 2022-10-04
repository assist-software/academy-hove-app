import { useState } from 'react'

import { Dropdown, DropdownChangeParams } from 'primereact/dropdown'

import { Button } from 'common/components/Button/Button'

import { PROFILE_INPUTS_LABELS, PROFILE_PLACEHOLDER } from 'features/profile/constants/profile-constants'
import { ProfileLabel } from 'features/profile/components/profile-label/profile-label'

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
    <ProfileLabel>
      <p>{PROFILE_INPUTS_LABELS.GENDER}</p>
      <Dropdown
        value={copyGender}
        options={citySelectItems}
        onChange={handleChangeGender}
        placeholder={PROFILE_PLACEHOLDER.GENDER}
        required={true}
      />
      <div>
        <Button mode='primary' children='Save' onClick={handleSubmit} style={{ width: '117px' }} />
      </div>
    </ProfileLabel>
  )
}
