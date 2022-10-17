export interface IAddItem {
  title: string
  category: { name: 'latest' | 'Big Houses' | 'Small Houses' | '' }
  price: string
  file?:
    | [
        string | null,
        string | null,
        string | null,
        string | null,
        string | null,
        string | null,
        string | null,
        string | null,
        string | null,
      ]
    | null
  description: string
  location: string
  phone: string
  id?: string
}
