import { useState } from 'react'

import { Calendar } from 'primereact/calendar'

import { Button } from 'common/components/Button/Button'

import { PROFILE_INPUTS_LABELS, PROFILE_PLACEHOLDER } from 'features/profile/constants/profile-constants'
import { ProfileLabel } from 'features/profile/components/profile-label/profile-label'

export const ProfileEditBirth = () => {
  const [copyDate, setCopyDate] = useState<any>('06/01/1999')

  const handleChangeDate = (e: any) => {
    const date = e.value
    const yyyy = date.getFullYear()
    const mm = ('0' + (date.getMonth() + 1)).slice(-2)
    const dd = ('0' + date.getDate()).slice(-2)
    setCopyDate(`${dd}/${mm}/${yyyy}`)
  }

  const handleSubmit = () => {
    console.log('Send to backend')
  }

  return (
    <ProfileLabel>
      <p>{PROFILE_INPUTS_LABELS.BIRTH}</p>
      <Calendar
        value={copyDate}
        onChange={handleChangeDate}
        dateFormat='dd/mm/yy'
        showIcon={true}
        placeholder={copyDate ? copyDate : PROFILE_PLACEHOLDER.BIRTH}
      />

      <Button mode='primary' children='Save' onClick={handleSubmit} style={{ width: '117px' }} />
    </ProfileLabel>
  )
}
