// REACT IMPORTS
import React from 'react'
// COMPONENENTS IMPORTS
import { Typography } from 'common/components/Typography/Typography'
import { OrderPopularity } from '../order-popularity/order-popilarity'

export const OrderByAllComponents = () => {
  return (
    <div>
      <Typography typoText={'Order by:'} variant={'bodySmall'} color={'gray-400'} />
      <OrderPopularity />
    </div>
  )
}
