export interface HeaderPropsType {
  onCLickBurger: () => void
  displayMenu: boolean
  navigation: NavigationItemType[]
}

export type NavigationItemType = {
  name: string
  link: string
  onClick?: () => void
}
