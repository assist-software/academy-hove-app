export type IPropertyType = 'medium | large'

export interface IProperty {
  image: string[]
}
export interface IPropertyLite {
  property: string
  location: string
  price: string
  about: string
  favorite: boolean
  status: string
  id: string
}
