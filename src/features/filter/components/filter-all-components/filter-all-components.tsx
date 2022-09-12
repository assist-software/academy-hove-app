//REACT IMPORTS
import React from 'react'
//COMPONENTS IMPORTS
import { FilterLocation } from '../filter-location/filter-location'
import { FilterPrice } from '../filter-price/filter-price'
import { Typography } from 'common/components/Typography/Typography'

export const FilterAllComponents = () => {
  return (
    <div>
      <Typography typoText={'Filter by:'} variant={'bodySmall'} color={'gray-400'} />
      <FilterLocation />
      <FilterPrice />
    </div>
  )
}
