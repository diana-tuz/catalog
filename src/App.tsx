import { StrictMode } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Provider } from 'react-redux'

import { store } from './redux/store'

import { Wrapper } from './components/Wrapper'
import { CartPage, CatalogPage, HomePage, ItemCard } from './pages'

import './App.scss'
import GlobalStyle from './styles/GlobalStyles'

export const App = () => (
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Routes>
        <Route element={<Wrapper />}>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/catalog/:category'} element={<CatalogPage />} />
          <Route path={'/cart'} element={<CartPage />} />
          <Route path={'/phone/:id'} element={<ItemCard />} />
          <Route path={'*'} element={<h1>{'404 Page not found'}</h1>} />
        </Route>
      </Routes>
    </Provider>
  </StrictMode>
)
