import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Wrapper } from './components/Wrapper'
import { CartPage, CatalogPage, HomePage, ItemCard } from './pages'
import GlobalStyle from './styles/GlobalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <Routes>
      <Route element={<Wrapper />}>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/catalog'} element={<CatalogPage />} />
        <Route path={'/cart'} element={<CartPage />} />
        <Route path={'/phone/:id'} element={<ItemCard />} />
        <Route path={'*'} element={<h1>{'404 Page not found'}</h1>} />
      </Route>
    </Routes>
  </>
)
