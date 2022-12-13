import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'

import logoIcon from 'common/assets/logo-assist.svg'
import favoriteIcon from 'common/assets/favorite.svg'
import accountIcon from 'common/assets/account.svg'
import chevronDownIcon from 'common/assets/chevron-down.svg'
import { ALT_IMG, HEADER_LABELS } from 'common/constants/constants'
import { DROPDOWN_HEADER } from 'common/constants/mockdata'

import styles from './header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <img src={logoIcon} alt={ALT_IMG.LOGO} />
        <div>
          <Dropdown
            options={DROPDOWN_HEADER}
            placeholder='Category'
            style={{
              borderRadius: 12,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderRight: 0,
              height: 48,
              width: 178,
            }}
          />
          <span className='p-input-icon-right'>
            <i className='pi pi-search' />
            <InputText
              placeholder='Search'
              style={{ borderRadius: 12, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, height: 48, width: 533 }}
            />
          </span>
        </div>
        <div className={styles.headerNavigation}>
          <img src={favoriteIcon} alt={ALT_IMG.FAVORITE} />
          <p>{HEADER_LABELS.FAVORITE}</p>
        </div>
        <div className={styles.headerNavigation}>
          <img src={accountIcon} alt={ALT_IMG.ACCOUNT} />

          <p>{HEADER_LABELS.ACCOUNT}</p>
          <img src={chevronDownIcon} alt={ALT_IMG.ARROW} />
        </div>
      </div>
    </div>
  )
}
