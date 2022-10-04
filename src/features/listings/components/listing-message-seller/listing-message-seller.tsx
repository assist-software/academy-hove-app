import { Button } from 'primereact/button'
import { InputTextarea } from 'primereact/inputtextarea'
import { useState } from 'react'
import styles from 'features/listings/styles/listing.module.scss'

export const ListingMessageSeller = () => {
  const [value2, setValue2] = useState('')

  return (
    <>
      <div>
        <div>
          <div>Message the seller</div>
          <InputTextarea
            className={styles.messageTextArea}
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            rows={5}
            cols={30}
            autoResize
            placeholder='Send Message'
          />
        </div>
        <div className={styles.spacingButton}>
          <Button label='Send' className='p-button-outlined' disabled={value2.length === 0} />
        </div>
      </div>
    </>
  )
}
