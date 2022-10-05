export interface IAddItem {
  details_title: string
  details_category: 'Latest' | 'Big Houses' | 'Small Houses'
  details_price: string
  image: string
  description: string
  contact_location: string
  contact_phone: string
}

export interface IAddDetails {
  details_title: string
  details_category: 'Latest' | 'Big Houses' | 'Small Houses'
  details_price: string
}
