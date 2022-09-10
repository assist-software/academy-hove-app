import { FC, ReactNode, useState } from 'react'
import style from './profile-show-details.module.scss'

interface IProps {
  title: string
  data: string
  child: ReactNode
}

export const ProfileShowDetails: FC<IProps> = ({ child, title, data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className={style.details}>
      <div className={style.test}>
        <div className={style.detailsContent}>
          <p className={style.detailsTitle}>{title}</p>
          {!isOpen && <p className={style.detailsData}>{data}</p>}
        </div>
        <p className={style.detailsEdit} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Cancel' : 'Edit'}
        </p>
      </div>
      {isOpen && <div className={style.detailsChild}>{child}</div>}
    </div>
  )
}
