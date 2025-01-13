export interface ProductCardPropsType {
  addToCart?: () => void
  capacity: string
  category: string
  color: string
  fullPrice: number
  id: number
  image: string
  isHotPrices?: boolean
  itemId: string
  name: string
  price: number
  ram: string
  screen: string
  year: number
}
