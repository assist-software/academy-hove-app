import { ProfileEditAddress } from 'features/profile/components/profile-edit-address/profile-edit-address'
import { ProfileEditBirth } from 'features/profile/components/profile-edit-birth/profile-edit-birth'
import { ProfileEditEmail } from 'features/profile/components/profile-edit-email/profile-edit-email'
import { ProfileEditGender } from 'features/profile/components/profile-edit-gender/profile-edit-gender'
import { ProfileEditName } from 'features/profile/components/profile-edit-name/profile-edit-name'
import { ProfileEditPhone } from 'features/profile/components/profile-edit-phone/profile-edit-phone'
import { ProfileShowDetails } from 'features/profile/components/profile-show-details/profile-show-details'
import { PROFILE_LABELS } from 'features/profile/constants/profile-constants'
import { PROFILE_MOCK_DATA } from 'features/profile/constants/profile-mock-data'

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
