import { useState } from 'react'

import { ShowroomAllComponents } from 'features/showroom/components/showroom-all-components/showroom-all-components'
import { ShowroomPropertyList } from 'features/showroom/components/showroom-property-list/showroom-property-list'
import { ShowroomViewSwitch } from 'features/showroom/components/showroom-view-switch/showroom-view-switch'
import { SHOWROOM_ACTIVE_VIEW } from 'features/showroom/constants/showroom-constants'
import { viewType } from 'features/showroom/models/showroom-models'
import { ManageMessages } from 'features/manage/components/manage-messages/manage-messages'

export const PageAllComponents = () => {
  const [activeView, setActiveView] = useState<viewType>(SHOWROOM_ACTIVE_VIEW.LIST as viewType)

  return (
    <div>
      <ShowroomAllComponents />
      <ShowroomViewSwitch activeView={activeView} switchView={(view) => setActiveView(view)} />
      <ShowroomPropertyList title={'Small'} />
      <ManageMessages />
    </div>
  )
}
