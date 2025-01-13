import { useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Container, ProductCard } from '../../components'

import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useActions, useAppSelector } from '../../redux/useActions'

type Category = 'Newest' | 'Alphabetically' | 'Cheapest' | 'Default'

export const CatalogPage = () => {
  const location = useLocation()
  const splitedLocation = location.pathname.split('/')
  const lastPath = splitedLocation[splitedLocation.length - 1]

  const { getProducts, setSelectedCategory } = useActions()
  const loading =
    useAppSelector((state) => state.products.loading) === 'pending'
  const products = useAppSelector((state) => state.products.products)
  const title = useAppSelector((state) => state.selectedCategory.category)

  const categoryOptions = [
    'Default',
    'Newest',
    'Alphabetically',
    'Cheapest',
  ] as Category[]
  const quantityOptions = [4, 8, 16]

  const [amount, setAmount] = useState<number>(4)
  const [start, setStart] = useState<number>(0)
  const [end, setEnd] = useState<number>(4)
  const [sortBy, setSortBy] = useState<Category>('Newest')
  const [pagesQuantity, setPagesQuantity] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pagesStartIndex, setPagesStartIndex] = useState(0)

  const listOfGoods = useMemo(() => {
    return products.filter(({ category }) =>
      title ? category === title : category === lastPath,
    )
  }, [products, title, lastPath])

  const preparedList = useMemo(() => {
    if (sortBy === 'Default') return listOfGoods

    let sortedList = [...listOfGoods]
    switch (sortBy) {
      case 'Newest':
        sortedList.sort((a, b) => b.year - a.year)
        break
      case 'Cheapest':
        sortedList.sort((a, b) => a.fullPrice - b.fullPrice)
        break
      case 'Alphabetically':
        sortedList.sort((a, b) => a.name.localeCompare(b.name))
        break
    }
    return sortedList
  }, [listOfGoods, sortBy])

  const currentList = useMemo(
    () => preparedList.slice(start, end),
    [preparedList, start, end],
  )

  useEffect(() => {
    if (!loading) {
      setSelectedCategory(lastPath)
    }
  }, [loading, lastPath, setSelectedCategory])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  useEffect(() => {
    setPagesQuantity(Math.ceil(preparedList.length / amount))
  }, [preparedList, amount])

  const pagesArray = useMemo(
    () =>
      Array.from({ length: pagesQuantity }, (_, i) => i + 1).slice(
        pagesStartIndex,
        pagesStartIndex + 8,
      ),
    [pagesQuantity, pagesStartIndex],
  )

  const handleTabsNext = useCallback(() => {
    const newStart = start + amount
    const newEnd = Math.min(end + amount, preparedList.length)

    setStart(newStart)
    setEnd(newEnd)
    setCurrentPage((prev) => prev + 1)

    if (currentPage - 8 === pagesStartIndex) {
      setPagesStartIndex((prev) => prev + 8)
    }
  }, [amount, end, preparedList.length, start, currentPage, pagesStartIndex])

  const handleTabsPrev = useCallback(() => {
    const newStart = Math.max(start - amount, 0)
    const newEnd = newStart + amount

    setStart(newStart)
    setEnd(newEnd)
    setCurrentPage((prev) => prev - 1)

    if (currentPage - 1 === pagesStartIndex) {
      setPagesStartIndex((prev) => prev - 8)
    }
  }, [amount, start, currentPage, pagesStartIndex])

  const handlePageClick = useCallback(
    (pageNumber: number) => {
      const newStart = (pageNumber - 1) * amount
      const newEnd = newStart + amount

      setStart(newStart)
      setEnd(newEnd)
      setCurrentPage(pageNumber)
    },
    [amount],
  )
  console.log({ listOfGoods })
  if (loading) {
    return <p>Loading...</p>
  }

  if (!listOfGoods.length) {
    return <p>No products found</p>
  }

  return (
    <Container>
      <Title>
        {title
          ? title.toUpperCase()
          : splitedLocation[splitedLocation.length - 1]}
      </Title>
      <Info>{`${listOfGoods.length} models`}</Info>
      <Settings>
        <SelectBlock>
          <Label>{'Sort by'}</Label>
          <Select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSortBy(e.target.value)
            }
          >
            {categoryOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </SelectBlock>
        <SelectBlock>
          <Label>{'Items on page'}</Label>
          <Select onChange={(e) => setAmount(Number(e.target.value))}>
            {quantityOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </SelectBlock>
      </Settings>
      <Goods>
        {currentList.map((phone, index) => (
          <ProductCard {...phone} key={index} />
        ))}
      </Goods>
      <Tabs>
        <Button
          variant={'prev'}
          onClick={handleTabsPrev}
          disabled={currentPage === 1}
        />

        {pagesArray.map((number) => (
          <Button
            variant={'smallIcon'}
            key={number}
            selected={currentPage === number ? true : false}
            onClick={() => handlePageClick(number)}
            title={number.toString()}
          />
        ))}
        <Button
          variant={'next'}
          onClick={handleTabsNext}
          disabled={currentPage === pagesQuantity}
        />
      </Tabs>
    </Container>
  )
}

const Title = styled.h2`
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: bold;
  grid-column: 1/-1;
`

const Info = styled.p`
  margin-bottom: 10px;
  grid-column: 1/-1;

  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }
`

const Settings = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  grid-column: 1/-1;
`

const SelectBlock = styled.div``

const Label = styled.p`
  font-size: 12px;
  margin-bottom: 8px;
`

const Select = styled.select`
  background: var(--blue-gray);
  border: 1px solid var(--primary);
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
`

const Goods = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;
  grid-column: 1/-1;
`

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1/-1;
  @media (min-width: 1440px) {
    gap: 16px;
  }
`
