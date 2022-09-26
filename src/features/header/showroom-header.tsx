import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import heartLogo from 'common/assets/heart.svg'
import logoAssist from 'common/assets/logo-assist.svg'
// import personLogo from 'features/header/assets/person.svg'
import styles from 'features/header/styles/showroom-header.module.scss'

export const ShowroomHeader = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  const [selectedMyAcc, setselectedMyAcc] = useState<any>(null)

  const onCategoryyChange = (e: { value: any }) => {
    setSelectedCategory(e.value)
  }
  const onMyAccChange = (e: { value: any }) => {
    setselectedMyAcc(e.value)
  }

  const [value3, setValue3] = useState<string>('')
  const category = [{ name: 'Latest' }, { name: 'Big Houses' }, { name: 'Small Houses' }]
  const myAccount = [
    { name: 'Profile' },
    { name: 'Login & security' },
    { name: 'Notification' },
    { name: 'Messages' },
    { name: 'Logout' },
  ]

  return (
    <div className={styles.headerContainer}>
      <div style={{ marginRight: '5%' }}>
        <img src={logoAssist} alt='logo' />
      </div>
      <Dropdown
        className={styles.pDropdown}
        value={selectedCategory}
        options={category}
        onChange={onCategoryyChange}
        optionLabel='name'
        placeholder='Category'
      />
      <div>
        <span className='p-input-icon-right'>
          <i className='pi pi-search' />
          <InputText
            value={value3}
            onChange={(e: any) => setValue3(e.target.value)}
            placeholder='Search'
            className={styles.inputLeng}
          />
        </span>
      </div>
      <div style={{ display: 'flex', marginLeft: '5%' }}>
        <img src={heartLogo} alt='heart' />
        <p>Favourites</p>
      </div>

      <div style={{ marginLeft: '5%' }}>
        <Dropdown
          className={styles.pDropdown}
          value={selectedMyAcc}
          options={myAccount}
          onChange={onMyAccChange}
          optionLabel='name'
          placeholder='My Profile'
        />
      </div>
    </div>
  )
}
