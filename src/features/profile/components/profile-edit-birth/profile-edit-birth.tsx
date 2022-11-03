import { useState } from 'react'

import dayjs from 'dayjs'
import { Calendar, CalendarChangeParams } from 'primereact/calendar'

import { Button } from 'common/components/Button/Button'

import { PROFILE_INPUTS_LABELS, PROFILE_PLACEHOLDER } from 'features/profile/constants/profile-constants'
import { ProfileLabel } from 'features/profile/components/profile-label/profile-label'

export const ProfileEditBirth = () => {
  const [copyDate, setCopyDate] = useState<any>('06/01/1999')

  const handleChangeDate = (e: CalendarChangeParams) => {
    const date = e.value?.toString()
    setCopyDate(dayjs(date).format('DD/MM/YYYY'))
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
