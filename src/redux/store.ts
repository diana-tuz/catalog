import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products'
import selectedCategoryReducer from './selectedCategory'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    selectedCategory: selectedCategoryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
