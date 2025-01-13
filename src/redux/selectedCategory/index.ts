import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: '',
}

const selectedCategorySlice = createSlice({
  name: 'selectedCategory',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.category = action.payload
    },
  },
})

export const { setSelectedCategory } = selectedCategorySlice.actions

export default selectedCategorySlice.reducer
