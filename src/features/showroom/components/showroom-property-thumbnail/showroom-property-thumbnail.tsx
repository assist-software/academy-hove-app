import { FC } from 'react'
import classnames from 'classnames/bind'
import { Button } from 'primereact/button'

import { ButtonLables } from 'common/constants/constants'
import { UtilService } from 'common/services/util-service'

import { ShowroomUtilService } from 'features/showroom/services/showroom-util-service'
import { AltImgShowroom } from 'features/showroom/constants/showroom-constants'
import { IPropertyLite } from 'features/showroom/models/showroom-models'
import favoriteInactive from 'features/showroom/assets/favoriteInactive.svg'
import favoriteActive from 'features/showroom/assets/favoriteActive.svg'
import thumbnailImg from 'features/showroom/assets/thumbnail.jpg'

import style from './showroom-property-thumbnail.module.scss'

interface Props {
  thumbnail: IPropertyLite
  type: 'list' | string
  role: string
}

export const ShowroomPropertyThumbnail: FC<Props> = ({ thumbnail, type, role }) => {
  const cx = classnames.bind(style)
  const borderActionsStyle = style[`thumbnailBorderActions${UtilService.capitalizeFirstLetter(role)}`]
  const locationStyle = style[`thumbnailLocation${UtilService.capitalizeFirstLetter(type)}`]
  const actionsStyle = style[`thumbnailActions${UtilService.capitalizeFirstLetter(type)}`]
  const borderStyle = type === 'list' && style[`thumbnailBorder${UtilService.capitalizeFirstLetter(role)}`]
  const titleStyle = style[`thumbnailTitle${UtilService.capitalizeFirstLetter(type)}`]
  const imageStyle = style[`thumbnailImage${UtilService.capitalizeFirstLetter(type)}`]
  const textStyle = style[`thumbnailText${UtilService.capitalizeFirstLetter(type)}`]
  const typeStyle = style[`thumbnaiType${UtilService.capitalizeFirstLetter(type)}`]
  return (
    <div className={style.thumbnail}>
      <div className={cx(style.thumbnaiType, typeStyle, borderStyle)}>
        <img className={cx(style.thumbnailImage, imageStyle)} src={thumbnailImg} alt={AltImgShowroom.property} />
        <div className={style.thumbnailFavorite} onClick={() => ShowroomUtilService.handleFavorite(thumbnail.id)}>
          <img src={thumbnail.favorite ? favoriteActive : favoriteInactive} alt={AltImgShowroom.favorite} />
        </div>
        <div className={cx(style.thumbnailText, textStyle)}>
          <h2 className={cx(style.thumbnailTitle, titleStyle)}>{thumbnail.property}</h2>
          <div className={cx(style.thumbnailLocation, locationStyle)}>
            <p>{thumbnail.location}</p>
          </div>
          {type === 'list' && <p className={style.thumbnailDescription}>{thumbnail.about}</p>}
          <h2>{thumbnail.price}</h2>
        </div>
      </div>
      {role !== 'user' && (
        <div className={cx(style.thumbnailActions, actionsStyle, type === 'list' && borderActionsStyle)}>
          {thumbnail.status === 'pending' && role !== 'client' && (
            <Button
              label={ButtonLables.approve}
              onClick={() => ShowroomUtilService.handleApprove(thumbnail.id)}
              className='smallButton'
            />
          )}
          <div onClick={() => ShowroomUtilService.handleDeleteProprety(thumbnail.id)}>
            {thumbnail.status === 'pending' && role !== 'client' ? (
              <Button className='p-button-danger p-button-text smallButton' label={ButtonLables.delete} />
            ) : (
              <Button className='p-button-danger smallButton' label={ButtonLables.delete} />
            )}
          </div>
          <Button
            className='p-button-info p-button-text smallButton'
            label={ButtonLables.edit}
            onClick={() => ShowroomUtilService.handleEdit(thumbnail.id)}
          />
        </div>
      )}
    </div>
  )
}
