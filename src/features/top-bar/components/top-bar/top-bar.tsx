import { Link } from 'react-router-dom'

import { AUTH_PAGES, PAGES_PATHS } from 'common/constants/constants'
import { useStore } from 'store/store'

import { SearchBar } from 'features/showroom/components/showroom-search-bar/showroom-search-bar'

import { ReactComponent as AssistLogo } from 'common/assets/logo-assist.svg'
import { ReactComponent as FavIcon } from '../../assets/favourites-icon.svg'
import { ReactComponent as UserIcon } from '../../assets/user-icon.svg'

import style from './top-bar.module.scss'

export const TopBar = () => {
  const { authStore } = useStore()
  const { userName } = authStore

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
          <SearchBar />
        </div>
        <div className={style.topBarElement}>
          <Link to={PAGES_PATHS.FAVORITES} className={style.topBarLink}>
            <FavIcon className={style.topBarLinkIcon} />
            <span className={style.topBarLinkText}>Favorites</span>
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
