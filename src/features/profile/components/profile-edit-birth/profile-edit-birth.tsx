import { useState } from 'react'

import commonStyle from '../../style/profile-style.module.scss'
import { Button } from 'common/components/Button/Button'
import { Calendar } from 'primereact/calendar'
import { ProfileInputLabels, ProfilePlaceholder } from 'features/profile/constants/profile-constants'

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
    <div className={commonStyle.profileContent}>
      <div className={commonStyle.profileLabel}>
        <p>{ProfileInputLabels.birth}</p>
        <Calendar
          value={copyDate}
          onChange={handleChangeDate}
          dateFormat='dd/mm/yy'
          showIcon={true}
          placeholder={copyDate ? copyDate : ProfilePlaceholder.birth}
        />
      </div>
      <Button mode='primary' children='Save' onClick={handleSubmit} className={commonStyle.buttonStyle} />
    </div>
  )
}
