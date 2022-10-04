import { useState } from 'react'

import { InputTextarea } from 'primereact/inputtextarea'

import { Button } from 'common/components/Button/Button'

import { PROPRETY_BUTTON, PROPRETY_LABELS, PROPRETY_PLACEHOLDER } from 'features/results/constants/proprety-constants'

import style from './results-messages.module.scss'

export const ResultsMessages = () => {
  const [messages, setMessage] = useState('')

  const handleSendMessage = () => {
    console.log('Send!')
  }

  return (
    <div className={style.messages}>
      <h2>{PROPRETY_LABELS.MESSAGES_LABELS}</h2>
      <InputTextarea
        value={messages}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        cols={30}
        autoResize
        placeholder={PROPRETY_PLACEHOLDER.TEXTAREA}
        className={style.messagesTextarea}
      />
      <div className={style.messagesButton}>
        {messages ? (
          <Button
            mode='primary'
            children={PROPRETY_BUTTON.SEND}
            className={style.messagesButtonStyle}
            onClick={handleSendMessage}
          />
        ) : (
          <Button mode='secondary' children={PROPRETY_BUTTON.SEND} className={style.messagesButtonDisable} />
        )}
      </div>
    </div>
  )
}
