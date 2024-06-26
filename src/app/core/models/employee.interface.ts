export interface EmployeeNetland {
  name: string,
  age: number | null,
  isFullTime: boolean,
  position: Position,
}

export enum Position {
  Junior = 'Junior',
  Mid = 'Mid',
  Senior = 'Senior',
  Manager = 'Manager',
}
