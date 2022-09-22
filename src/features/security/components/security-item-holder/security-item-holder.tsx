import { Button } from 'common/components/Button/Button'

import style from './security-item-holder.module.scss'

interface Props {
  icon?: any
  title: string
  description?: string
  buttonText?: string
  handleButtonClick?: () => void
}

export const SecurityItemHolder = ({ title, description, buttonText, handleButtonClick, icon }: Props) => {
  return (
    <div className={style.securityItemHolder}>
      {!!icon && <div className={style.securityItemHolderIcon}>{icon}</div>}
      <div className={style.securityItemHolderInfo}>
        {!!title && <div>{title}</div>}
        {!!description && <div>{description}</div>}
      </div>
      <div className={style.securityItemHolderButton}>
        {!!buttonText && <Button mode={'tertiary'} children={buttonText} onClick={handleButtonClick} />}
      </div>
    </div>
  )
}
