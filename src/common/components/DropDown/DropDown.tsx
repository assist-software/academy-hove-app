import React from 'react'
import { Dropdown } from 'primereact/dropdown'

export const DropDown = ({ ...props }) => {
  return <Dropdown options={props.optionsData} placeholder={props.placeholder} />
}
