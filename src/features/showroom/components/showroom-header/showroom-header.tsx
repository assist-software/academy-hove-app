import { ShowRoomFilterAllComponents } from 'features/showroom/components/showroom-filter/showroom-filter-all-components/showroom-filter-all-components'
import { ShowRoomOrderByAllComponents } from 'features/showroom/components/showroom-order/showroom-order-all-components/showroom-order-all-components'
export const ShowRoomHeader = () => {
  return (
    <div>
      <ShowRoomFilterAllComponents />
      <ShowRoomOrderByAllComponents />
    </div>
  )
}
