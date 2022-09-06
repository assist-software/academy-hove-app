import { Button } from 'common/components/Button/Button'
import { SecurityFormText } from 'features/security/constants/security-i18'
import { SecurityItemHolder } from '../security-item-holder/security-item-holder'
import { SecurityRecentLogin } from '../security-recent-login/security-recent-login'

import style from './security-form.module.scss'

export const SecurityForm = () => {
  return (
    <div className={style.securityForm}>
      <h1>Login</h1>
      <div>
        <div>
          <p>{SecurityFormText['passwordText']}</p>
          <p>{SecurityFormText['lastUpdated']}</p>
        </div>
        <div>
          <Button children={SecurityFormText['updateText']} mode='tertiary' />
        </div>
      </div>
      <h2>{SecurityFormText['socialTitle']}</h2>
      <SecurityItemHolder
        title='Facebook'
        description={SecurityFormText['notConnectedText']}
        buttonText={SecurityFormText['connectText']}
      />
      <SecurityItemHolder
        title='Google'
        description={SecurityFormText['connectedText']}
        buttonText={SecurityFormText['disconnectText']}
      />
      <h2>{SecurityFormText['recentTitle']}</h2>
      <SecurityRecentLogin
        id='1'
        deviceType='mobile'
        os='Arch BTW'
        browser='Chromium'
        location='Suceava, SV'
        date='2022-09-06T14:01:34.680Z'
      />
      <h2>{SecurityFormText['accountTitle']}</h2>
      <div>
        <p>{SecurityFormText['deactivateAccount']}</p>
        <Button mode='danger' children={SecurityFormText['deactivateText']} onClick={() => {}} />
      </div>
    </div>
  )
}
