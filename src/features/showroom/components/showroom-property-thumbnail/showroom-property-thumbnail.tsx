import { FC } from 'react'
import classNames from 'classnames'

import style from './showroom-property-thumbnail.module.scss'
import { AltImg, ButtonLables } from 'common/constants/constants'
import { UtilService } from 'common/services/util-service'
import { IPropertyLite } from 'features/showroom/models/showroom-models'
import { Button } from 'common/components/Button/Button'
import favoriteInactive from 'common/assets/favoriteInactive.svg'
import favoriteActive from 'common/assets/favoriteActive.svg'
import thumbnailImg from 'common/assets/thnumbnail.jpg'
import { ShowroomUtilService } from 'features/showroom/services/showroom-util-service'

interface IShowroomPropertyThumbnail {
  thumbnail: IPropertyLite
  type: string
  role: string
}

export const ShowroomPropertyThumbnail: FC<IShowroomPropertyThumbnail> = ({ thumbnail, type, role }) => {
  return (
    <div className={style.thumbnailWrapper}>
      <div
        className={classNames(
          style.thumbnaiType,
          style[`thumbnaiType${UtilService.capitalizeFirstLetter(type)}`],
          type === 'list' && style[`customBorder${UtilService.capitalizeFirstLetter(role)}`],
        )}>
        <img
          className={classNames(style.imageList, style[`imageList${UtilService.capitalizeFirstLetter(type)}`])}
          src={thumbnailImg}
          alt={AltImg.property}
        />
        <div className={style.favoriteWrapper} onClick={() => ShowroomUtilService.handleFavorite(thumbnail.id)}>
          <img src={thumbnail.favorite ? favoriteActive : favoriteInactive} alt={AltImg.favorite} />
        </div>
        <div className={classNames(style.text, style[`text${UtilService.capitalizeFirstLetter(type)}`])}>
          <h2 className={classNames(style.title, style[`title${UtilService.capitalizeFirstLetter(type)}`])}>
            {thumbnail.property}
          </h2>
          <div
            className={classNames(style.locationText, style[`locationText${UtilService.capitalizeFirstLetter(type)}`])}>
            <p>{thumbnail.location}</p>
          </div>
          {type === 'list' && <p className={style.descriptionText}>{thumbnail.about}</p>}
          <h2>{thumbnail.price}</h2>
        </div>
      </div>
      {role !== 'user' && (
        <div
          className={classNames(
            style.actions,
            style[`actions${UtilService.capitalizeFirstLetter(type)}`],
            type === 'list' && style[`customBorderActions${UtilService.capitalizeFirstLetter(role)}`],
          )}>
          {thumbnail.status === 'pending' && role !== 'client' && (
            <div className={style.buttonStyle} onClick={() => ShowroomUtilService.handleApprove(thumbnail.id)}>
              <Button modifier='primary'>{ButtonLables.approve}</Button>
            </div>
          )}
          <div className={style.buttonStyle} onClick={() => ShowroomUtilService.handleDeleteProprety(thumbnail.id)}>
            {thumbnail.status === 'pending' && role !== 'client' ? (
              <Button modifier='custom'>
                <p className={style.editButtonDelete}>{ButtonLables.delete}</p>
              </Button>
            ) : (
              <Button modifier='delete'>{ButtonLables.delete}</Button>
            )}
          </div>
          <div className={style.buttonStyle} onClick={() => ShowroomUtilService.handleEdit(thumbnail.id)}>
            <Button modifier='custom'>
              <p className={style.editButton}>{ButtonLables.edit}</p>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
