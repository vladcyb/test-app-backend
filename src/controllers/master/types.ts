export type DeleteMasterBodyType = {
  specId: number
}

export type AddMasterBodyType = {
  login: string
  surname: string
  name: string
  patronymic: string
  specId: number
}

export type EditMasterBodyType = {
  id: number
  login?: string
  surname?: string
  name?: string
  patronymic?: string
  specId?: number
}
