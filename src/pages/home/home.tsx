import { useAppDispatch, useAppSelector } from 'state'
import { SET_EXEMPLE } from 'state/exempleSlice/exempleSlice'
import { ShowroomHeader } from 'features/header/showroom-header'
export const Home = () => {
  const dispatch = useAppDispatch()
  const { exemple } = useAppSelector((state) => state.exemple)
  const handleChangeValue = () => {
    dispatch(SET_EXEMPLE('The value has changed'))
  }
  return (
    <>
      <ShowroomHeader />
      <div>
        <p onClick={handleChangeValue}>{exemple}</p>
      </div>
    </>
  )
}
