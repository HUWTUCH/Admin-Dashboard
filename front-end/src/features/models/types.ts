export interface TotalProductsProps {
  title: string;
  quantity: number | string;
  imgSrc: string;
}
// TODO: Перенести тип в рівень entities/user і зміниш назву типу на initialLoginValuesType
export interface initialValuesType {
  email: string;
  password: string | number;
}