import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ProductCardPropsType } from 'src/components/types'
import { getData } from '../../utils/httpClient'
import { RootState } from '../store'

interface ProductsState {
  products: ProductCardPropsType[]
  loading: 'pending' | 'fulfilled' | 'rejected'
  error: string | null
}
const initialState: ProductsState = {
  products: [],
  loading: 'pending',
  error: null,
}

export const getProducts = async (): Promise<ProductCardPropsType[]> => {
  try {
    return (await getData<ProductCardPropsType[]>('/products.json')) ?? []
  } catch (err) {
    throw new Error(`${err}`)
  }
}

export const init = createAsyncThunk<ProductCardPropsType[]>(
  'products/fetch',
  getProducts,
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = 'pending'
      state.error = null
      state.products = []
    })
    builder.addCase(init.fulfilled, (state, action) => {
      state.products = action.payload
      state.loading = 'fulfilled'
    })
    builder.addCase(init.rejected, (state) => {
      state.loading = 'rejected'
      state.error = 'Something went wrong!'
    })
  },
})

export const getProductsByCategory = (state: RootState, category: string) =>
  state.products.products.filter((item) => item.category === category)

export default productsSlice.reducer
