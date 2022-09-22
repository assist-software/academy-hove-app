import { Dropdown, DropdownChangeParams } from 'primereact/dropdown'
import { useNavigate } from 'react-router-dom'
import { InputText } from 'primereact/inputtext'
import classNames from 'classnames'
import { useState } from 'react'

import { PAGES_PATHS } from 'common/constants/constants'

import { DROPDOWN_PLACEHOLDER } from 'features/top-bar/constants/top-bar-constants'

import style from './showroom-search-bar.module.scss'

export const SearchBar = () => {
  const [selectCategory, setSelectedCategory] = useState(null)

  const navigate = useNavigate()

  const categories = [{ name: 'Category 1' }, { name: 'Category 2' }, { name: 'Category 3' }]

  const onCityChange = (e: DropdownChangeParams) => {
    setSelectedCategory(e.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const textBox = event.target as HTMLInputElement

    if (event.key === 'Enter') {
      navigate(`${PAGES_PATHS.SEARCH}/${textBox.value}`)
    }
  }

  return (
    <div className='p-inputgroup'>
      <span className={classNames('p-inputgroup-addon', style.searchBarInputCategoryHolder)}>
        <Dropdown
          className={style.searchBarInputCategory}
          value={selectCategory}
          options={categories}
          onChange={onCityChange}
          optionLabel='name'
          placeholder={DROPDOWN_PLACEHOLDER}
        />
      </span>
      <InputText onKeyDown={handleKeyDown} />
    </div>
  )
}
