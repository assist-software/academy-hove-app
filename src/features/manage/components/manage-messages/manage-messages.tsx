import { useState } from 'react'

import { InputTextarea } from 'primereact/inputtextarea'

import { Button } from 'common/components/Button/Button'

import { PROPRETY_BUTTON, PROPRETY_LABELS, PROPRETY_PLACEHOLDER } from 'features/manage/constants/manage-constants'

import style from './manage-messages.module.scss'

export const ManageMessages = () => {
  const [messages, setMessage] = useState('')

  const handleSendMessage = () => {
    console.log('Send!')
  }

  return (
    <div className={style.manageMessages}>
      <h2>{PROPRETY_LABELS.MESSAGES_LABELS}</h2>
      <InputTextarea
        value={messages}
        onChange={(e) => setMessage(e.target.value)}
        autoResize
        placeholder={PROPRETY_PLACEHOLDER.TEXTAREA}
        className={style.manageMessagesTextarea}
      />
      <div className={style.manageMessagesButton}>
        {messages ? (
          <Button
            mode='primary'
            children={PROPRETY_BUTTON.SEND}
            className={style.manageMessagesButtonStyle}
            onClick={handleSendMessage}
          />
        ) : (
          <Button mode='secondary' children={PROPRETY_BUTTON.SEND} className={style.manageMessagesButtonDisable} />
        )}
      </div>
    </div>
  )
}
