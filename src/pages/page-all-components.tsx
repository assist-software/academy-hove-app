import { ShowroomAllComponents } from 'features/showroom/components/showroom-all-components/showroom-all-components'
import { ShowRoomHeader } from 'features/showroom/components/showroom-header/showroom-header'
import { ShowroomPropertyList } from 'features/showroom/components/showroom-property-list/showroom-property-list'

export const PageAllComponents = () => {
  return (
    <div>
      <ShowRoomHeader />
      <ShowroomAllComponents />
      <ShowroomPropertyList title={'Small'} />
    </div>
  )
}
