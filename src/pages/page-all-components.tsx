import { ShowroomAllComponents } from 'features/showroom/components/showroom-all-components/showroom-all-components'
import { ShowroomPropertyList } from 'features/showroom/components/showroom-property-list/showroom-property-list'

export const PageAllComponents = () => {
  return (
    <div>
      <ShowroomAllComponents />
      <ShowroomPropertyList title={'Small'} />
    </div>
  )
}
