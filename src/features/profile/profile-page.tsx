import { ProfileEditAddress } from './components/profile-edit-address/profile-edit-address'
import { ProfileEditEmail } from './components/profile-edit-email/profile-edit-email'
import { ProfileEditGender } from './components/profile-edit-gender/profile-edit-gender'
import { ProfileEditName } from './components/profile-edit-name/profile-edit-name'
import { ProfileEditPhone } from './components/profile-edit-phone/profile-edit-phone'
import { ProfileShowDetails } from './components/profile-show-details/profile-show-details'
import { ProfileEditBirth } from './components/profile-edit-birth/profile-edit-birth'
import { PROFILE_LABELS } from './constants/profile-constants'
import { PROFILE_MOCK_DATA } from './constants/profile-mock-data'

export const ProfilePage = () => {
  return (
    <div>
      <ProfileShowDetails title={PROFILE_LABELS.NAME} data={PROFILE_MOCK_DATA.fullName} child={<ProfileEditName />} />
      <ProfileShowDetails title={PROFILE_LABELS.GENDER} data={PROFILE_MOCK_DATA.gender} child={<ProfileEditGender />} />
      <ProfileShowDetails title={PROFILE_LABELS.DATE} data={PROFILE_MOCK_DATA.birth} child={<ProfileEditBirth />} />
      <ProfileShowDetails title={PROFILE_LABELS.EMAIL} data={PROFILE_MOCK_DATA.email} child={<ProfileEditEmail />} />
      <ProfileShowDetails title={PROFILE_LABELS.PHONE} data={PROFILE_MOCK_DATA.phone} child={<ProfileEditPhone />} />
      <ProfileShowDetails
        title={PROFILE_LABELS.ADDRESS}
        data={PROFILE_MOCK_DATA.address}
        child={<ProfileEditAddress />}
      />
    </div>
  )
}
