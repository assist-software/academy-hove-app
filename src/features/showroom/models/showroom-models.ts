export interface IProperty {
  property: IProperty1
  isGrid: boolean
  role: number
}

export interface IProperty1 {
  id: number
  title: string
  description: string
  price: string
  image: string
  location: string
  isFavorite: boolean
  shortDescription: string
  type: string
}
