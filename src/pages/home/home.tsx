// import { useAppDispatch, useAppSelector } from 'state'
// import { SET_EXEMPLE } from 'state/exempleSlice/exempleSlice'
import { ShowroomHeader } from 'features/header/showroom-header'
// import { HANDLE_SET_USER } from 'features/auth/state/reducers/auth-slice'
// import { authLogout } from 'features/auth/services/auth-api-services'
// import { nanoid } from 'nanoid'
import { ShowroomCarousel } from 'features/showroom/components/showroom-carousel/showroom-carousel'
// import { ShowroomFinalCard } from 'features/showroom/components/showroom-card/showroom-final-card'
import styles from 'pages/home/home.module.scss'
export const Home = () => {
  // const dispatch = useAppDispatch()
  // const { exemple } = useAppSelector((state) => state.exemple)
  // const { user } = useAppSelector((state) => state.auth)

  return (
    <div className={styles.homeContainer}>
      <div>
        <ShowroomHeader />
      </div>
      <div className={styles.homeCardsContainer}>
        {/* <div>
        {list.map((elem) => (
          <ShowroomCard property={elem} isGrid={true} role={0} key={nanoKey} />
          ))}
        </div> */}
        {/* <p onClick={handleChangeValue}>{exemple}</p>
      <div>Welcome back, {user?.email} !</div>
      <p
      onClick={() => {
        authLogout()
        dispatch(HANDLE_SET_USER({ access_token: '', display_name: '', email: '', photoUrl: '', isLoggedIn: false }))
          localStorage.clear()
        }}
        style={{ cursor: 'pointer' }}>
        Logout
      </p> */}
        {/* <ShowroomFinalCard /> */}
        <ShowroomCarousel
          property={{
            id: 0,
            title: '',
            description: '',
            shortDescription: '',
            price: '',
            image: '',
            location: '',
            isFavorite: false,
            type: '',
          }}
          isGrid={false}
          role={0}
        />
      </div>
    </div>
  )
}
