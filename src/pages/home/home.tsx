import { ShowroomCard } from 'features/showroom/components/showroom-card/showroom-card'
import { useAppDispatch, useAppSelector } from 'state'
import { SET_EXEMPLE } from 'state/exempleSlice/exempleSlice'
import imgThumbnail from 'features/showroom/assets/Frame_34500.png'

export const Home = () => {
  const dispatch = useAppDispatch()
  const { exemple } = useAppSelector((state) => state.exemple)
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

  return (
    <div>
      {list.map((elem, index) => (
        <ShowroomCard property={elem} isGrid={true} role={1} key={index} />
      ))}
      <p onClick={handleChangeValue}>{exemple}</p>
    </div>
  )
}
