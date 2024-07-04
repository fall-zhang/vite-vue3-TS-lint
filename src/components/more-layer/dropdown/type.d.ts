export type MenuItem = {
  divided: boolean
  label: string
  key: string | number
  children?: MenuItem
}

type DropdownProps = {
  menuList: MenuItem[]
}