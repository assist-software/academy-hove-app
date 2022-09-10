import { ProfileEditAddress } from './components/profile-edit-address/profile-edit-address'
import { ProfileEditEmail } from './components/profile-edit-email/profile-edit-email'
import { ProfileEditGender } from './components/profile-edit-gender/profile-edit-gender'
import { ProfileEditName } from './components/profile-edit-name/profile-edit-name'
import { ProfileEditPhone } from './components/profile-edit-phone/profile-edit-phone'
import { ProfileShowDetails } from './components/profile-show-details/profile-show-details'
import { ProfileEditBirth } from './components/profile-edit-birth/profile-edit-birth'
import { ProfileLabels } from './constants/profile-constants'
import { PROFILE_MOCK_DATA } from './constants/profile-mock-data'

export const ProfilePage = () => {
  return (
    <div>
      <ProfileShowDetails title={ProfileLabels.name} data={PROFILE_MOCK_DATA.fullName} child={<ProfileEditName />} />
      <ProfileShowDetails title={ProfileLabels.gender} data={PROFILE_MOCK_DATA.gender} child={<ProfileEditGender />} />
      <ProfileShowDetails title={ProfileLabels.date} data={PROFILE_MOCK_DATA.birth} child={<ProfileEditBirth />} />
      <ProfileShowDetails title={ProfileLabels.email} data={PROFILE_MOCK_DATA.email} child={<ProfileEditEmail />} />
      <ProfileShowDetails title={ProfileLabels.phone} data={PROFILE_MOCK_DATA.phone} child={<ProfileEditPhone />} />
      <ProfileShowDetails
        title={ProfileLabels.address}
        data={PROFILE_MOCK_DATA.address}
        child={<ProfileEditAddress />}
      />
    </div>
  )
}
