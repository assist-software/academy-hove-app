import { useNavigate } from 'react-router-dom'

import classnames from 'classnames/bind'
import { Button } from 'primereact/button'

import { BUTTON_LABELS } from 'common/constants/constants'
import { UtilService } from 'common/services/util-service'

import favoriteActive from 'features/showroom/assets/favoriteActive.svg'
import favoriteInactive from 'features/showroom/assets/favoriteInactive.svg'
import { ALT_IMG_SHOWROOM } from 'features/showroom/constants/showroom-constants'
import { IPropertyLite } from 'features/showroom/models/showroom-models'
import { ShowroomUtilService } from 'features/showroom/services/showroom-util-service'

import style from './showroom-property-thumbnail.module.scss'

interface Props {
  thumbnail: IPropertyLite
  type: 'list' | string
  role: string
}

export const ShowroomPropertyThumbnail = ({ thumbnail, type, role }: Props) => {
  const cx = classnames.bind(style)
  const navigate = useNavigate()
  const randomNumber = Math.floor(Math.random() * 8 + 0)

  const borderActionsStyle = style[`thumbnailBorderActions${UtilService.capitalizeFirstLetter(role)}`]
  const locationStyle = style[`thumbnailLocation${UtilService.capitalizeFirstLetter(type)}`]
  const actionsStyle = style[`thumbnailActions${UtilService.capitalizeFirstLetter(type)}`]
  const borderStyle = type === 'list' && style[`thumbnailBorder${UtilService.capitalizeFirstLetter(role)}`]
  const titleStyle = style[`thumbnailTitle${UtilService.capitalizeFirstLetter(type)}`]
  const imageStyle = style[`thumbnailImage${UtilService.capitalizeFirstLetter(type)}`]
  const textStyle = style[`thumbnailText${UtilService.capitalizeFirstLetter(type)}`]
  const typeStyle = style[`thumbnaiType${UtilService.capitalizeFirstLetter(type)}`]

  //When login modal is done, change the function to open modal
  const handleFavorite = () => {
    if (role !== 'unauth') ShowroomUtilService.handleFavorite(thumbnail.id)
    navigate('/login')
  }

  return (
    <div className={style.thumbnail}>
      <div className={cx(style.thumbnaiType, typeStyle, borderStyle)}>
        <img
          className={cx(style.thumbnailImage, imageStyle)}
          src={thumbnail.image[randomNumber]}
          alt={ALT_IMG_SHOWROOM.PROPERTY}
        />
        <div className={style.thumbnailFavorite} onClick={handleFavorite}>
          <img
            src={thumbnail.favorite && role !== 'unauth' ? favoriteActive : favoriteInactive}
            alt={ALT_IMG_SHOWROOM.FAVORITE}
          />
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
      {role !== 'user' && role !== 'unauth' && (
        <div className={cx(style.thumbnailActions, actionsStyle, type === 'list' && borderActionsStyle)}>
          {thumbnail.status === 'pending' && role !== 'client' && (
            <Button
              label={BUTTON_LABELS.APPROVE}
              onClick={() => ShowroomUtilService.handleApprove(thumbnail.id)}
              className='smallButton'
            />
          )}
          <div onClick={() => ShowroomUtilService.handleDeleteProprety(thumbnail.id)}>
            {thumbnail.status === 'pending' && role !== 'client' ? (
              <Button className='p-button-danger p-button-text smallButton' label={BUTTON_LABELS.DELETE} />
            ) : (
              <Button className='p-button-danger smallButton' label={BUTTON_LABELS.DELETE} />
            )}
          </div>
          <Button
            className='p-button-info p-button-text smallButton'
            label={BUTTON_LABELS.EDIT}
            onClick={() => ShowroomUtilService.handleEdit(thumbnail.id)}
          />
        </div>
      )}
    </div>
  )
}
