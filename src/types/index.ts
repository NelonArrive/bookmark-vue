export type TypeProfile = {
  name: string
  email: string
}

export type TypeCategory = {
  id: number
  name: string
  alias: string
}

export type TypeBookmark = {
  id: number
  category_id: number
  url: string
  title: string
  image: string
  created_at: Date
}

export type LoginResponse = {
  token: string
}
