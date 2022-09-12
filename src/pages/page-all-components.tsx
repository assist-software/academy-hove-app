import { ShowroomAllComponents } from 'features/showroom/components/showroom-all-components/showroom-all-components'
import { FilterAllComponents } from 'features/filter/components/filter-all-components/filter-all-components'
import { OrderByAllComponents } from 'features/order-by/components/order-by-all-components/order-by-all-components'
export const PageAllComponents = () => {
  return (
    <div>
      <FilterAllComponents />
      <OrderByAllComponents />
      <ShowroomAllComponents />
    </div>
  )
}
