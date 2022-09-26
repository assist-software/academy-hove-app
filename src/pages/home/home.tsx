import { ShowroomCard } from 'features/showroom/components/showroom-card/showroom-card'
import { useAppDispatch, useAppSelector } from 'state'
import { SET_EXEMPLE } from 'state/exempleSlice/exempleSlice'
import imgThumbnail from 'features/showroom/assets/Frame_34500.png'
import { HANDLE_SET_USER } from 'features/auth/state/reducers/auth-slice'
import { authLogout } from 'features/auth/services/auth-api-services'

export const Home = () => {
  const dispatch = useAppDispatch()
  const { exemple } = useAppSelector((state) => state.exemple)
  const { user } = useAppSelector((state) => state.auth)
  const handleChangeValue = () => {
    dispatch(SET_EXEMPLE('The value has changed'))
  }

  const list = [
    {
      id: 0,
      title: 'Dreamy Treehouse Above Park City',
      description:
        'Designers tend to cut the lorem ipsum text when it pleases them to keep their designs nice and tidy. However, in reality, content is not the same length. Small areas may not be able to house the necessary content needed. This, in turn, causes you (the designer) to spend more time reworking the layout to fit the text. Dummy text misleads future content.',
      price: '712,123',
      image: imgThumbnail,
      location: 'Suceava, Romania',
      isFavorite: false,
    },
  ]

  console.log(user)
  return (
    <div>
      {list.map((elem, index) => (
        <ShowroomCard property={elem} isGrid={true} role={1} key={index} />
      ))}
      <p onClick={handleChangeValue}>{exemple}</p>
      <div>Welcome back, {user?.email} !</div>
      <p
        onClick={() => {
          authLogout()
          dispatch(HANDLE_SET_USER({ access_token: '', display_name: '', email: '', photoUrl: '', isLoggedIn: false }))
          localStorage.clear()
        }}
        style={{ cursor: 'pointer' }}>
        Logout
      </p>
    </div>
  )
}
