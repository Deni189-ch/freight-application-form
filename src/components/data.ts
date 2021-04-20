export interface IitemOption  {
  id: number
  value: string
}

export const liftingСapacity: IitemOption[] = [
  {id: 1, value: '1 тонна' },
  {id: 2, value: '3 тонны' },
  {id: 3, value: '5 тонн' },
  {id: 4, value: '10 тонн' },
];

export const bootMethod: IitemOption[] = [
  {id: 1, value: 'Открытая' },
  {id: 2, value: 'Закрытая' },
];

export const typeOfCargo: IitemOption[] = [
  {id: 1, value: 'Сыпучий' },
  {id: 2, value: 'Твердый' },
  {id: 3, value: 'Опасный' },
];

export const HazardClass: IitemOption[] = [
  {id: 1, value: '1 класс' },
  {id: 2, value: '2 класс' },
  {id: 3, value: '3 класс' },
  {id: 4, value: '4 класс' },
];

