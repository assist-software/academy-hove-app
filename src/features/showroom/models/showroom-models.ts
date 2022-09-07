export type IPropertyType = 'medium' | 'large'

// folosita pentru edit/create unde sunt mai multe detalii
export interface IProperty {
  images: string[]
}

// Folosita pentru thumbnail unde sunt doar cateva
export interface IPropertyLite {
  property: string
  location: string
  price: string
  about: string
  favorite: boolean
  status: string
  id: string
}
