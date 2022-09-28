import { ShowRoomFilterLocation } from 'features/showroom/components/showroom-filter/showroom-filter-location/showroom-filter-location'
import { ShowRoomFilterPrice } from 'features/showroom/components/showroom-filter/showroom-filter-price/shoroom-filter-price'

export const ShowRoomFilterAllComponents = () => {
  return (
    <div>
      <p>Filter by:</p>
      <ShowRoomFilterLocation />
      <ShowRoomFilterPrice />
    </div>
  )
}
