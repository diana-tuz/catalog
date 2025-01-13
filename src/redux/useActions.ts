import { useMemo } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { getProductsByCategory, init } from './products'
import { setSelectedCategory } from './selectedCategory'
import { AppDispatch, RootState } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(
    () => ({
      getProducts: () => dispatch(init()),
      setSelectedCategory: (category: string) =>
        dispatch(setSelectedCategory(category)),
    }),

    [dispatch],
  )
}

export const useProductsByCategory = (category: string) => {
  const products = useAppSelector((state) =>
    getProductsByCategory(state, category),
  )
  return products
}
