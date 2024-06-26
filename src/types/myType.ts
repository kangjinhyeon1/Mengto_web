export type myType = {
  name: string
  mengto: boolean
  introduce: string
  curriculum: curri[]
}

type curri = {
  id: number
  userId: number
  title: string
  img?: string
  content: string
  name: string
  created_at: string
}
