import { Dropdown, DropdownChangeParams } from 'primereact/dropdown'
import { Link, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { useState } from 'react'

import { AUTH_PAGES, PAGES_PATHS } from 'common/constants/constants'
import { InputText } from 'primereact/inputtext'
import { useStore } from 'store/store'

import { ReactComponent as FavIcon } from './../../assets/favourites-icon.svg'
import { ReactComponent as AssistLogo } from 'common/assets/logo-assist.svg'
import { ReactComponent as UserIcon } from './../../assets/user-icon.svg'

import style from './top-bar.module.scss'
import { DROPDOWN_PLACEHOLDER } from 'features/top-bar/constants/top-bar-constants'

export const TopBar = () => {
  const [selectCategory, setSelectedCategory] = useState(null)

  const { authStore } = useStore()
  const { userName } = authStore

  const navigate = useNavigate()

  const categories = [{ name: 'Category 1' }, { name: 'Category 2' }, { name: 'Category 3' }]

  const onCityChange = (e: DropdownChangeParams) => {
    setSelectedCategory(e.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const textBox = event.target as HTMLInputElement

    if (event.key === 'Enter') {
      navigate(`${PAGES_PATHS.SEARCH}/${textBox.value}`)
    }
  }

  if (AUTH_PAGES.includes(document.location.pathname)) return <></>

  return (
    <section className={style.topBar}>
      <div className={style.topBarElements}>
        <div className={style.topBarElement}>
          <Link to={PAGES_PATHS.HOME}>
            <AssistLogo />
          </Link>
        </div>
        <div className={style.topBarSearch}>
          <div className='p-inputgroup'>
            <span className={classNames('p-inputgroup-addon', style.topBarInputCategoryHolder)}>
              <Dropdown
                className={style.topBarInputCategory}
                value={selectCategory}
                options={categories}
                onChange={onCityChange}
                optionLabel='name'
                placeholder={DROPDOWN_PLACEHOLDER}
              />
            </span>
            <InputText onKeyDown={handleKeyDown} />
          </div>
        </div>
        <div className={style.topBarElement}>
          <Link to={PAGES_PATHS.FAVOURITES} className={style.topBarLink}>
            <FavIcon className={style.topBarLinkIcon} />
            <span className={style.topBarLinkText}>Favourites</span>
          </Link>
        </div>
        <div className={style.topBarElement}>
          {/**replace the link to PAGES_PATHS.settings when the PR will be merged */}
          <Link to={'/setting/profile'} className={style.topBarLink}>
            <UserIcon className={style.topBarLinkIcon} />
            <span className={style.topBarLinkText}>{userName || 'My account'}</span>
          </Link>
        </div>
      </div>
      <hr className={style.topBarDivider} />
    </section>
  )
}
