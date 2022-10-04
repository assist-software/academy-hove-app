import { Controller, useForm } from 'react-hook-form'

import { InputText } from 'primereact/inputtext'

import { Button } from 'common/components/Button/Button'

import { PROFILE_INPUTS_LABELS, PROFILE_PLACEHOLDER } from 'features/profile/constants/profile-constants'

import styles from './profile-edit-address.module.scss'

export const ProfileEditAddress = () => {
  const defaultValues = {
    country: '',
    city: '',
    address: '',
  }

  const { control, reset, handleSubmit } = useForm({ defaultValues })

  const onSubmit = (data: any) => {
    console.log(data)
    reset()
  }

  return (
    <div className={styles.editAddressContent}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.editAddressForm}>
          <div className={styles.editAddressLabel}>
            <p>{PROFILE_INPUTS_LABELS.COUNTRY}</p>
            <Controller
              name='country'
              control={control}
              render={({ field }) => (
                <InputText id={field.name} placeholder={PROFILE_PLACEHOLDER.COUNTRY} {...field} required={true} />
              )}
            />
          </div>
          <div className={styles.editAddressLabel}>
            <p>{PROFILE_INPUTS_LABELS.CITY}</p>
            <Controller
              name='city'
              control={control}
              render={({ field }) => (
                <InputText id={field.name} placeholder={PROFILE_PLACEHOLDER.CITY} {...field} required={true} />
              )}
            />
          </div>
        </div>
        <div className={styles.editAddressLabel}>
          <p>{PROFILE_INPUTS_LABELS.ADDRESS}</p>
          <Controller
            name='address'
            control={control}
            render={({ field }) => (
              <InputText id={field.name} placeholder={PROFILE_PLACEHOLDER.ADDRESS} {...field} required={true} />
            )}
          />
        </div>
        <Button mode='primary' children='Save' className={styles.editAddressButton} />
      </form>
    </div>
  )
}
