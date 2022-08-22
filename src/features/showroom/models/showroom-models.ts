export type IPropertyType = 'medium' | 'large'

// folosita pentru edit/create unde sunt mai multe detalii
export interface IProperty {
  images: string[]
}

// Folosita pentru thumbnail unde sunt doar cateva
export interface IPropertyLite {
  thumbnail: string
}
