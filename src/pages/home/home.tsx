import { useAppDispatch, useAppSelector } from 'state'
import { SET_EXEMPLE } from 'state/exempleSlice/exempleSlice'

export const Home = () => {
  const dispatch = useAppDispatch()
  const { exemple } = useAppSelector((state) => state.exemple)
  const handleChangeValue = () => {
    dispatch(SET_EXEMPLE('The value has changed'))
  }
  return (
    <div>
      <p onClick={handleChangeValue}>{exemple}</p>
    </div>
  )
}
