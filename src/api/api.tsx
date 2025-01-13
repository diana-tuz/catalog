import { ProductCardPropsType } from 'src/components/types'
import { client } from '../helper.tmp/FetchClient'

type PhoneInfo = {}
export const getProducts = async () =>
  client.get<ProductCardPropsType[]>('/products.json')

export const getDescription = async (id: string) =>
  client.get<PhoneInfo>(`/products/${id}.json`)

export const getProductsByCategory = async (type: string) =>
  client.get<ProductCardPropsType[]>('/products.json').then((response) => {
    if (type) {
      return [...response].filter((product) => product.category === type)
    }

    return response
  })
