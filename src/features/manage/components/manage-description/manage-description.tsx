import { FC } from 'react'

import { Image } from 'primereact/image'

import { Button } from 'common/components/Button/Button'

import { PROPRETY_ALT_IMG, PROPRETY_BUTTON } from 'features/manage/constants/manage-constants'
import avatar from 'features/manage/assets/avatar.svg'
import favorite from 'features/manage/assets/favorite.svg'
import share from 'features/manage/assets/share.svg'

import style from './manage-description.module.scss'

interface IProps {
  propertyDetails: {
    title: string
    price: string
    description: string
    name: string
    data: string
    rate: string
    response: string
  }
}

export const ManageDescription: FC<IProps> = ({ propertyDetails }) => {
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
      <div className={style.manageDescription}>
        <div>
          <h2>{propertyDetails.title}</h2>
          <h3>{propertyDetails.price}</h3>
        </div>
        <div className={style.manageDescriptionShareIcon} onClick={handleShare}>
          <Image src={share} alt={PROPRETY_ALT_IMG.SHARE} />
          <p className={style.manageDescriptionShareColor}>{PROPRETY_BUTTON.SHARE}</p>
        </div>
      </div>
      <div className={style.manageDescription}>
        <div className={style.manageDescriptionDetails}>
          <h2>{PROPRETY_BUTTON.DESCRIPTION}</h2>
          <p className={style.manageDescriptionText}>{propertyDetails.description}</p>
        </div>
        <div>
          <div className={style.manageDescriptionUser}>
            <Image src={avatar} alt={PROPRETY_ALT_IMG.AVATAR} className={style.manageDescriptionAvatar} />
            <div className={style.manageDescriptionTextColor}>
              <h2 className={style.manageDescriptionTitleColor}>{propertyDetails.name}</h2>
              <p>{propertyDetails.data}</p>
              <p>{propertyDetails.rate}</p>
              <p>{propertyDetails.response}</p>
            </div>
          </div>
          <div className={style.manageDescriptionButton}>
            <Button
              children={PROPRETY_BUTTON.PURCHASE}
              mode='primary'
              className={style.manageDescriptionPurchaseButton}
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
