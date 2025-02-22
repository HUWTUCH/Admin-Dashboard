export interface HeaderProps {
  openMenu: () => void;
}
export interface HeaderPageTitles {
  '/': string,
  '/customers': string,
  '/orders': string,
  '/products': string,
  '/suppliers': string,
  [key: string]: string,
}
