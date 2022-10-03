import { useAppSelector } from 'state'
import { ShowroomHeader } from 'features/header/showroom-header'
import { ShowroomCarousel } from 'features/showroom/components/showroom-carousel/showroom-carousel'
import styles from 'pages/home/home.module.scss'
export const Home = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <div className={styles.homeContainer}>
      <div>
        <ShowroomHeader />
      </div>
      <div className={styles.homeCardsContainer}>
        <div>Welcome back, {user?.email} !</div>

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
