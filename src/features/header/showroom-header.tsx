import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import logoAssist from 'common/assets/logo-assist.svg'
import styles from 'features/header/styles/showroom-header.module.scss'
import { Button } from 'primereact/button'
import personIcon from 'features/header/assets/personHeader.png'
import { useNavigate } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constants'
import { useAppDispatch, useAppSelector } from 'state'
import { HANDLE_SET_USER } from 'features/auth/state/reducers/auth-slice'
import { authLogout } from 'features/auth/services/auth-api-services'

export const ShowroomHeader = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  const [selectedMyAcc, setselectedMyAcc] = useState<any>(null)
  const navigate = useNavigate()

  const onCategoryyChange = (e: { value: any }) => {
    setSelectedCategory(e.value)
  }
  const onMyAccChange = (e: { value: any }) => {
    setselectedMyAcc(e.value)
    if (e.value === 'Logout') {
      authLogout()
      dispatch(HANDLE_SET_USER({ access_token: '', display_name: '', email: '', photoUrl: '', isLoggedIn: false }))
      localStorage.clear()
    }
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
  {
    //  <p onClick={handleChangeValue}>{exemple}</p>
    //   <div>Welcome back, {user?.email} !</div>
    //   <p
    //   onClick={() => {
    //     authLogout()
    //     dispatch(HANDLE_SET_USER({ access_token: '', display_name: '', email: '', photoUrl: '', isLoggedIn: false }))
    //       localStorage.clear()
    //     }}
    //     style={{ cursor: 'pointer' }}>
    //     Logout
    //   </p>
  }

  const dispatch = useAppDispatch()
  const { exemple } = useAppSelector((state) => state.exemple)
  const { user } = useAppSelector((state) => state.auth)

  return (
    <div className={styles.headerContainer}>
      <div style={{ marginRight: '5%' }}>
        <img src={logoAssist} alt='logo' onClick={() => navigate(PAGES_PATHS.HOME)} style={{ cursor: 'pointer' }} />
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
        <Button label='Favorites' className='p-button-secondary p-button-text' icon='pi pi-heart' />
      </div>

      <div className={styles.headerDropdownAndIcon}>
        <img src={personIcon} alt='person' />
        <Dropdown
          className={styles.headerProfileDropdown}
          value={selectedMyAcc}
          options={myAccount}
          onChange={onMyAccChange}
          optionLabel='name'
          placeholder={user?.email}
        />
      </div>
    </div>
  )
}
