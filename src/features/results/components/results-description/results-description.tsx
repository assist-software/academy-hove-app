import { Button } from 'common/components/Button/Button'

import { PROPRETY_DETAILS } from 'features/results/constants/results-mockData'
import { PROPRETY_ALT_IMG, PROPRETY_BUTTON } from 'features/results/constants/results-constants'
import avatar from 'features/results/assets/avatar.svg'
import favorite from 'features/results/assets/favorite.svg'
import share from 'features/results/assets/share.svg'

import style from './results-description.module.scss'

export const ResultsDescription = () => {
  const handleFavorite = () => {
    console.log('Favorite')
  }
  const handlePurchase = () => {
    console.log('Purchase')
  }
  const handleShare = () => {
    console.log('Share')
  }

  return (
    <div>
      <div className={style.details}>
        <div>
          <h2>{PROPRETY_DETAILS.title}</h2>
          <h3>{PROPRETY_DETAILS.price}</h3>
        </div>
        <div className={style.shareIcon} onClick={handleShare}>
          <img src={share} alt={PROPRETY_ALT_IMG.SHARE} />
          <p className={style.shareColor}>{PROPRETY_BUTTON.SHARE}</p>
        </div>
      </div>
      <div className={style.details}>
        <div className={style.detailsDescription}>
          <h2>{PROPRETY_BUTTON.DESCRIPTION}</h2>
          <p className={style.detailsText}>{PROPRETY_DETAILS.description}</p>
        </div>
        <div>
          <div className={style.detailsUser}>
            <img src={avatar} alt={PROPRETY_ALT_IMG.AVATAR} className={style.detailsAvatar} />
            <div className={style.textColor}>
              <h2 className={style.titleColor}>{PROPRETY_DETAILS.name}</h2>
              <p>{PROPRETY_DETAILS.data}</p>
              <p>{PROPRETY_DETAILS.rate}</p>
              <p>{PROPRETY_DETAILS.response}</p>
            </div>
          </div>
          <div className={style.detailsButton}>
            <Button
              children={PROPRETY_BUTTON.PURCHASE}
              mode='primary'
              className={style.purchaseButton}
              onClick={handlePurchase}
            />
            <Button
              mode='secondary'
              icon={<img alt={PROPRETY_ALT_IMG.FAVORITE} src={favorite} />}
              onClick={handleFavorite}
              children=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}
