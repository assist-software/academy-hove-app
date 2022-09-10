import style from './profile-edit-address.module.scss'
import commonStyle from '../../style/profile-style.module.scss'
import { ProfileInputLabels, ProfilePlaceholder } from 'features/profile/constants/profile-constants'
import { ChangeEvent, useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'common/components/Button/Button'

export const ProfileEditAddress = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [copyAddress, setCopyAddress] = useState<string>('')
  const [copyCountry, setCopyCountry] = useState<string>('')
  const [copyCity, setCopyCity] = useState<string>('')

  useEffect(() => {
    if (copyAddress && copyCountry && copyCity) {
      setIsDisabled(false)
    } else {
      return setIsDisabled(true)
    }
  }, [copyAddress, copyCountry, copyCity])

  const handleChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCopyCity(e.target.value)
  }

  const handleChangeCountry = (e: ChangeEvent<HTMLInputElement>) => {
    setCopyCountry(e.target.value)
  }

  const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setCopyAddress(e.target.value)
  }

  const handleSubmit = () => {
    console.log('Send to backend')
  }

  return (
    <div className={commonStyle.profileContent}>
      <div className={style.editAddressForm}>
        <div className={commonStyle.profileLabel}>
          <p>{ProfileInputLabels.country}</p>
          <InputText placeholder={ProfilePlaceholder.country} value={copyCountry} onChange={handleChangeCountry} />
        </div>
        <div className={commonStyle.profileLabel}>
          <p>{ProfileInputLabels.city}</p>
          <InputText placeholder={ProfilePlaceholder.city} value={copyCity} onChange={handleChangeCity} />
        </div>
      </div>
      <div className={commonStyle.profileLabel}>
        <p>{ProfileInputLabels.address}</p>
        <InputText placeholder={ProfilePlaceholder.address} value={copyAddress} onChange={handleChangeAddress} />
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
