import { useState } from 'react'

import { ShowroomAllComponents } from 'features/showroom/components/showroom-all-components/showroom-all-components'
import { ShowroomPropertyList } from 'features/showroom/components/showroom-property-list/showroom-property-list'
import { ShowroomViewSwitch } from 'features/showroom/components/showroom-view-switch/showroom-view-switch'
import { SHOWROOM_ACTIVE_VIEW, viewType } from 'features/showroom/constants/showroom-constants'

export const PageAllComponents = () => {
  const [activeView, setActiveView] = useState<viewType>(SHOWROOM_ACTIVE_VIEW.LIST as viewType)
  return (
    <div>
      <ShowroomAllComponents />
      <ShowroomViewSwitch activeView={activeView} switchView={(view) => setActiveView(view)} />
      <ShowroomPropertyList title={'Small'} />
    </div>
  )
}
